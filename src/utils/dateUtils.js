export const formatDateISO = (date) => {
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
};

export const getTodayDate = () => {
  const today = new Date();
  return formatDateISO(today);
};

export const getTodayTime = () => {
  const today = new Date();
  return today.toTimeString().split(" ")[0]; // HH:MM:SS
};
