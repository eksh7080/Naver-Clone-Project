import type { Metadata } from "next";
import StyledComponentsRegistry from "src/lib/registry";

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
