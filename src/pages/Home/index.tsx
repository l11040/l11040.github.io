import useGetNotionTable from "../../api/useGetNotionTable";
import NotionPosts from "../../components/NotionPosts";
import RootLayout from "../../layouts/RootLayout";

export default function Home() {
  const { data: blogPosts } = useGetNotionTable(
    "3723371501ca4ebba16f4ca8f65c5785",
  );
  return (
    <>
      <RootLayout>
        <NotionPosts blogPosts={blogPosts} />
      </RootLayout>
    </>
  );
}
