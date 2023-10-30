const splitUrl = (url) => {
  const splittedUrl = url.split("/");
  return {
    path: splittedUrl[1],
    dynamicPath: splittedUrl[2],
  };
};

const combineUrl = (splittedUrl) => {
  const path = splittedUrl.path ? `/${splittedUrl.path}` : "/";
  const dynamicPath = splittedUrl.dynamicPath ? "/:id" : "";
  return path + dynamicPath;
};

const parseActiveUrl = (withCombiner) => {
  let url = window.location.href.split("#")[1];
  if (url === undefined || url === "") {
    url = "/";
  } else {
    url = `/${url}`;
  }

  const splittedUrl = splitUrl(url);
  if (withCombiner) {
    const combinedUrl = combineUrl(splittedUrl);
    return combinedUrl;
  }

  return splittedUrl;
};

export { parseActiveUrl, splitUrl, combineUrl };
