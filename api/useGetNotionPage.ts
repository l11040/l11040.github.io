import { apiClient } from "./api-config";
import { BlockMapType } from "react-notion";

export const GET_NOTION_PAGE = "/useGetNotionPage";

export const getNotionPage = async (
  pageId?: string
): Promise<BlockMapType | undefined> => {
  if (!pageId) return undefined;
  const { data } = await apiClient.get<any>(`/page/${pageId}`);
  return data;
};

// export default function useGetNotionPage(pageId?: string) {
//   return useQuery([GET_NOTION_PAGE, pageId], () => fetcher(pageId), {
//     enabled: !!pageId,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchOnReconnect: false,
//   });
// }
