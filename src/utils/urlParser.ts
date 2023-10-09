const parseActiveUrl = (): string => {
  const url = "/" + window.location.href.split("#")[1];
  return url;
};

export { parseActiveUrl };
