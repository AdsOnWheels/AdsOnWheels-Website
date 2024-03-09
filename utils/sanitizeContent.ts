import sanitizeHtml from "sanitize-html";

export const sanitizeContent = (value: string, editorName: string) => {
  return sanitizeHtml(value, {
    allowedTags: [], // Allow no tags (remove all HTML)
    allowedAttributes: {}, // Allow no attributes
  });
};
