import useGetNotionTable from "../../api/useGetNotionTable";
import CareerList from "../../components/CareerList";
import NotionPosts from "../../components/NotionPosts";
import NotionProjectPosts from "../../components/NotionProjectPosts";
import ContentsLayout from "../../layouts/ContentsLayout";

export default function Home() {
  const { data: blogPosts } = useGetNotionTable(
    "3723371501ca4ebba16f4ca8f65c5785",
  );
  const { data: projectPosts } = useGetNotionTable(
    "80f674ba892b441f9e9d3ff2500a5592",
  );
  return (
    <div className="flex flex-col gap-8">
      <ContentsLayout title="Career">
        <CareerList />
      </ContentsLayout>
      <ContentsLayout title="Project">
        <NotionProjectPosts blogPosts={projectPosts} />
      </ContentsLayout>
      <ContentsLayout title="Blog">
        <NotionPosts blogPosts={blogPosts} />
      </ContentsLayout>
    </div>
  );
}
