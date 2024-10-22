import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import limsRouter from "./src/routes/lims.route.js";
import adminRouter from "./src/routes/admin.route.js";
import sampleRouter from "./src/routes/sample.route.js";
import helmet from "helmet";
import { connectToDB } from "./src/config/db.js";
import config from "./src/config/config.json" assert { type: "json" };
import fs from "fs/promises"; // Use fs/promises for ES module support
import analystRouter from "./src/routes/analyst.route.js";

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameAncestors: ["*"],
      },
    },
  })
);

// Resolve __dirname using fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfsFolder = path.resolve(__dirname, "pdfs");

app.use("/pdfs", express.static(pdfsFolder));

// Set the views directory and view engine
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", limsRouter);
app.use("/admin", adminRouter);
app.use("/", sampleRouter);
app.use("/", analystRouter);

// Helper function to get base64 encoded image
const getBase64Image = async (filePath) => {
  try {
    const image = await fs.readFile(filePath);
    return `data:image/png;base64,${image.toString("base64")}`;
  } catch (error) {
    console.error("Error reading image file:", error);
    throw error;
  }
};

// Example route to check uploaded file
app.get("/images/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "src/public/images", filename);
  res.sendFile(filePath);
});

app.get("/documents/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "src/public/documents", filename);
  res.sendFile(filePath);
});

const PORT = config.development.PORT || 9000;
app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on ${config.development.URL}:${PORT}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});

export { getBase64Image };
