import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans'
});

export const metadata = {
  title: "Mentoroc",
  description: "L'assitant IA dédié au mentors OPENCLASSROOMS !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`min-h-screen antialiased ${poppins.className}`}>{children}</body>
    </html>
  );
}
