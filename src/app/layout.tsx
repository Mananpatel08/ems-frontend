import type { Metadata } from "next";
import "../style/globals.css";
import "nprogress/nprogress.css";
import QueryProvider from "@/providers/QueryProvider";
import ToastProviderWrapper from "@/providers/ToastProviderWrapper";
import NProgressWrapper from "./NProgressWrapper";


export const metadata: Metadata = {
  title: "Login | EMS",
  description: "Login page for EMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastProviderWrapper>
          <QueryProvider>
            <NProgressWrapper />
            {children}
          </QueryProvider>
        </ToastProviderWrapper>
      </body>
    </html>
  );
}
