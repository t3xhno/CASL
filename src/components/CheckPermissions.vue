<script setup lang="ts">
import { Article } from "../classes/entities";
import type { IUser } from "../services/abilityService";
import defineAbilityFor from "../services/abilityService";

const user: IUser = { id: 1, isLoggedIn: true };

const ability = defineAbilityFor(user);
const articles: Article[] = [
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2023, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "review",
    createdAt: new Date(2022, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "review",
    createdAt: new Date(2021, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "review",
    createdAt: new Date(2021, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2021, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "published",
    createdAt: new Date(2021, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  }),
  new Article({
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  }),
];
/**
 * false
 * false
 * true
 * true
 * false
 * false
 * false
 * true
 * flase
 * false
 * false
 */
</script>

<template>
  <template v-for="(article, index) in articles" :key="index">
    <div v-if="ability.can('read', article)" class="article-read">
      {{ index }}
    </div>
  </template>
</template>
