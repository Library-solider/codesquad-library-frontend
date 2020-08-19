export const createRequestUrl = (location) => {
  return (
    "https://d3e9fjannntuih.cloudfront.net/v1" +
    location.pathname +
    location.search
  );
};
