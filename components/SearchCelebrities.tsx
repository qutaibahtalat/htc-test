"use client";
import { useGlobals } from "@/contexts/GlobalContext";
import useData from "@/hooks/useData";
import { Celebrity } from "@/misc/interfaces";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";
import Message from "./ui/Message";
import { colors, FEMALE_AVATARS, MALE_AVATARS } from "@/misc/data";
import { useDebounce } from "@uidotdev/usehooks";
import SectionTitle from "./ui/SectionTitle";
import { ItemType } from "@/misc/enums";
import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import { server } from "@/misc/axios";

interface CelebritySearchResult {
  id: number;
  title: string;
  _links: {
    self: {
      href: string;
    }[];
  };
}

const SearchCelebrities = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [randomColor, setRandomColor] = useState(0);
  const { addAvatar, avatars } = useGlobals();

  const [celebrities, loading, error] = useData<CelebritySearchResult[]>({
    url: API_ENDPOINTS.celebrities.search(debouncedSearch),
    method: "GET",
  });

  useEffect(() => {
    setRandomColor(Math.floor(Math.random() * colors.length));
  }, [avatars]);

  const handleAddAvatar = async (celebrity: CelebritySearchResult | null) => {
    if (celebrity) {
      if (avatars.length >= 10) return;
      const res = await server.get<Celebrity>(celebrity._links.self[0].href);
      if (!res.data) return;
      const {
        title,
        meta: { gender, height },
      } = res.data;
      addAvatar({
        id: uuidv4(),
        name: title.rendered,
        avatar: gender === "male" ? MALE_AVATARS : FEMALE_AVATARS,
        color: colors[randomColor],
        height: parseFloat(height),
        type: ItemType.PERSON,
      });
    }
  };

  return (
    <div>
      <SectionTitle>Search Celebrities</SectionTitle>
      {error && (
        <Message variant="error">Error fetching celebrities: {error}</Message>
      )}
      <Select
        options={
          celebrities?.map((c) => ({
            label: c.title,
            value: c.id,
            data: c,
          })) || []
        }
        classNames={{
          control: () =>
            "!rounded-lg p-1 border-primary hover:!border-primary focus:!border-primary !outline-none",
        }}
        onMenuOpen={() => setSearch("")}
        onMenuClose={() => setSearch("")}
        isLoading={loading}
        placeholder="Search for a celebrity"
        onInputChange={(value: string) => setSearch(value)}
        onChange={(selectedOption) =>
          handleAddAvatar(selectedOption?.data || null)
        }
      />
    </div>
  );
};

export default SearchCelebrities;
