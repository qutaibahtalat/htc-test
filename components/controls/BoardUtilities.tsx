"use client";
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import Button from "../ui/Button";
import { IoMdClose, IoMdCopy, IoMdShare } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { TbEditCircle } from "react-icons/tb";
import { useGlobals } from "@/contexts/GlobalContext";
import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import toast from "react-hot-toast";
import Input from "../ui/Input";
import { CgSpinner } from "react-icons/cg";
import { useEffect, useState } from "react";
import { MdReportProblem } from "react-icons/md";
import axios from "axios";

const BoardUtilities = () => {
  const {
    avatars,
    undo,
    redo,
    canUndo,
    canRedo,
    setAvatars,
    setSelectedScreen,
  } = useGlobals();
  const [shareLink, setShareLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [shareLinkDialogOpen, setShareLinkDialogOpen] = useState(false);

  interface Resp {
    success: boolean;
    item_id: number;
  }

  const handleShare = async () => {
    if (avatars.length === 0) {
      toast.error("Nothing to share");
      return;
    }
    setShareLinkDialogOpen(true);
    if (shareLink.length > 0) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post<Resp>(API_ENDPOINTS.next.generateShareUrl, {
        data: JSON.stringify(avatars),
      });
      if (res.data.success) {
        const url = window.location.origin + "?share=" + res.data.item_id;
        setShareLink(url);
      } else {
        setLoading(false);
        toast.error("Failed to share, please try again later");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to share, please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setShareLink("");
  }, [avatars]);

  return (
    <>
      <div className="flex justify-between flex-wrap items-center z-20 relative">
        <div className="flex gap-1 items-center">
          <LuUndo2
            size={40}
            className={`bg-white rounded-xl p-2 border border-gray-200 cursor-pointer ${
              !canUndo ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={undo}
          />
          <LuRedo2
            size={40}
            className={`bg-white rounded-xl p-2 border border-gray-200 cursor-pointer ${
              !canRedo ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={redo}
          />
        </div>
        <div className="flex items-center gap-1">
          <Button
            className="bg-white !text-black border border-gray-200 flex items-center gap-2 p-2 text-sm"
            onClick={() => setAvatars([])}
          >
            Clear
            <RxCrossCircled size={15} />
          </Button>
          <Button
            className="bg-white !text-black border border-gray-200 flex items-center gap-2 p-2 text-sm"
            onClick={() => setSelectedScreen("Edit Persons")}
          >
            Edit
            <TbEditCircle size={15} />
          </Button>
        </div>
        <Button
          className="!w-fit flex items-center gap-1 p-2 text-sm"
          onClick={handleShare}
        >
          Share
          <IoMdShare size={15} />
        </Button>
      </div>
      <ShareLinkDialog
        loading={loading}
        shareLink={shareLink}
        open={shareLinkDialogOpen}
        onClose={() => setShareLinkDialogOpen(false)}
      />
    </>
  );
};

export default BoardUtilities;

const ShareLinkDialog = ({
  loading,
  shareLink,
  open,
  onClose,
}: {
  loading: boolean;
  shareLink: string;
  open: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <dialog className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-5 py-10 rounded-lg bg-white shadow-md border border-gray-200 flex flex-col items-center justify-center gap-2 z-50">
      <IoMdClose
        size={25}
        className="absolute top-2 right-2 cursor-pointer"
        onClick={onClose}
      />
      <h3 className="text-xl font-bold">Share</h3>
      {loading ? (
        <CgSpinner size={30} className="animate-spin" />
      ) : shareLink ? (
        <div className="flex items-center gap-2 w-full">
          <Input
            value={shareLink}
            onChange={() => {}}
            name="shareLink"
            className="w-full"
          />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
              toast.success("Copied to clipboard");
            }}
            className="flex items-center gap-1 justify-center max-w-fit"
          >
            Copy
            <IoMdCopy size={20} />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <MdReportProblem size={50} color="#FF5722" />
          <p className="text-sm text-gray-500">
            Failed to generate share link, please try again later
          </p>
        </div>
      )}
    </dialog>
  );
};
