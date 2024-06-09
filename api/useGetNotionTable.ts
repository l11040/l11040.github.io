import { apiClient } from "./api-config";
import { NotionTableType } from "@/types/notion";

export const BLOG_TABLE_ID = "3723371501ca4ebba16f4ca8f65c5785";
export const GET_NOTION_TABLE = "/useGetNotionTable";

export const getNotionTable = async (
  tableId?: string
): Promise<NotionTableType[] | undefined> => {
  if (!tableId) return undefined;
  const { data } = await apiClient.get<any>(`/table/${tableId}`);
  return data;
};

// export default function useGetNotionTable(tableId?: string) {
//   return useQuery([GET_NOTION_TABLE, tableId], () => fetcher(tableId), {
//     enabled: !!tableId,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//     refetchOnReconnect: false,
//   });
// }
