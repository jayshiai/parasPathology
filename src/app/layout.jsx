import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "MediPlus",
  description: "Pathology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}