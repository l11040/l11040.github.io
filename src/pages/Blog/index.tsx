import useGetNotionTable from "../../api/useGetNotionTable";
import NotionPosts from "../../components/NotionPosts";
import ContentsLayout from "../../layouts/ContentsLayout";

export default function Blog() {
  const { data: blogPosts } = useGetNotionTable(
    "3723371501ca4ebba16f4ca8f65c5785",
  );
  return (
    <ContentsLayout title="Blog">
      <NotionPosts blogPosts={blogPosts} />
    </ContentsLayout>
  );
}
