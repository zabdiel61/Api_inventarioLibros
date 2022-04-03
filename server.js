const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");
const cors = require("cors");

const routes = require("./routes");

//configuraciones
const app = express();
app.set("port", process.env.PORT || 9000);
const dbOptions = {
 host: "us-cdbr-east-05.cleardb.net",
 port: 3306,
 user: "b9236bf3599fa7",
 password: "08da3add",
 database: "heroku_92c583a6a747576",
};

const corsOptions = {
 origin: "http://localhost:3000",
 credentials: true, //access-control-allow-credentials:true
 optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//mysql://b9236bf3599fa7:08da3add@us-cdbr-east-05.cleardb.net/heroku_92c583a6a747576?reconnect=true

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
