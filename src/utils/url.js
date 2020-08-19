export const createRequestUrl = (location) => {
  return (
    "https://d3e9fjannntuih.cloudfront.net" +
    location.pathname +
    location.search
  );
};
