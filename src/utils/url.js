export const createRequestUrl = (location) => {
  return (
    "http://backend.librarycodesquad.com/" + location.pathname + location.search
  );
};
