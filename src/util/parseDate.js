// datetime 값 가공 및 시간대 변환
// isDate: true면 날짜, false면 시간 반환
const parseDate = (publishDate, isDate) => {
  // 10 이하이면 십의 자리에 0 삽입 함수
  function setZero(value) {
    const result = Number(value) >= 10 ? value : `0${value}`;

    return result;
  }

  const date = publishDate.split("T")[0].split("-");
  const time = publishDate.split("T")[1].split(":");

  // 시간대 +09:00
  const d = new Date(
    `${date[0]}-${date[1]}-${date[2]} ${time[0]}:${time[1]}:${time[2].substr(
      0,
      2
    )}`
  );

  d.setHours(d.getHours() + 9);

  const newDate = `${setZero(d.getMonth())}/${setZero(d.getDay())}`;
  const newTime = `${setZero(d.getHours())}:${setZero(d.getMinutes())}`;

  if (isDate) {
    return newDate;
  } else {
    return newTime;
  }
};

export default parseDate;
