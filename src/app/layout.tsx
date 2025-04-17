import dynamic from "next/dynamic";
import { ReactNode } from "react";

import "./globals.scss";

const Header = dynamic(() => import("@/component/Header"), { ssr: false });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Charmonman:wght@400;700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        <div style={{ height: "2000px"}}></div>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;