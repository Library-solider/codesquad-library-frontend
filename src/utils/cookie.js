export const getCookie = (key) => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + key + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};
