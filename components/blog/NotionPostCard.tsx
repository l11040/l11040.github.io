import { NotionTableType } from "@/types/notion";
import Link from "next/link";
import Card from "../common/Card";
import { Books } from "@/icons/icon";

interface NotionPostCardProps extends NotionTableType { }

export default function NotionPostCard({
  id,
  title,
  description,
  title_image_link,
  tags,
  write_date,
}: NotionPostCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="h-fit cursor-pointer overflow-hidden !p-0 transition hover:scale-[1.02] ">
        <div className="max-h-[250px] overflow-hidden">
          {title_image_link ? (
            <img className="w-fit" src={title_image_link} alt="" />
          ) : (
            <div className="flex h-[250px] ">
              <Books className="m-auto w-[150px] fill-slate-800 dark:fill-slate-300" />
            </div>
          )}
        </div>
        <div className="px-6 pb-2 pt-4">
          <div className="mb-2 text-xl font-bold text-slate-700 dark:text-slate-200">
            {title}
          </div>
          <p className="text-base">{description}</p>
        </div>
        <div className="px-6 pb-2 pt-4">
          {tags &&
            tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              );
            })}
        </div>
        <div className="px-6 pb-4">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {write_date}
          </p>
        </div>
      </Card>
    </Link>
  );
}
