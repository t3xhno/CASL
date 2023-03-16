<script setup lang="ts">
import { subject } from "@casl/ability";
import type { IArticle } from "../classes/entities";
import type { IUser } from "../services/abilityService";
import defineAbilityFor from "../services/abilityService";

const user: IUser = { id: 1, isLoggedIn: true };

const ability = defineAbilityFor(user);
const articles: IArticle[] = [
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2023, 11, 7),
  },
  {
    authorId: 1,
    status: "review",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "review",
    createdAt: new Date(2021, 11, 7),
  },
  {
    authorId: 1,
    status: "review",
    createdAt: new Date(2021, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2021, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "published",
    createdAt: new Date(2021, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "lol",
    createdAt: new Date(2022, 11, 7),
  },
  {
    authorId: 1,
    status: "review",
    createdAt: new Date(2021, 11, 7),
  },
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
 * false
 * false
 * false
 * true
 */

/**
 * The `subject` helper helps detect the subject type.
 * The subject type is inferred by looking at the object constructor:
 * object.constructor.modelName || object.constructor.name
 *
 * For a class, this works fine. For a regular DTO, hovewer, we get "object",
 * and we have no rules in place for reading an object - just for an `Article`.
 *
 * So we can wrap it in the helper function to provide a subject for CASL:
 * subject("Article", object);
 */
</script>

<template>
  <template
    v-for="
      (article, index) in articles
        .map(article => subject('Article', article))
    "
    :key="index"
  >
    <div v-if="ability.can('read', article)" class="article-read">
      {{ index }}
    </div>
  </template>
</template>
