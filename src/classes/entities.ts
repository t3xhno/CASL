export interface IAttrs {
  status: string;
  createdAt: Date;
  authorId: number;
};

class Entity {
  constructor(attrs: IAttrs) {
    Object.assign(this, attrs);
  };
};

export class Article extends Entity {};
