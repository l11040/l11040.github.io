import { useQuery } from "react-query";
import { apiClient } from "./api-config";
import { NotionTableType } from "../types/notion";

export const GET_NOTION_TABLE = "/useGetNotionTable";

const fetcher = async (
  tableId?: string,
): Promise<NotionTableType[] | undefined> => {
  if (!tableId) return undefined;
  const { data } = await apiClient.get<any>(`/table/${tableId}`);
  return data;
};

export default function useGetNotionTable(tableId?: string) {
  return useQuery([GET_NOTION_TABLE, tableId], () => fetcher(tableId), {
    enabled: !!tableId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
}
