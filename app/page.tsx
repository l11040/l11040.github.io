"use client"

import { BLOG_TABLE_ID, GET_NOTION_TABLE, getNotionTable } from "@/api/useGetNotionTable";
import NotionPosts from "@/components/blog/NotionPosts";
import CareerList from "@/components/career/CareerList";
import ContentsLayout from "@/layouts/ContentsLayout";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: blogPosts } = useQuery({
    queryKey: [GET_NOTION_TABLE, BLOG_TABLE_ID],
    queryFn: () => getNotionTable(BLOG_TABLE_ID),
  })
  return (
    <div className="flex flex-col gap-8">
      <ContentsLayout title="Career">
        <CareerList />
      </ContentsLayout>
      <ContentsLayout title="Blog">
        <NotionPosts blogPosts={blogPosts} />
      </ContentsLayout>
    </div>
  );
}
