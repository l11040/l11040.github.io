import useGetNotionTable from "../../api/useGetNotionTable";
import CareerList from "../../components/CareerList";
import NotionPosts from "../../components/NotionPosts";
import ContentsLayout from "../../layouts/ContentsLayout";

export default function Home() {
  const { data: blogPosts } = useGetNotionTable(
    "3723371501ca4ebba16f4ca8f65c5785",
  );
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
