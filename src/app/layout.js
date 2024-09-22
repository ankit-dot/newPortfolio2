

import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Head from "next/head";
import ClarityScript from "@/ClarityScript";
import TenXLaunchScript from "@/Luanch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ankit Solanki Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <script
          src="https://app.10xlaunch.ai/widget"
          data-app-id="3734c93a-5bbd-4876-a297-fcff38fe2fe5"
          async
          defer
        />
       
      </Head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <ClarityScript />
        <TenXLaunchScript/>
      </body>
    </html>
  );
}
