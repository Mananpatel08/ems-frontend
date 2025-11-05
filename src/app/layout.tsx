import type { Metadata } from "next";
import "../style/globals.css";
import QueryProvider from "@/providers/QueryProvider";
import ToastProviderWrapper from "@/providers/ToastProviderWrapper";


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
            {children}
          </QueryProvider>
        </ToastProviderWrapper>
      </body>
    </html>
  );
}
