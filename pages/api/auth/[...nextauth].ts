import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials"

const nextAuthOptions:NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        }
      }, 
      async authorize(credentials, req) {
          const {email, password} = credentials as {email:string, password:string}
          const response = await axios.post(`${process.env.API_URL}/user/login`, {
            email,
            password
          });
          if(response.status == 200) {
            return response.data.data
          } else {
            throw new Error(response.data.status);
          }
      },
    })
  ],
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async session({session, token}){
      console.log(token.token)
      const response = await axios.get(`${process.env.API_URL}/user/me`, {
        headers: {'Authorization': `Bearer ${token.token}`}
      });
      session.user.name = response.data.name;
      session.user.email = response.data.email;
      session.user.image = response.data.image;
      return session;
    },
    async jwt({token, user}){
      return { ...token, ...user }
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(nextAuthOptions);