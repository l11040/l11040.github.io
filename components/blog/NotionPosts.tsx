import { NotionTableType } from "@/types/notion";
import NotionPostCard from "./NotionPostCard";

interface NotionPostsProps {
  blogPosts?: NotionTableType[];
}

export default function NotionPosts({ blogPosts }: NotionPostsProps) {
  return (
    <div className="grid grid-flow-row grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-2">
      {blogPosts &&
        blogPosts.map((post) => <NotionPostCard key={post.id} {...post} />)}
    </div>
  );
}
