const urlEncode = (str) => {
  str = (str + "").toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str)
    .replace("!", "%21")
    .replace("'", "%27")
    .replace("(", "%28")
    .replace(")", "%29")
    .replace("*", "%2A")
    .replace("%20", "+");
};
export default urlEncode;
