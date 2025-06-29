import { AvatarCategory } from "@/misc/enums";

export const getAnonymouseAvatar = (
  height: number,
  gender: string,
  avatarCategory: AvatarCategory
) => {
  const lowerCaseGender = gender.toLowerCase();
  if (avatarCategory === AvatarCategory.CHILD) {
    return `/images/default-avatars/child.svg`;
  } else if (avatarCategory === AvatarCategory.PET) {
    return `/images/default-avatars/pet.svg`;
  } else {
    if (height <= 90) {
      return `/images/default-avatars/${lowerCaseGender}/under-90cm.svg`;
    } else if (height <= 120) {
      return `/images/default-avatars/${lowerCaseGender}/under-120cm.svg`;
    } else if (height <= 150) {
      return `/images/default-avatars/${lowerCaseGender}/under-150cm.svg`;
    } else {
      return `/images/default-avatars/${lowerCaseGender}/over-150cm.svg`;
    }
  }
};
