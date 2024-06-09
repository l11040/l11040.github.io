import { BLOG_TABLE_ID, GET_NOTION_TABLE, getNotionTable } from "@/api/useGetNotionTable";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function Layout({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_NOTION_TABLE, BLOG_TABLE_ID],
    queryFn: () => getNotionTable(BLOG_TABLE_ID),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary >
  );
}