import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context";
import { getUserSession } from "@/lib/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kafesium",
  description: "Kafesium",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const response = await getUserSession();
  const user = response?.data || null;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white"div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white`}
      >
        <AuthProvider userInitial={user}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
