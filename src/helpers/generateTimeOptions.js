export const generateTimeOptions = () => {
  const options = [];
  const startTime = 9 * 60;
  const endTime = 10.5 * 60;
  const step = 30;

  options.push({
    value: "header",
    label: "Meeting Time",
    isDisabled: true,
  });

  for (let i = startTime; i <= endTime; i += step) {
    const hour = Math.floor(i / 60);
    const minute = i % 60;
    const timeString = `${hour.toString().padStart(2, "0")}  :  ${minute
      .toString()
      .padStart(2, "0")}`;
    options.push({ value: timeString, label: timeString });
  }

  return options;
};
