import { Providers } from "@/components/Providers";
import React from "react";
import "../index.css";

export const metadata = {
  title: "Hudaa - Quran App",
  description:
    "Your peaceful companion for reading, memorizing, and listening to the Holy Quran.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
