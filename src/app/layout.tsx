import type { Metadata } from "next";
import "../style/globals.css";
import "nprogress/nprogress.css";
import NProgressWrapper from "./NProgressWrapper";
import { QueryProvider, ToastProviderWrapper, UserProviderWrapper, DashBoardPrividerWrapper } from "@/providers";

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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <ToastProviderWrapper>
          <QueryProvider>
            <UserProviderWrapper>
              <DashBoardPrividerWrapper>
                <NProgressWrapper />
                {children}
              </DashBoardPrividerWrapper>
            </UserProviderWrapper>
          </QueryProvider>
        </ToastProviderWrapper>
      </body>
    </html>
  );
}
