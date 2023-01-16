export interface IReqCreateTweet {
  content: string;
  userId: string;
}

export interface IResCreateTweet {
  id: string;
  content: string;
  created_at: string;
  user: {
    id: string;
    name: string;
  };
}
