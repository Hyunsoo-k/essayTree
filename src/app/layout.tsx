import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;