const PageNotFound = () => {
  const notFoundContainer = document.createElement('div');
  notFoundContainer.setAttribute('class', 'not-found-container');

  const notFoundTitle = document.createElement('h1');
  notFoundTitle.setAttribute('class', 'not-found-title');
  notFoundTitle.textContent = '404';
  notFoundContainer.appendChild(notFoundTitle);

  const notFoundDescription = document.createElement('p');
  notFoundDescription.setAttribute('class', 'not-found-description');
  notFoundDescription.textContent = 'Sorry... the page that you are looking for does not exist! Please refer to our navigation menu or ';
  notFoundContainer.appendChild(notFoundDescription);

  const recoveryTextFromNotFound = document.createElement('a');
  recoveryTextFromNotFound.setAttribute('href', '#');
  recoveryTextFromNotFound.textContent = 'homepage';

  notFoundDescription.appendChild(recoveryTextFromNotFound);
  notFoundDescription.insertAdjacentText(
    'beforeend',
    ' to find available pages.',
  );

  return notFoundContainer;
};

export { PageNotFound };
