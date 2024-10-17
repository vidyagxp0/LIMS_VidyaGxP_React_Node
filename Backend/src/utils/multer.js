import { fileURLToPath } from "url";
import { basename, dirname, extname, join } from "path";
import multer from "multer";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageBaseUrl = "../public/images/";
const imageFilePath = join(__dirname, imageBaseUrl);
const imageFullfilePath = join(imageFilePath, "/");
const documentBaseUrl = "../public/documents/";
const documentFilePath = join(__dirname, documentBaseUrl);
const documentFullfilePath = join(documentFilePath, "/");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.mimetype.endsWith(".jpg") ||
      file.mimetype.endsWith(".png") ||
      file.mimetype.endsWith(".jpeg")
    ) {
      cb(null, imageFullfilePath);
    } else {
      cb(null, documentFullfilePath);
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const originalName = basename(
      file.originalname,
      extname(file.originalname)
    );
    const sanitizedOriginalName = originalName.replace(/\s+/g, "_");
    const newFilename = `${uniqueSuffix}-${sanitizedOriginalName}${extname(
      file.originalname
    )}`;
    cb(null, newFilename);
  },
});

export const upload = multer({ storage: storage });
