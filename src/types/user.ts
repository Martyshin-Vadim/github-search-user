export type LocalGithubUser = {
  login: string;
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter: string;
  repos: number;
  followers: number;
  following: number;
  created: string;
};

export type GithubUser = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type GithubError = {
  message: string;
  documentation_url: string;
};

export const defaultUser: LocalGithubUser = {
  login: "john-smilga",
  avatar: "https://avatars3.githubusercontent.com/u/42133389?v=4",
  name: "John Smilga",
  company: "Coding Addict",
  blog: "www.johnsmilga.com",
  location: "Los Angeles",
  bio: "React",
  twitter: "john_smilga",
  repos: 152,
  followers: 1495,
  following: 0,
  created: "2018-08-06T06:48:23Z",
};
