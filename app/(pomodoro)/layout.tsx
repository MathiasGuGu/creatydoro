import React from "react";
import Appbar from "./_components/Appbar/Appbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
}
