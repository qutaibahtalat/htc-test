import SectionTitle from "@/components/ui/SectionTitle";
import { useGlobals } from "@/contexts/GlobalContext";
import EditPersonForm from "@/components/EditPersonForm";
import { Reorder } from "framer-motion";
import { ItemType } from "@/misc/enums";
import { useEffect } from "react";

const EditPersons = () => {
  const { avatars, setAvatars, setSelectedScreen } = useGlobals();
  useEffect(() => {
    if (avatars.length === 0) {
      setSelectedScreen("Add Person");
    }
  }, [avatars]);
  return (
    <div className="w-full h-full space-y-2.5">
      <SectionTitle>Edit Avatar</SectionTitle>
      <Reorder.Group
        axis="y"
        values={avatars}
        onReorder={setAvatars}
        className="flex flex-col gap-2"
      >
        {avatars.map((avatar) =>
          avatar.type === ItemType.PERSON ? (
            <Reorder.Item key={avatar.id} value={avatar}>
              <EditPersonForm avatar={avatar} />
            </Reorder.Item>
          ) : null
        )}
      </Reorder.Group>
    </div>
  );
};

export default EditPersons;
