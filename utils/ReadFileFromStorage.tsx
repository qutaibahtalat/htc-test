export const getBlobUrlFromFile = async (file: File) => {
  const url = URL.createObjectURL(file);
  return url;
};

//read image from storage and return base64 string
export const getBase64FromFile = async (file: File) => {
  const url = URL.createObjectURL(file);
  return getBase64FromBlobUrl(url);
};

export const getBase64FromBlobUrl = async (url: string) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data as string);
    };
  });
};
