import useGetNotionTable from "../../api/useGetNotionTable";
import NotionPosts from "../../components/NotionPosts";

export default function Home() {
  const { data: blogPosts } = useGetNotionTable(
    "3723371501ca4ebba16f4ca8f65c5785",
  );
  return (
    <>
      <NotionPosts blogPosts={blogPosts} />
    </>
  );
}
