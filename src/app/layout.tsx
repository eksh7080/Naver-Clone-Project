import type { Metadata } from "next";
import StyledComponentsRegistry from "lib/registry";
import GlobalStyles from "styles/GlobalStyle";
import Header from "components/layout/header";

export const metadata: Metadata = {
  title: "네이버 클론 프로젝트",
  description: "네이버 클론",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
