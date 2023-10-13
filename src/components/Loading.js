const Loading = (loadingContainer) => {
  const loading = document.createElement('div');
  loading.setAttribute('class', 'loading');

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
