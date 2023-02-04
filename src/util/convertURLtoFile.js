const convertURLtoFile = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], "file", { type: blob.type });

  return file;
};

export default convertURLtoFile;
