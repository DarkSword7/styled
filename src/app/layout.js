"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Nav from "@/components/Nav";
import { StateContext } from "../../lib/context";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <StateContext>
      <UserProvider>
        <ApolloProvider client={client}>
          <html lang="en">
            <title>Styled.</title>
            <body className={inter.className} suppressHydrationWarning={true}>
              <Toaster />
              <Nav />
              {children}
            </body>
          </html>
        </ApolloProvider>
      </UserProvider>
    </StateContext>
  );
}
