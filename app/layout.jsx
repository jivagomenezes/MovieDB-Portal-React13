import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: "black", color: "white" }}
        className={`${montserrat.className} mx-20 my-12`}
      >
        {children}
      </body>
    </html>
  );
}
