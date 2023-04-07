import express from "express";
import indexRoutes from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
import morgan from "morgan";
const app = express();

app.set("views", path.join(__dirname, "/views"));

const hbs = create({
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
// hbs
app.set("view engine", ".hbs");
// Midelwords
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Router
app.use(indexRoutes);
// Static file
app.use(express.static(path.join(__dirname, "public")));
export default app;
