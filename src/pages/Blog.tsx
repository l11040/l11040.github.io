import { useEffect, useState } from "react";
import { BlockMapType, NotionRenderer } from "react-notion";

import Card from "../components/Card";

import "./test.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const Blog = () => {
  const [post, setPost] = useState<BlockMapType>();

  //notion-api.splitbee.io/v1/table/3723371501ca4ebba16f4ca8f65c5785
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/b3cf3a25e2944263b7de32183fee2571",
      ).then((res) => res.json());

      console.log(data);
      setPost(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Card className="card mx-auto overflow-x-hidden p-5">
        {post != null && <NotionRenderer blockMap={post} />}
      </Card>
    </>
  );
};

export default Blog;
