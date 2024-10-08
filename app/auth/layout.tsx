import type {Metadata} from "next";
import {Inter} from "next/font/google";
import 'rsuite/dist/rsuite-no-reset.min.css';
import {Header} from "@/fsd/widgets/header";
import {QueryProvider} from "@/fsd/core/providers/QueryProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next core",
};

export default function AuthLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <QueryProvider>
      <main>{children}</main>
    </QueryProvider>
    </body>
    </html>
  );
}
