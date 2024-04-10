// context providers
import ThemeProvider from "@/contexts/theme-context";
import FontProvider from "@/contexts/font-context";

// custom components
import Body from "@/components/root-layout/body";
import Header from "@/components/header/header";
import SearchField from "@/components/root-layout/search-field";
import Main from "@/components/main/main";

// global styles
import "./globals.css";
import ContentContainer from "@/components/main/main";

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
          <Body>
            <Header />
            <main>
              <SearchField />
              <ContentContainer>{children}</ContentContainer>
            </main>
          </Body>
        </html>
      </FontProvider>
    </ThemeProvider>
  );
}
