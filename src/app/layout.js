import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata = {
  title: "Mahmoud and Lamis - Wedding Ceremony",
  description: "Invite Wedding's Day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
