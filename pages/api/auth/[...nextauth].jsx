import { axiosInstance } from "@/config/config";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { security_code, phone_number } = credentials;
        console.log(credentials);

        // perform you login logic
        if (security_code?.length !== 5) {
          return null;
        }

        try {
          const res = await axiosInstance.post("/agent/code_verify/", {
            phone_number,
            security_code,
          });
          console.log(res.data);
          if (res.data) return res.data;
          else return null;
        } catch (error) {
          return "Error";
        }
      },
    }),
  ],
  // pages: {
  //   signIn: "/login/signIn"
  // }
});
