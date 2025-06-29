export const colors = [
  "#7cc7e8",
  "#ffd5b0",
  "#8dfa8d",
  "#a3d3e2",
  "#ff3c00",
  "#ff5eab",
  "#ffadb9",
  "#ffd100",
  "#00b7ff",
  "#00ff74",
  "#d896d8",
  "#00c7cb",
  "#9226b4",
  "#4b6029",
  "#3af0f0",
  "#ff6384",
  "#36a2eb",
  "#fd6b19",
  "#845ef7",
  "#5c7cfa",
  "#0084d4",
  "#009688",
  "#ff9f43",
  "#c3423f",
  "#32a852",
  "#e63946",
  "#f4a261",
  "#2a9d8f",
  "#264653",
  "#6a0572",
  "#ffba08",
  "#d00000",
  "#370617",
];

export const SERVER_BASE_URL = "https://heightcomparisondatabase.site/wp-json";

export const ITEMS_PER_PAGE = 10;

export const MAX_AVATARS = 20;

export const SCALING_FACTOR = 1.8;

export const fetchImageById = (id: string) =>
  `${SERVER_BASE_URL}/custom/v2/get-media/${id}`;

export const MALE_AVATARS = "/images/persons/adult/male/ectomorph/person-2.svg";
export const FEMALE_AVATARS =
  "/images/persons/adult/female/ectomorph/person-2.svg";

export const GOOGLE_AD_CLIENT = "ca-pub-9835678201672444";

export const EMAIL = "heightcomparisonchart@gmail.com";
