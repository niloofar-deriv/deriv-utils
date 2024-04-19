export const supportedDocumentFormats = ["PNG", "JPG", "JPEG", "GIF", "PDF"] as const;

export type DocumentFormats = (typeof supportedDocumentFormats)[number];
