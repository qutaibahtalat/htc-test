"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Colors from "@/components/Colors";
import TabStyleRadio from "@/components/ui/TabStyleRadio";
import AvatarSelector from "@/components/AvatarSelector";
import HeightInput from "@/components/HeightInput";
import { useGlobals } from "@/contexts/GlobalContext";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import Input from "@/components/ui/Input";
import Message from "../ui/Message";
import { AvatarCategory, BodyType, Gender, ItemType } from "@/misc/enums";
import { colors, MAX_AVATARS } from "@/misc/data";
import { getAnonymouseAvatar } from "@/utils/getAnonymouseAvatar";
import { IoMdAddCircleOutline } from "react-icons/io";
import SectionTitle from "../ui/SectionTitle";

interface AddPersonData {
  gender: Gender;
  unit: "cm" | "ft";
  displayAvatar: boolean;
  avatar: string | null;
  color: string | null;
  height: number;
  name: string;
  avatarCategory: AvatarCategory;
  weight: number;
  bodyType: BodyType;
}

const AddPerson = () => {
  const { avatars, addAvatar } = useGlobals();
  const [data, setData] = useState<AddPersonData>({
    gender: Gender.MALE,
    unit: "ft",
    displayAvatar: true,
    avatar: null,
    color: null,
    height: 0,
    name: "",
    avatarCategory: AvatarCategory.ADULT,
    bodyType: BodyType.ECTOMORPH,
    weight: 0,
  });

  const setState = (
    key: keyof AddPersonData,
    value: AddPersonData[keyof AddPersonData]
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  console.log({ data });
  const handleAddAvatar = () => {
    if (!data.height) {
      toast.error("Please enter height");
      return;
    }
    const baseUrl = window.location.origin;
    const anonymouseAvatar =
      baseUrl +
      getAnonymouseAvatar(data.height, data.gender, data.avatarCategory);
    console.log({ anonymouseAvatar });
    addAvatar({
      id: v4(),
      name: data?.name || "Unknown",
      avatar: data.avatar || anonymouseAvatar,
      gender: data.gender,
      color: data.color || colors[Math.floor(Math.random() * colors.length)],
      height: data.height,
      category: data.avatarCategory,
      type: ItemType.PERSON,
      weight: data.weight,
    });
    setData((prev) => ({
      ...prev,
      name: "",
      weight: 0,
      avatar: null,
      color: null,
    }));
  };
  return (
    <div className="w-full min-h-full space-y-3">
      <div className="flex items-center justify-between gap-2">
        <TabStyleRadio
          options={Object.values(Gender)}
          value={
            data.avatarCategory === AvatarCategory.ADULT ? data.gender : ""
          }
          onChange={(gender) => {
            setState("gender", gender);
            setState("avatarCategory", AvatarCategory.ADULT);
          }}
          className="capitalize w-2/3"
        />
        <TabStyleRadio
          options={[AvatarCategory.CHILD, AvatarCategory.PET]}
          value={data.avatarCategory}
          className="capitalize w-1/3"
          onChange={(avatarCategory) => {
            setState("avatarCategory", avatarCategory);
            if (avatarCategory === AvatarCategory.CHILD) {
              setState("bodyType", BodyType.ECTOMORPH);
              setState("gender", Gender.MALE);
            }
          }}
        />
      </div>

      {/* Height */}
      <div className="flex items-stretch justify-between gap-2 w-full max-h-[45px]">
        <HeightInput
          height={data.height}
          unit={data.unit}
          onChange={(height) => setState("height", height)}
        />
        {/* Type */}
        <TabStyleRadio
          options={["ft", "cm"]}
          value={data.unit}
          onChange={(unit) => setState("unit", unit)}
          className="min-w-[100px]"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Input
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={(value) => setState("name", value)}
        />
        <Input
          name="weight"
          placeholder="Weight (kg)"
          value={data.weight === 0 ? "" : data.weight}
          type="number"
          onChange={(value) => setState("weight", value)}
          className="w-2/3"
        />
      </div>

      {/* Color */}
      <Colors
        selectedColor={data.color || "#fff"}
        onChange={(color) => setState("color", color)}
      />
      {data.avatarCategory === AvatarCategory.CHILD && (
        <div>
          <SectionTitle>Gender</SectionTitle>
          <TabStyleRadio
            options={["Boy", "Girl"]}
            value={data.gender === Gender.MALE ? "Boy" : "Girl"}
            onChange={(option) =>
              setState("gender", option === "Boy" ? Gender.MALE : Gender.FEMALE)
            }
            className="capitalize w-full text-[12px]"
          />
        </div>
      )}
      {/* Select Avatar */}
      <AvatarSelector
        gender={data.gender}
        avatarCategory={data.avatarCategory}
        bodyType={data.bodyType}
        selectedAvatar={data.avatar}
        onAvatarChange={(avatar) => setState("avatar", avatar)}
        onGenderChange={(gender) => setState("gender", gender)}
        onBodyTypeChange={(bodyType) => setState("bodyType", bodyType)}
      />
      {avatars.length < MAX_AVATARS ? (
        <Button
          onClick={handleAddAvatar}
          className="flex items-center gap-2 justify-center"
        >
          Add
          <IoMdAddCircleOutline />
        </Button>
      ) : (
        <Message variant="error">
          Max {MAX_AVATARS} people at a time. Remove one to add another.
        </Message>
      )}
    </div>
  );
};

export default AddPerson;
