import { useParams } from "react-router-dom";

import useGetNotionPage from "../../api/useGetNotionPage";
import NotionPost from "../../components/NotionPost";

export default function Post() {
  const { pageId } = useParams();
  const { data: post } = useGetNotionPage(pageId);

  return <NotionPost blockMap={post} />;
}
