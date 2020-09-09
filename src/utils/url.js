export const createRequestUrl = (location) => {
  return (
    "http://backend.librarycodesquad.com/v1" +
    location.pathname +
    location.search
  );
};
