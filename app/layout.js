// context providers
import ThemeProvider from "@/contexts/theme-context";
import FontProvider from "@/contexts/font-context";

// custom components
import MainHeader from "@/components/header/header";
import Body from "@/components/root-layout/body";

// global styles
import "./globals.css";

export const metadata = {
  title: "Dictionary Web App",
  description:
    "Improve your English skills with our easy-to-use description app. Learn grammar, vocabulary, and writing techniques in a fun and engaging way.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <FontProvider>
        <html lang="en">
          <Body className="bg-neutral-white dark:bg-neutral-black h-screen box-border text-neutral-thunder-black dark:text-neutral-white transition-all duration-200">
            <div className="px-5 md:px-8 lg:px-[25%]">
              <MainHeader />
              {children}
            </div>
          </Body>
        </html>
      </FontProvider>
    </ThemeProvider>
  );
}
