const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");

const routes = require("./routes");

//configuraciones
const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
 host: "localhost",
 port: 3306,
 user: "root",
 password: "Pa$$w0rd",
 database: "inventariolibros",
};

//midlewares
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());

//rutas
app.get("/", (req, res) => {
 res.send("Bienvenido a mi Api");
});
app.use("/api", routes);

//corriendo servidor
app.listen(app.get("port"), () => {
 console.log("servidor corriendo en el puerto", app.get("port"));
});
