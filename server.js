import express from "express";
import path  from "path";
import { fileURLToPath } from "url";
import process from "process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname,'dist')));

const { PORT = 5173 } = process.env;

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/dist/index.html"),

    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.get("/api/news", (req, res) => {
  res.json({
    title: "¡Los mejores pasos para ahorrar!",
    image: "https://picsum.photos/200/300",
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
