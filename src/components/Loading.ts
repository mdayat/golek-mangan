interface LoadingReturnType {
  show: () => void;
  remove: () => void;
}

const Loading = (parentElement: HTMLElement): LoadingReturnType => {
  const loading = document.createElement("div");
  loading.setAttribute("class", "loading");

  return {
    show: () => {
      parentElement.appendChild(loading);
    },
    remove: () => {
      loading.remove();
    },
  };
};

export { Loading };
export type { LoadingReturnType };
