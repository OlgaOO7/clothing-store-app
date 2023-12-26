export const cuttedTitle = (title, maxLength) => {
  return title.length > maxLength
    ? title.substring(0, maxLength - 3) + '...'
    : title;
};