"use client"

import { GET_NOTION_PAGE, getNotionPage } from "@/api/useGetNotionPage";
import NotionPost from "@/components/blog/NotionPost";
import SkeletonPost from "@/components/blog/SkeletonPost";
import { useQuery } from "@tanstack/react-query";

export default function Post({ params }: { params: { id: string } }) {
  const { data: post, isLoading } = useQuery({
    queryKey: [GET_NOTION_PAGE, params.id],
    queryFn: () => getNotionPage(params.id),
  });

  return <>{isLoading ? <SkeletonPost /> : <NotionPost pageId={params.id} blockMap={post} />}</>;
}
