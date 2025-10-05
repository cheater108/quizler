import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Quizler",
  description: "Create your own quiz or take one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <section className="p-4 m-auto md:w-1/2">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
