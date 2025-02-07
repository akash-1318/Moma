import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "Moma",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
        </body>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-grey-600">
            Made with ❤️ by Akash Sharma
          </div>
        </footer>
      </html>
    </ClerkProvider>
  );
}
