import { BlockMapType, NotionRenderer } from "react-notion";
import Card from "./Card";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "../styles/notion-page.css";

interface NotionPostProps {
  blockMap?: BlockMapType;
}

export default function NotionPost({ blockMap }: NotionPostProps) {
  return (
    <Card>{blockMap != null && <NotionRenderer blockMap={blockMap} />}</Card>
  );
}
