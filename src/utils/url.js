export const createRequestUrl = (location) => {
  return (
    "https://backend.librarycodesquad.com/v1" +
    location.pathname +
    location.search
  );
};
