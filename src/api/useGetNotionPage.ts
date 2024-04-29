import { useQuery } from "react-query";
import { apiClient } from "./api-config";
import { NotionTableType } from "../types/notion";

export const GET_NOTION_PAGE = "/useGetNotionPage";

const fetcher = async (
  pageId?: string,
): Promise<NotionTableType[] | undefined> => {
  if (!pageId) return undefined;
  const { data } = await apiClient.get<any>(`/page/${pageId}`);
  return data;
};

export default function useGetNotionPage(pageId?: string) {
  return useQuery([GET_NOTION_PAGE, pageId], () => fetcher(pageId), {
    enabled: !!pageId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
