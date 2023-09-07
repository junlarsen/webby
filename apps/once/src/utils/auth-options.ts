import { NextAuthOptions } from 'next-auth';
import Cognito from 'next-auth/providers/cognito';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    Cognito({
      clientId: process.env.ONCE_COGNITO_CLIENT_ID,
      clientSecret: process.env.ONCE_COGNITO_CLIENT_SECRET,
      issuer: process.env.ONCE_COGNITO_ISSUER,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};
