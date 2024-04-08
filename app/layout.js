// custom html component
import "./globals.css";

import ThemeProvider from "@/contexts/theme-context";
import MainHeader from "@/components/header/header";

export const metadata = {
  title: "Dictionary Web App",
  description:
    "Improve your English skills with our easy-to-use description app. Learn grammar, vocabulary, and writing techniques in a fun and engaging way.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className="bg-neutral-white dark:bg-neutral-black h-screen box-border text-neutral-black dark:text-neutral-white">
          <MainHeader />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
