
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            //   clientId: process.env.GITHUB_ID,
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID_GITHUB,
            //   clientSecret: process.env.GITHUB_SECRET,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET_GITHUB,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID_FACEBOOK,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET_FACEBOOK,
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_CLIENT_ID_GOOGLE,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET_GOOGLE,
        }),

        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.role = "sex"
            session.accessToken = token.accessToken;
            return session;
        },
    },
}
export default NextAuth(authOptions)