import NextAuth from 'next-auth';
import { authOptions } from '@/utils/auth-options';

export default NextAuth(authOptions);
