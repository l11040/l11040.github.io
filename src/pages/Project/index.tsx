import useGetNotionTable from "../../api/useGetNotionTable";
import NotionProjectPosts from "../../components/NotionProjectPosts";
import ContentsLayout from "../../layouts/ContentsLayout";

export default function Project() {
  const { data: blogPosts } = useGetNotionTable(
    "80f674ba892b441f9e9d3ff2500a5592",
  );
  return (
    <ContentsLayout title="Project">
      <NotionProjectPosts blogPosts={blogPosts} />
    </ContentsLayout>
  );
}
