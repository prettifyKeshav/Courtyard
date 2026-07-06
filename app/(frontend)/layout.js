import { Lato } from "next/font/google";
import localFont from "next/font/local";
import MainTemplates from "../../components/frontendcomponents/templates/MainTemplates";

const optima = localFont({
  src: [
    { 
      path: "../../fonts/Optima.woff",
      weight: "400",
    },
    {
      path: "../../fonts/Optima.woff2",
      weight: "500",
    },
  ],
  variable: "--font-optima",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Courtyard",
  description: "Courtyard building better dreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${optima.variable}`} >
      <body>
        <MainTemplates>
          {children}
        </MainTemplates>
      </body>
    </html>
  );
}