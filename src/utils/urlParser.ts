interface SplittedUrl {
  path: string;
  dynamicPath: string;
}

const parseActiveUrl = (withCombiner: boolean): string | SplittedUrl => {
  const url = "/" + window.location.href.split("#")[1];
  const splittedUrl = splitUrl(url);

  if (withCombiner) {
    const combinedUrl = combineUrl(splittedUrl);
    return combinedUrl;
  }

  return splittedUrl;
};

const splitUrl = (url: string): SplittedUrl => {
  const splittedUrl = url.split("/");
  return {
    path: splittedUrl[1] as string,
    dynamicPath: splittedUrl[2] as string,
  };
};

const combineUrl = (splittedUrl: SplittedUrl) => {
  const path = splittedUrl.path ? `/${splittedUrl.path}` : "/";
  const dynamicPath = splittedUrl.dynamicPath ? "/:id" : "";
  return path + dynamicPath;
};

export { parseActiveUrl, splitUrl, combineUrl };
export type { SplittedUrl };
