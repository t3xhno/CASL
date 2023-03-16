import { createMongoAbility } from "@casl/ability";

export interface IUser {
  id: number;
  isLoggedIn: boolean;
};

export default (user: IUser) => createMongoAbility([
  {
    action: "read",
    subject: "Article",
    conditions: {
      authorId: user.id,
      status: { $in: ["review", "published"] },
      createdAt: { $lte: new Date(2022, 0, 1) },
    },
  },
]);
