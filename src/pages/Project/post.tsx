import { useParams } from "react-router-dom";

import useGetNotionPage from "../../api/useGetNotionPage";
import SkeletonPost from "../../components/SkeletonPost";
import NotionProjectPost from "../../components/NotionProjectPost";

export default function ProjectPost() {
  const { pageId } = useParams();
  const { data: post, isLoading } = useGetNotionPage(pageId);

  return (
    <>{isLoading ? <SkeletonPost /> : <NotionProjectPost blockMap={post} />}</>
  );
}
