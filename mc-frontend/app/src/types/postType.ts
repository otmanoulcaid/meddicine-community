export interface PostType {
  id: string;
  title: string;
  content: string;
  votes: number;
  community: {
    name: string;
    icon: string;
  };
  author: string;
  createdAt: string;
  commentCount: number;
  imageUrl?: string;
}
