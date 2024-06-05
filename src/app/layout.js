"use client";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Nav from "@/components/Nav";
import { StateContext } from "../../lib/context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <StateContext>
      <ApolloProvider client={client}>
        <html lang="en">
          <title>Next.js with Strapi</title>
          <body className={inter.className} suppressHydrationWarning={true}>
            <Nav />
            {children}
          </body>
        </html>
      </ApolloProvider>
    </StateContext>
  );
}
