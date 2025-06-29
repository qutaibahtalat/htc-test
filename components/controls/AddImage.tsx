"use client";

import { BiUpload } from "react-icons/bi";
import SectionTitle from "../ui/SectionTitle";
import { useEffect, useState } from "react";
import { getBase64FromFile } from "@/utils/ReadFileFromStorage";
import ImageCropper from "../ImageCropper";
import Input from "../ui/Input";
import HeightInput from "../HeightInput";
import TabStyleRadio from "../ui/TabStyleRadio";
import Button from "../ui/Button";
import { useGlobals } from "@/contexts/GlobalContext";
import toast from "react-hot-toast";
import { v4 } from "uuid";
import { Avatar } from "@/misc/interfaces";
import { ItemType } from "@/misc/enums";
import { removeBg } from "@/utils/removeBg";
import { MAX_AVATARS } from "@/misc/data";
import Message from "../ui/Message";
import ReactDOM from "react-dom";

const AddImage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { avatars } = useGlobals();
  useEffect(() => {
    if (image) {
      if (avatars.length >= MAX_AVATARS) return;
      getBase64FromFile(image)
        .then((data) => {
          setImageUrl(data as string);
          setModalOpen(true);
          setImage(null);
        })
        .catch(() => setImageUrl(null));
    }
  }, [image]);
  return (
    <div className="w-full h-full space-y-2.5">
      <SectionTitle>Add your own image</SectionTitle>
      <label className="border border-primary border-dashed  rounded-xl p-5 bg-primary/5 flex flex-col justify-center items-center gap-2.5 cursor-pointer min-h-[250px]">
        {avatars.length < MAX_AVATARS && (
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        )}
        <BiUpload
          size={50}
          className="bg-primary p-3 rounded-lg"
          color="white"
        />
        <p className="text-sm text-gray-500 text-center">
          Drag and drop your image here or click to select a file
        </p>
      </label>
      {imageUrl && modalOpen && (
        <AddImageModel
          imageUrl={imageUrl}
          onAdded={() => {
            setImage(null);
            setModalOpen(false);
          }}
        />
      )}
      {avatars.length >= MAX_AVATARS && (
        <Message variant="error">
          Max {MAX_AVATARS} images at a time. Remove one to add another.
        </Message>
      )}
    </div>
  );
};

export default AddImage;

const AddImageModel = ({
  imageUrl,
  onAdded,
}: {
  imageUrl: string;
  onAdded: () => void;
}) => {
  const { addAvatar } = useGlobals();
  const [autoRemoveBg, setAutoRemoveBg] = useState(false);

  const [data, setData] = useState<
    Avatar & { weight?: number; unit: "ft" | "cm" }
  >({
    avatar: "",
    name: "",
    unit: "ft",
    color: "#eeeeee",
    height: 0,
    id: v4(),
    type: ItemType.IMAGE,
  });

  const setImageData = (key: keyof Avatar, value: string | number) => {
    setData({ ...data, [key]: value });
  };
  const [aspectRatioValue, setAspectRatioValue] = useState(1.5);

  const handleAddImage = async () => {
    if (!data.avatar || data.height === 0 || !data.name) {
      toast.error("Please fill all the fields");
      return;
    }
    if (autoRemoveBg) {
      const toastId = toast.loading("Removing background...");
      try {
        const blob = await removeBg(new Blob([imageUrl]));
        setImageData("avatar", URL.createObjectURL(new Blob([blob])));
      } catch (error) {
        console.error(error);
        toast.error("Failed to remove background", { id: toastId });
      }
    } else {
      setImageData("avatar", imageUrl);
    }
    addAvatar(data);
    onAdded();
  };

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-[999998] inset-0 w-full h-full bg-black/50 !m-0"></div>
      <dialog
        open
        className="fixed z-[9999999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col-reverse md:flex-row w-[700px] max-w-[97vw] md:h-[550px] border-none rounded-xl shadow-xl bg-white overflow-hidden"
      >
        <div className="w-full md:w-1/2 h-full min-h-[300px] p-5 space-y-2.5 overflow-y-auto">
          <SectionTitle className="text-xl">Add Image</SectionTitle>
          <Input
            name="name"
            value={data.name}
            onChange={(name) => setImageData("name", name)}
            placeholder="Name"
          />
          <SectionTitle>Height</SectionTitle>
          <TabStyleRadio
            options={["cm", "ft"]}
            value={data.unit}
            onChange={(unit) => setImageData("unit" as keyof Avatar, unit)}
          />
          <HeightInput
            height={data.height}
            unit={data.unit}
            onChange={(height) => setImageData("height", height)}
          />
          <Button onClick={handleAddImage} className="">
            Add Image
          </Button>
          <Button
            className="bg-white !text-gray-500 border !border-gray-200"
            onClick={onAdded}
          >
            Cancel
          </Button>
          <h1 className="text-md mt-3 mb-0 text-center">Aspect Ratio</h1>
          <div className="!mt-0">
            <input
              type="range"
              min={0.5}
              max={2.5}
              step={0.05}
              className="w-full range thumb-gray-500 thumb-lg accent-primary"
              value={aspectRatioValue}
              onChange={(e) => {
                setAspectRatioValue(Number(e.target.value));
              }}
            />
            <div className="flex items-center gap-2 justify-between">
              <div className="w-[1px] h-[6px] bg-gray-700" />
              <div className="w-[1px] h-[6px] bg-gray-700" />
              <div className="w-[1px] h-[6px] bg-gray-700" />
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="text-xs">Wide</div>
              <div className="text-xs">Square</div>
              <div className="text-xs">High</div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              id="auto-remove-bg"
              className="accent-primary w-4 h-4"
              checked={autoRemoveBg}
              onChange={() => setAutoRemoveBg(!autoRemoveBg)}
            />
            <label htmlFor="auto-remove-bg">Auto remove background</label>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full min-h-[250px] relative border-2 border-white overflow-hidden">
          <ImageCropper
            imageUrl={imageUrl}
            setCroppedImage={(image) => setImageData("avatar", image || "")}
            aspectRatio={[3 - aspectRatioValue, aspectRatioValue]}
          />
        </div>
      </dialog>
    </>,
    document.body
  );
};
