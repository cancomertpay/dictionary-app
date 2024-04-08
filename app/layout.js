import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dictionary Web App",
  description:
    "Improve your English skills with our easy-to-use description app. Learn grammar, vocabulary, and writing techniques in a fun and engaging way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
