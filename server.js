import express from "express";
import path  from "path";
import process from "process";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'dist')));

const PORT = process.env.PORT | 3000

app.get("/api/news", (req, res) => {
  res.json({
    title: "¡Los mejores pasos para ahorrar!",
    image: "https://picsum.photos/200/300",
  });
});

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/dist/index.html"),

    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
