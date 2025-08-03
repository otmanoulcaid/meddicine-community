import PostFilter from "../components/PostFilter";
import Post from "../components/Post";
import { getPosts } from "../api/PostApi";
import { useEffect, useState } from "react";
import type { PostType } from "../types/postType";

export default function Home() {
  const [examplePost, setExamplePost] = useState<PostType >();
  useEffect(() => {
    const post = getPosts();
    setExamplePost(post);
  }, []);
  return (
    <main className="flex-1 p-4">
      <PostFilter />
      {examplePost && <Post post={examplePost} />}
    </main>
  );
}
