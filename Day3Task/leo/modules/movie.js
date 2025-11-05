import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function moviePage(req, res) {
  const moviePath = path.join(__dirname, "../data/movie.txt");

  fs.readFile(moviePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading movie data");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(" Movie Details:\n\n");
    res.write(data);
    res.end(`\n\n File path: ${moviePath}`);
  });
}