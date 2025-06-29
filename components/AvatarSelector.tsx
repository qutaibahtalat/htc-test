import React, { useEffect, useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import TabStyleRadio from "./ui/TabStyleRadio";
import Image from "next/image";
import { Gender, BodyType, AvatarCategory } from "@/misc/enums";
import { RiSkipDownLine } from "react-icons/ri";
import { Person } from "@/misc/interfaces";
import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import useData from "@/hooks/useData";
import { fetchImageById } from "@/misc/data";
import { CgSpinner } from "react-icons/cg";

interface AvatarSelectorProps {
  gender: Gender;
  selectedAvatar: string | null;
  bodyType: BodyType;
  onAvatarChange: (avatar: string) => void;
  avatarCategory?: AvatarCategory;
  onGenderChange: (gender: Gender) => void;
  onBodyTypeChange: (bodyType: BodyType) => void;
}

const INITIAL_SHOW_COUNT = 5;

const AvatarSelector = ({
  selectedAvatar,
  gender,
  bodyType,
  avatarCategory = AvatarCategory.ADULT,
  onAvatarChange,
  onBodyTypeChange,
}: AvatarSelectorProps) => {
  const [showCount, setShowCount] = useState(INITIAL_SHOW_COUNT);
  const [persons, loading] = useData<Person[]>({
    url: API_ENDPOINTS.persons,
    method: "GET",
    params: {
      category: avatarCategory,
      bodytype: avatarCategory === AvatarCategory.ADULT ? bodyType : undefined,
      gender: avatarCategory !== AvatarCategory.PET ? gender : undefined,
    },
  });

  console.log(persons);

  useEffect(() => {
    setShowCount(INITIAL_SHOW_COUNT);
  }, [avatarCategory, gender]);

  useEffect(() => {
    setShowCount(INITIAL_SHOW_COUNT);
  }, [bodyType]);

  return (
    <div>
      {avatarCategory === AvatarCategory.ADULT ? (
        <>
          <SectionTitle className="">Select Avatar</SectionTitle>
          <TabStyleRadio
            options={Object.values(BodyType)}
            value={bodyType}
            onChange={(bodyType) => onBodyTypeChange(bodyType as BodyType)}
            className="text-[12px] capitalize mb-2"
          />
        </>
      ) : null}

      {/* Avatars */}
      <div className="rounded-lg border-gray-200 p-5 border grid grid-cols-5 gap-3 max-h-[300px] min-h-[100px] justify-items-center items-baseline overflow-y-auto relative">
        {loading ? (
          <div className="flex items-center justify-center w-full h-full absolute inset">
            <CgSpinner className="animate-spin" />
          </div>
        ) : (
          persons
            ?.slice(0, showCount)
            ?.map((person, index) => (
              <Image
                key={index}
                src={fetchImageById(person.image)}
                alt="avatar"
                width={100}
                height={100}
                className={`w-auto h-[80px] max-h-[80px] cursor-pointer py-2 px-3 rounded-md ${
                  selectedAvatar === fetchImageById(person.image) &&
                  "bg-primary"
                }`}
                onClick={() => onAvatarChange(fetchImageById(person.image))}
              />
            ))
        )}
      </div>
      {showCount < (persons?.length ?? 0) && (
        <div
          onClick={() =>
            setShowCount(
              showCount +
                Math.min(INITIAL_SHOW_COUNT, (persons?.length ?? 0) - showCount)
            )
          }
          className="flex items-center justify-center gap-2 cursor-pointer my-3"
        >
          Load More <RiSkipDownLine size={18} />
        </div>
      )}
    </div>
  );
};

export default AvatarSelector;
