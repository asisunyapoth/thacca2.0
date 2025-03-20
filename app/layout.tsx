"use client";

import "../styles/index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/image/logo.jpg" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}