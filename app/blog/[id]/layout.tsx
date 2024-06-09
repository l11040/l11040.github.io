import { GET_NOTION_PAGE, getNotionPage } from "@/api/useGetNotionPage";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { BlockMapType } from "react-notion";

type Props = {
  params: { id: string }
}

interface LayoutProps extends React.PropsWithChildren, Props { }

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const queryClient = new QueryClient();
  const blockMap: BlockMapType = await queryClient.fetchQuery({
    queryKey: [GET_NOTION_PAGE, params.id],
    queryFn: () => getNotionPage(params.id),
  });
  const value = blockMap[params.id].value["properties"];
  return {
    title: String(value.title[0]),
    description: value.JIFT[0],
    keywords: value["THK:"][0][0].split(","),
  }
}

export default async function Layout({ children, params }: LayoutProps) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_NOTION_PAGE, params.id],
    queryFn: () => getNotionPage(params.id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary >
  );
}