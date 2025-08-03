import type  { PostType } from "../types/postType";
export function getPosts() {

    const examplePost : PostType = {
    id: "1",
    title: "New breakthrough in diabetes treatment shows promising results",
    content:
      "Recent clinical trials have shown a 40% improvement in blood sugar control with the new medication. The study involved 2,000 patients over 18 months...",
    votes: 1247,
    community: {
      name: "r/medicine",
      icon: "https://placehold.co/20x20/c7d2fe/000000?text=C",
    },
    author: "DrSmith_MD",
    createdAt: "4 hours ago",
    commentCount: 12,
    imageUrl:
      "https://placehold.co/800x400/gray/white?text=Medical+Research+Image",
  };

  return examplePost;

}