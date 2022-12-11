const url = window.location.href;
const matches = url.match(/(dp|gp\/product)\/([A-Z0-9]{10})/);
if (matches != null) {
  const asin = matches[2];
  window.history.replaceState("", "", `/dp/${asin}`);
}
