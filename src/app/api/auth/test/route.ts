import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test basic API functionality
    return NextResponse.json({ 
      status: 'ok', 
      message: 'Auth API is working',
      timestamp: new Date().toISOString(),
      env: {
        hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
        hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV
      }
    });
  } catch (error) {
    console.error('Auth test error:', error);
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Auth API test failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

