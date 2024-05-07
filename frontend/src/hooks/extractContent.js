export const extractContent = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const body = doc.querySelector("body");

  if (!body) {
    return ""; // No body element found
  }

  const childNodes = body.childNodes;
  let extractedContent = "";

  for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];

    // Check if the node is an element node (not a text node)
    if (node.nodeType === Node.ELEMENT_NODE) {
      // Check if the node is a <p>, <h1>, <h2>, or <div> element
      if (
        node.tagName === "P" ||
        node.tagName === "H1" ||
        node.tagName === "H2" ||
        node.tagName === "DIV"
      ) {
        extractedContent += node.textContent.trim();
      }
    }
  }

  return extractedContent.trim();
};
