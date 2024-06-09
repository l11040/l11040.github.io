"use client"

import { BlockMapType, NotionRenderer } from "react-notion";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "@/styles/notion-page.css";
import { useEffect, useState } from "react";
import useImageZoom from "@/hooks/useImageZoom";
import { NotionTableType } from "@/types/notion";
import Card from "../common/Card";
import GithubComment from "./GithubComment";

interface NotionPostProps {
  pageId?: string;
  blockMap?: BlockMapType;
}

export default function NotionPost({ pageId, blockMap }: NotionPostProps) {
  const [titleInfo, setTitleInfo] = useState<NotionTableType>();
  const [title, setTitle] = useState<string | undefined>(undefined);

  const { ref: galleryRef, Modal } = useImageZoom();

  useEffect(() => {
    if (blockMap && pageId) {
      const value = blockMap[pageId].value["properties"];
      setTitle(value.title[0]);
      setTitleInfo({
        title: value.title[0],
        description: value.JIFT[0],
        tags: value["THK:"][0][0].split(","),
        write_date: value["`Tkt"][0][1][0][1].start_date,
      });
    }
  }, [blockMap]);

  return (
    <>
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
              {titleInfo?.write_date}
            </p>
          </div>
        </Card>
        <Card>
          {blockMap != null && <NotionRenderer blockMap={blockMap} />}
        </Card>
        <Modal />
        <Card>{title && <GithubComment />}</Card>
      </div>
    </>
  );
}
