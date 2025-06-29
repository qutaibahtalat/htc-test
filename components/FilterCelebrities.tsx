import React, { useMemo, useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import useData from "@/hooks/useData";
import Select from "react-select";
import { useGlobals } from "@/contexts/GlobalContext";
import { v4 } from "uuid";
import { colors, fetchImageById, MAX_AVATARS } from "@/misc/data";
import Message from "./ui/Message";
import { AvatarCategory, ItemType } from "@/misc/enums";
import { API_ENDPOINTS } from "@/misc/apiEndpoints";
import { Celebrity } from "@/misc/interfaces";
import { getAnonymouseAvatar } from "@/utils/getAnonymouseAvatar";

interface CelebrityCategory {
  id: number;
  slug: string;
  name: string;
}

interface CelebrityOption {
  label: string;
  value: number;
}

const FilterCelebrities = ({ category }: { category: string }) => {
  const { addAvatar, avatars } = useGlobals();
  const [subcat, setSubcat] = useState<CelebrityOption | null>(null);
  const [subcat2, setSubcat2] = useState<CelebrityOption | null>(null);

  const [subcategories, subcategoriesLoading, subcategoriesError] = useData<
    CelebrityCategory[]
  >({
    url: API_ENDPOINTS.celebrities.categories(
      category === "Celebrities" ? 3 : 4
    ),
    method: "GET",
  });

  const [subcagtegories2, loading2, error2] = useData<CelebrityCategory[]>({
    url: API_ENDPOINTS.celebrities.categories(subcat?.value || 0),
    method: "GET",
  });

  const parentId = category === "Celebrities" ? subcat?.value : subcat2?.value;

  const [characters, loading3, error3] = useData<Celebrity[]>({
    url: API_ENDPOINTS.celebrities.all(parentId || 0),
    method: "GET",
  });

  const classes = useMemo(() => {
    return {
      control: () =>
        "!rounded-lg p-1 border-primary hover:!border-primary focus:!border-primary !outline-none",
      singleValue: () => "capitalize",
      option: () => "capitalize",
    };
  }, []);

  const isUnderSubcat2 = category === "Fictional" && subcat2;

  return (
    <div className="space-y-4 pb-[300px]">
      {/* Subcategories */}
      {category &&
        (subcategoriesError ? (
          <Message variant="error">
            Error fetching subcategories: {subcategoriesError}
          </Message>
        ) : (
          <div>
            <SectionTitle className="capitalize">{category}</SectionTitle>
            <Select
              options={(subcategories || [])?.map((subcat) => ({
                label: subcat.name,
                value: subcat.id,
              }))}
              isSearchable={false}
              classNames={classes}
              isLoading={subcategoriesLoading}
              placeholder="Select Category"
              value={subcat}
              onChange={(selectedOption) => {
                setSubcat(selectedOption || null);
                setSubcat2(null);
              }}
            />
          </div>
        ))}

      {/* Subcategories 2 */}
      {category === "Fictional" &&
        subcat &&
        (error2 ? (
          <Message variant="error">
            Error fetching subcategories: {error2}
          </Message>
        ) : (
          <div>
            <SectionTitle className="capitalize">{subcat.label}</SectionTitle>
            <Select
              options={subcagtegories2?.map((subcat) => ({
                label: subcat.name,
                value: subcat.id,
              }))}
              isSearchable={false}
              classNames={classes}
              isLoading={loading2}
              placeholder="Select Subcategory"
              value={subcat2}
              onChange={(selectedOption) => {
                setSubcat2(selectedOption || null);
              }}
            />
          </div>
        ))}

      {/* Name */}
      {(isUnderSubcat2 || subcat) &&
        (error3 ? (
          <Message variant="error">Error fetching characters: {error3}</Message>
        ) : (
          <div>
            <SectionTitle>Name</SectionTitle>
            <Select
              options={characters?.map((character) => ({
                label: character.title.rendered,
                value: character.id,
                data: character,
              }))}
              isSearchable={false}
              classNames={classes}
              isLoading={loading3}
              placeholder={parentId ? "Select Character" : "Select Subcategory"}
              onChange={(character) => {
                if (avatars.length >= MAX_AVATARS || !character) return;
                addAvatar({
                  id: v4(),
                  name: character.data.title.rendered,
                  avatar: character.data.meta.image
                    ? fetchImageById(character.data.meta.image)
                    : getAnonymouseAvatar(
                        parseFloat(character.data.meta.height),
                        character.data.meta.gender || "male",
                        AvatarCategory.ADULT
                      ),
                  color: character.data.meta.image
                    ? colors[Math.floor(Math.random() * colors.length)]
                    : "white",
                  height: parseFloat(character.data.meta.height),
                  type: ItemType.OBJECT,
                  // weight: character.data.meta?.weight,
                });
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default FilterCelebrities;
