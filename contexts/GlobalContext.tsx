"use client";

import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import { server } from "@/misc/axios";
import { ItemType } from "@/misc/enums";
import { Avatar } from "@/misc/interfaces";
import { useHistoryState } from "@uidotdev/usehooks";
import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface GlobalContextType {
  selectedScreen: string;
  setSelectedScreen: (screen: string) => void;
  selectedAvatar: string | null;
  setSelectedAvatar: (avatar: string | null) => void;
  avatars: Avatar[];
  setAvatars: (avatars: Avatar[]) => void;
  avatarCounts: {
    image: number;
    person: number;
    object: number;
  };
  addAvatar: (avatar: Avatar) => void;
  updateAvatar: (avatar: Avatar) => void;
  removeAvatar: (id: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const GlobalContext = createContext<GlobalContextType>({
  selectedScreen: "",
  setSelectedScreen: () => {},
  selectedAvatar: null,
  setSelectedAvatar: () => {},
  avatars: [],
  setAvatars: () => {},
  avatarCounts: {
    image: 0,
    person: 0,
    object: 0,
  },
  addAvatar: () => {},
  updateAvatar: () => {},
  removeAvatar: () => {},
  undo: () => {},
  redo: () => {},
  canUndo: false,
  canRedo: false,
});

// Provider for the global context
export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedScreen, setSelectedScreen] = useState("Add Person");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const {
    state: avatars,
    set: setAvatars,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useHistoryState<Avatar[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    fetchSharedAvatars();
  }, []);

  useEffect(() => {
    if (avatars.length > 0 || canUndo || canRedo) {
      localStorage.setItem("avatars", JSON.stringify(avatars));
    }
  }, [avatars]);

  const fetchSharedAvatars = async () => {
    let isFetched = false;
    if (searchParams.has("share")) {
      try {
        const shareId = searchParams.get("share");
        const res = await server.get(API_ENDPOINTS.share + "/" + shareId);
        if (res.data) setAvatars(JSON.parse(res.data.data));
        isFetched = true;
      } catch (error) {
        isFetched = false;
      }
    }
    if (!isFetched) {
      const avatars = localStorage.getItem("avatars");
      if (avatars) setAvatars(JSON.parse(avatars));
    }
  };

  const addAvatar = (avatar: Avatar) => {
    setAvatars([...avatars, avatar]);
  };

  const removeAvatar = (id: string) => {
    const newAvatars = avatars.filter((a) => a.id !== id);
    setAvatars(newAvatars);
  };

  const updateAvatar = (avatar: Avatar) => {
    const newAvatars = avatars.map((a) => (a.id === avatar.id ? avatar : a));
    setAvatars(newAvatars);
  };

  const avatarCounts: Record<ItemType, number> = Object.values(ItemType).reduce(
    (acc, type) => {
      acc[type] = 0;
      return acc;
    },
    {} as Record<ItemType, number>
  );

  avatars.forEach((a) => {
    const type = a.type;
    if (type in avatarCounts) avatarCounts[type]++;
  });

  return (
    <GlobalContext.Provider
      value={{
        selectedScreen,
        setSelectedScreen,
        selectedAvatar,
        setSelectedAvatar,
        avatars,
        setAvatars,
        avatarCounts,
        addAvatar,
        updateAvatar,
        removeAvatar,
        undo,
        redo,
        canUndo,
        canRedo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Hook to use the global context
export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobals must be used within a GlobalContextProvider");
  }
  return context;
};
