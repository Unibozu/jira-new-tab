
document.addEventListener("click", onClick, false)

function onClick(ev) {
  let a = ev.target.closest('a');

  if (a) {
    const href = a.href;

    console.log('click on', href);

    if (isExternalHref(href)) {
      ev.preventDefault();
      window.open(href);
    }
  }
}

/**
 * Return `true` is the link is external and should be opened in a new tab
 */
function isExternalHref(href) {
  return !/\.atlassian.net/g.test(href) && !/^mailto:/.test(href);
}
