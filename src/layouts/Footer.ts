const Footer = (): HTMLElement => {
  const footerEl = document.createElement("footer");
  const copyrightYear = String(new Date().getFullYear());
  const copyrightText = document.createElement("p");

  copyrightText.textContent = `Copyright © ${copyrightYear} Golek Mangan`;
  footerEl.appendChild(copyrightText);
  return footerEl;
};

export { Footer };
