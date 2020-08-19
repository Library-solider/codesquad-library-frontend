export const createRequestUrl = (location) => {
  const DB_HOST = "http://3.34.7.107/v1";
  DB_HOST + location.pathname + location.search;
};
