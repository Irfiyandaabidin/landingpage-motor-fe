import NextAuth from "next-auth";

declare module 'next-auth' {
  interface Session {
    user: {
      name: string,
      id: number,
      email: string,
      image: string
    }
  }
}