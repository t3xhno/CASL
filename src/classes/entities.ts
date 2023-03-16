export interface IArticle {
  status: string;
  createdAt: Date;
  authorId: number;
};

class Entity {
  constructor(attrs: IArticle) {
    Object.assign(this, attrs);
  };
};

export class Article extends Entity {};
