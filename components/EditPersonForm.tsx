import { Avatar } from "@/misc/interfaces";
import { BiTrash } from "react-icons/bi";
import { useGlobals } from "@/contexts/GlobalContext";
import Input from "@/components/ui/Input";
import SectionTitle from "./ui/SectionTitle";
import HeightInput from "./HeightInput";
import TabStyleRadio from "./ui/TabStyleRadio";
import { useState } from "react";
import Colors from "./Colors";
import AvatarSelector from "./AvatarSelector";
import { FaCaretRight } from "react-icons/fa";
import { AvatarCategory, BodyType, Gender } from "@/misc/enums";

const EditPersonForm = ({ avatar }: { avatar: Avatar }) => {
  const {
    removeAvatar,
    updateAvatar,
    selectedAvatar,
    setSelectedAvatar,
    avatars,
    setSelectedScreen,
  } = useGlobals();
  const [unit, setUnit] = useState<"cm" | "ft">("ft");
  const [bodyType, setBodyType] = useState<BodyType>(BodyType.ECTOMORPH);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-300">
      <div className="flex items-center justify-between">
        <div
          onClick={() =>
            setSelectedAvatar(avatar.id === selectedAvatar ? null : avatar.id)
          }
          className="text-lg p-1.5 flex-grow  flex items-center gap-2 text-white"
          style={{ backgroundColor: avatar.color }}
        >
          <FaCaretRight
            size={16}
            style={{
              rotate: avatar.id === selectedAvatar ? "90deg" : "0deg",
            }}
            className="mix-blend-difference text-white transition-all duration-400"
          />
          <div className="flex-grow mix-blend-difference text-white">
            {avatar.name}
          </div>
        </div>
        <BiTrash
          className="px-2 cursor-pointer border-b border-gray-200"
          size={40}
          onClick={() => {
            if (avatars.length === 1) setSelectedScreen("Add Person");
            removeAvatar(avatar.id);
          }}
        />
      </div>
      {/* Editin Form */}
      {selectedAvatar === avatar.id && (
        <div className="p-2 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <TabStyleRadio
              options={Object.values(Gender)}
              value={
                avatar.category === AvatarCategory.ADULT ? avatar.gender : ""
              }
              onChange={(gender) => {
                updateAvatar({
                  ...avatar,
                  gender: gender as Gender,
                  category: AvatarCategory.ADULT,
                });
              }}
              className="capitalize w-2/3"
            />
            <TabStyleRadio
              options={[AvatarCategory.CHILD, AvatarCategory.PET]}
              value={avatar.category}
              className="capitalize w-1/3"
              onChange={(avatarCategory) => {
                updateAvatar({
                  ...avatar,
                  category: avatarCategory as AvatarCategory,
                });
                if (avatarCategory === AvatarCategory.CHILD) {
                  setBodyType(BodyType.ECTOMORPH);
                }
              }}
            />
          </div>

          {/* Height */}
          <div className="flex items-stretch justify-between gap-2 w-full max-h-[45px]">
            <HeightInput
              height={avatar.height}
              unit={unit}
              onChange={(height) => updateAvatar({ ...avatar, height: height })}
            />
            {/* Type */}
            <TabStyleRadio
              options={["ft", "cm"]}
              value={unit}
              onChange={(unit) => setUnit(unit as "ft" | "cm")}
              className="min-w-[100px]"
            />
          </div>

          <div className="flex items-center justify-between gap-2">
            <Input
              name="name"
              placeholder="Name"
              value={avatar.name}
              onChange={(value) => updateAvatar({ ...avatar, name: value })}
            />
            <Input
              name="weight"
              placeholder="Weight (kg)"
              value={avatar.weight === 0 ? "" : avatar.weight}
              type="number"
              onChange={(value) => updateAvatar({ ...avatar, weight: value })}
              className="w-2/3"
            />
          </div>

          {/* Color */}
          <Colors
            selectedColor={avatar.color || "#fff"}
            onChange={(color) => updateAvatar({ ...avatar, color: color })}
          />
          {avatar.category === AvatarCategory.CHILD && (
            <div>
              <SectionTitle>Gender</SectionTitle>
              <TabStyleRadio
                options={["Boy", "Girl"]}
                value={avatar.gender === Gender.MALE ? "Boy" : "Girl"}
                onChange={(option) =>
                  updateAvatar({
                    ...avatar,
                    gender: option === "Boy" ? Gender.MALE : Gender.FEMALE,
                  })
                }
                className="capitalize w-full text-[12px]"
              />
            </div>
          )}

          {/* Avatar */}
          {avatar.type === "person" && (
            <div className="space-y-1">
              <AvatarSelector
                gender={avatar.gender || Gender.MALE}
                selectedAvatar={avatar.avatar}
                onAvatarChange={(url) =>
                  updateAvatar({ ...avatar, avatar: url })
                }
                avatarCategory={avatar.category}
                bodyType={bodyType}
                onBodyTypeChange={(bodyType) =>
                  setBodyType(bodyType as BodyType)
                }
                onGenderChange={(gender) =>
                  updateAvatar({ ...avatar, gender: gender as Gender })
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EditPersonForm;
