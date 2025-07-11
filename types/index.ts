export interface Post {
  date: string;
  time: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

export interface Section {
  title: string;
  type?: string;
  content: string | string[] | Post[];
}

export interface ProfileData {
  user: {
    id: string;
    uname: string;
  };
  about: {
    name: string;
    role: string;
    avatar: string;
  };
  contact: {
    email: string;
    birthdate: string;
    gender: string;
    phone: string;
    website: string;
  };
  sections: Section[];
}
