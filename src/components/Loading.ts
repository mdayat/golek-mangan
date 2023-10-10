interface LoadingReturnType {
  show: () => void;
  remove: () => void;
}

const Loading = (loadingContainer: HTMLElement): LoadingReturnType => {
  const loading = document.createElement("div");
  loading.setAttribute("class", "loading");

  return {
    show: () => {
      loadingContainer.appendChild(loading);
    },
    remove: () => {
      loading.remove();
    },
  };
};

export { Loading };
export type { LoadingReturnType };
