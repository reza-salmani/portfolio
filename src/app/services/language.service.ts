export const getUserLocale = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("lang") ?? "en";
  }
  return "en";
};
export const setUserLocale = (locale: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", locale);
    window.location.reload(); // reload to apply new translation
  }
};
export const getDirection = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("dir") ?? "ltr";
  }
  return "ltr";
};
export const setDirection = (dir: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("dir", dir);
  }
};
