import type { Metadata } from "next";
import "../style/globals.css";
import "nprogress/nprogress.css";
import NProgressWrapper from "./NProgressWrapper";
import { QueryProvider, ToastProviderWrapper, UserProviderWrapper } from "@/providers";

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
            <UserProviderWrapper>
              <NProgressWrapper />
              {children}
            </UserProviderWrapper>
          </QueryProvider>
        </ToastProviderWrapper>
      </body>
    </html>
  );
}
