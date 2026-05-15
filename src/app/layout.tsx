import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "../components/layout/MainLayout";
import MainLayout from "../components/layout/MainLayout";


export const metadata: Metadata = {
  title: "Nezus",
  description: "Social Media Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body>
          <MainLayout>
          {children}
          </MainLayout>
        </body>
      </html>
    </ClerkProvider>
  );
}