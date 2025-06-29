import { ITEMS_PER_PAGE } from "./data";
import { AvatarCategory, BodyType, Gender, ItemType } from "./enums";

export const API_ENDPOINTS = {
  persons: `/jet-cct/persons`,
  celebrities: {
    search: (name: string) =>
      `/wp/v2/search?search=${name}&type=post&subtype=celebrities`,
    categories: (parentId: number) =>
      `/wp/v2/celebrity-categories?parent=${parentId}&per_page=100`,
    all: (categoryId: number) =>
      `/wp/v2/celebrities?celebrity-categories=${categoryId}&per_page=100`,
  },
  items: (type: ItemType, page: number) =>
    `/jet-cct/items?type=${type}&_limit=500&_offset=${
      (page - 1) * ITEMS_PER_PAGE
    }`,
  share: "/jet-cct/shared",
  next: {
    generateShareUrl: "/api/generate-share-link",
  },
};
