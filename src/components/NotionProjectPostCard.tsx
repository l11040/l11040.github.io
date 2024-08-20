import { Link } from "react-router-dom";
import { Books } from "../icons/icon";
import { NotionTableType } from "../types/notion";
import Card from "./Card";

export interface NotionProjectPostCardProps extends NotionTableType {
  stack?: string[];
  start_date?: string;
  end_date?: string;
}

export default function NotionProjectPostCard({
  id,
  title,
  description,
  title_image_link,
  stack,
  start_date,
  end_date,
}: NotionProjectPostCardProps) {
  return (
    <Link to={`/project/${id}`}>
      <Card className="h-fit cursor-pointer overflow-hidden !p-0 transition hover:scale-[1.02] ">
        <div className="max-h-[250px] overflow-hidden">
          {title_image_link ? (
            // <div className="flex h-[250px] ">
            //   <img className="m-auto w-[150px]" src={title_image_link} alt="" />
            // </div>
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
          {stack &&
            stack.map((tag) => {
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
            {`${start_date}`}
            {end_date ? ` ~ ${end_date}` : " ~ ing"}
          </p>
        </div>
      </Card>
    </Link>
  );
}
