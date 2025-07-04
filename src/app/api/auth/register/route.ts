import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password, newsletter } = await request.json()

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { message: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Wachtwoord moet minimaal 8 karakters lang zijn' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { message: 'Er bestaat al een account met dit e-mailadres' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        newsletter: newsletter || false,
        emailVerified: null, // Will be set when email is verified
      }
    })

    // Remove password from response
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...userWithoutPassword } = user

    return NextResponse.json(
      { 
        message: 'Account succesvol aangemaakt',
        user: userWithoutPassword 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Er is een fout opgetreden bij het aanmaken van je account' },
      { status: 500 }
    )
  }
}

