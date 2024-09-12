import type { Metadata } from "next";
import "./globals.scss";
import Body from "@/components/Body";

export const metadata: Metadata = {
  title: "Jake Eckhardt",
  description: "Jake Eckhardt - a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Body
          children={children}
        />
      </body>
    </html>
  );
}
