import { AvatarCategory, BodyType, Gender, ItemType } from "./enums";

export interface Avatar {
  id: string;
  name: string;
  avatar: string;
  color: string;
  height: number;
  type: ItemType;
  gender?: Gender;
  weight?: number | string;
  category?: AvatarCategory;
}

export interface ObjectData {
  id: number;
  image: string;
  name: string;
  height: number;
  adjust_position: number;
  datetime: string;
}

export interface Person {
  id: string;
  name: string;
  image: string;
  category: AvatarCategory;
  bodytype: BodyType;
  gender: Gender;
}

export interface Character {
  id: string;
  name: string;
  gender: string;
  height: string;
  category: string;
  subcat1: string;
  subcat2: string | null;
  extras: string;
}

export interface Celebrity {
  id: number;
  title: {
    rendered: string;
  };
  meta: {
    height: string;
    gender: string;
    image?: string;
    weight?: string;
  };
}
