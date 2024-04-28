import React, { useEffect, useState } from "react";
import { BlockMapType, NotionRenderer } from "react-notion";
// import { notion } from "../config";

import "./test.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Card from "../components/Card";

const Blog = () => {
  const [post, setPost] = useState<BlockMapType>();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const data = await fetch(
  //       "https://notion-api.splitbee.io/v1/page/4064575a08dd4daab92472305e8ca87e",
  //     ).then((res) => res.json());

  //     console.log(data);
  //     setPost(data);
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        "https://notion-api.splitbee.io/v1/page/995737b7860848b395fe4f47cf78595e",
      ).then((res) => res.json());

      console.log(data);
      setPost(data);
    };
    fetchPosts();
  }, []);

  //notion-api.splitbee.io/v1/table/3723371501ca4ebba16f4ca8f65c5785

  return (
    <>
      <Card className="mx-auto overflow-x-hidden card p-5">
        {post != null && <NotionRenderer blockMap={post} />}
        <></>
      </Card>
    </>
  );
};

export default Blog;
