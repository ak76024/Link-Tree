import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ak76024 - Link Tree",
  description: "A simple link tree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-green-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
