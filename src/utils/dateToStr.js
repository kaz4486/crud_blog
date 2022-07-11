export const dateToStr = (publishedDate) => {
  const dd = String(publishedDate.getDate()).padStart(2, '0');
  const mm = String(publishedDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = publishedDate.getFullYear();
  console.log(mm + '/' + dd + '/' + yyyy);
  return mm + '/' + dd + '/' + yyyy;
};
