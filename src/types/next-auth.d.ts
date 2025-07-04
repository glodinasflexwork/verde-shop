import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
      image?: string | null
      admin: boolean
    }
  }

  interface User {
    admin: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    admin: boolean
  }
}

