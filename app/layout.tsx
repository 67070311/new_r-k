import { Anuphan } from "next/font/google";
import Navbar from "./component/navbar";
import NavbarMobile from "./component/navbarmobile";
import Footer from "./component/footer";
import "./globals.css";

const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anuphan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={anuphan.variable}>
        {/* Desktop */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>

        <main className="pt-[82px] lg:pt-[88px] min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
