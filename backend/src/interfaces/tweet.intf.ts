export interface IReqCreateTweet {
  content: string;
  likes: number;
  userId: string;
}

export interface IResCreateTweet {
  id: string;
  content: string;
  likes: number;
  created_at: string;
}
