import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DefaultLayout from "@/app/DefaultLayout";
import Providers from "@/hooks/useReactQuery";
import { QueryClient } from "@tanstack/react-query";
import { BLOG_TABLE_ID, GET_NOTION_TABLE, getNotionTable } from "@/api/useGetNotionTable";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "l11040's blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_NOTION_TABLE, BLOG_TABLE_ID],
    queryFn: () => getNotionTable(BLOG_TABLE_ID),
  });

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </Providers>
      </body>
    </html >
  );
}
