import { useParams } from "react-router-dom";

import useGetNotionPage from "../../api/useGetNotionPage";
import NotionPost from "../../components/NotionPost";
import SkeletonPost from "../../components/SkeletonPost";

export default function Post() {
  const { pageId } = useParams();
  const { data: post, isLoading } = useGetNotionPage(pageId);

  return <>{isLoading ? <SkeletonPost /> : <NotionPost blockMap={post} />}</>;
}
