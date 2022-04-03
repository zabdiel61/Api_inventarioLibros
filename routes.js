const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
 req.getConnection((err, conn) => {
  if (err) return res.send(err);

  conn.query("SELECT * FROM libros", (err, rows) => {
   if (err) return res.send(err);

   res.json(rows);
  });
 });
});

routes.post("/", (req, res) => {
 req.getConnection((err, conn) => {
  if (err) return res.send(err);

  conn.query("INSERT INTO libros SET ?", [req.body], (err, rows) => {
   if (err) return res.send(err);

   res.send("libro insertado!");
  });
 });
});

routes.delete("/:id", (req, res) => {
 req.getConnection((err, conn) => {
  if (err) return res.send(err);

  conn.query(
   "DELETE FROM libros where id = ?",
   [req.params.id],
   (err, rows) => {
    if (err) return res.send(err);

    res.send("libro Borrado!");
   }
  );
 });
});

routes.put("/:id", (req, res) => {
 req.getConnection((err, conn) => {
  if (err) return res.send(err);

  conn.query(
   "UPDATE libros SET ? WHERE id = ?",
   [req.body, req.params.id],
   (err, rows) => {
    if (err) return res.send(err);

    res.send("libro Acttualizado!");
   }
  );
 });
});

module.exports = routes;
