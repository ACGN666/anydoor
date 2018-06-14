const path = require("path");

const mimeTypes = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-ico",
  "jpeg": "image/jpeg",
  "jpg": "image/jpg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "text/x-wav",
  "wma": "text/x-ms-wma",
  "wmv": "text/x-ms-wmv",
  "xml": "text/xml"
};

module.exports = (filePath) => {
  let ext = path.extname(filePath).split(".").pop().toLowerCase();

  if(!ext){
    ext = filePath;
  }
  return mimeTypes[ext] || mimeTypes["txt"];
}
