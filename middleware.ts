import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const status = request.cookies.get('Authorization');

  if (!status) {
    return NextResponse.redirect(new URL('/auth/login/receiveCode', request.url).toString());
  }
};

export const config = {
  matcher: ['/'],
};
