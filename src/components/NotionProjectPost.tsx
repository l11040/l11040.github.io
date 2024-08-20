import { BlockMapType, NotionRenderer } from "react-notion";
import Card from "./Card";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/notion-page.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useImageZoom from "../hooks/useImageZoom";
import { Helmet } from "react-helmet";
import { NotionProjectPostCardProps } from "./NotionProjectPostCard";

interface NotionPostProps {
  blockMap?: BlockMapType;
}

export default function NotionProjectPost({ blockMap }: NotionPostProps) {
  const { pageId } = useParams();
  const [titleInfo, setTitleInfo] = useState<NotionProjectPostCardProps>();
  const [title, setTitle] = useState<string | undefined>(undefined);

  const { ref: galleryRef, Modal } = useImageZoom();

  useEffect(() => {
    if (blockMap && pageId) {
      const value = blockMap[pageId].value["properties"];
      console.log(value);
      setTitle(value.title[0]);
      setTitleInfo({
        title: value.title[0],
        description: value["olxV"][0],
        tags: value["gZr{"][0][0].split(","),
        start_date: value["nOX>"][0][1][0][1].start_date,
        end_date: value["fqd<"] && value["fqd<"][0][1][0][1].start_date,
      });
    }
  }, [blockMap]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        data-dialog-target="image-dialog"
        className="flex flex-col gap-2"
        ref={galleryRef}
      >
        <Card>
          <div className="px-6 pb-2 pt-4">
            <div className="mb-2 text-4xl font-bold text-slate-700 dark:text-slate-200">
              {titleInfo?.title}
            </div>
            <p className="text-base">{titleInfo?.description}</p>
          </div>
          <div className="px-6 pb-2 pt-4">
            {titleInfo?.tags &&
              titleInfo?.tags.map((tag) => {
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
            <p className="text-base font-bold text-slate-700 dark:text-slate-200">
              {`${titleInfo?.start_date}`}
              {titleInfo?.end_date ? ` ~ ${titleInfo?.end_date}` : " ~ ing"}
            </p>
          </div>
        </Card>
        <Card>
          {blockMap != null && <NotionRenderer blockMap={blockMap} />}
        </Card>
        <Modal />
      </div>
    </>
  );
}
