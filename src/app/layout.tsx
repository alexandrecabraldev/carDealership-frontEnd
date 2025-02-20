import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header className="m-auto max-w-80percent py-10">
          <ul className="flex space-between justify-between align-ceter">
            <a href="/">
              <svg className="w-28 h-8" fill="black" viewBox="0 0 7774 2048">
                <path d="M7296.82.052 6752.798 1024l544.022 1023.948h477.424L7239.034 1024 7774.244.052zm-1130.746 0v1705.534L5275.298.052 4205.476 2047.954h470.514l599.916-1147.71 254.406 487.47h-254.406l-178.412 341.108h611.236l166.464 319.132h726.816V.052h-435.96zm-1767.734 0-599.916 1147.71L3199.138.052h-470.514l1069.822 2047.902L4868.268.052H4398.39zm-2076.172 0-892.04 1707.424L1072.7 1024 1607.91.052h-477.424L586.464 1024l544.022 1023.948h593.006l166.464-319.132h611.236l-178.412-341.108h-254.406l254.406-487.47 598.678 1147.71h470.514L2322.15.046zM-.244 2047.952h435.33V.05H-.244z"></path>
              </svg>
            </a>
            <div className="flex gap-10 text-black">
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/register">Registre um carro</a>
              </li>
              <li>
                <a href="#car">Carros</a>
              </li>
            </div>
          </ul>
        </header>
        
        {children}
        
      </body>
    </html>
  );
}
