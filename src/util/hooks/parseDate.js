const parseDate = (publishDate, isDate) => {
  const date = publishDate.split("T")[0].split("-");
  const time = publishDate.split("T")[1].split(":");

  if (isDate) {
    return `${date[1]}/${date[2]}`;
  } else {
    return `${time[0]}:${time[1]}`;
  }
};

export default parseDate;
