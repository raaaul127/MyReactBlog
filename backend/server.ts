import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import session from "express-session";
import fileUpload from "express-fileupload";
import { userRouter } from "./routes/userRouter";
import { postRouter } from "./routes/postRouter";
import { adminRouter } from "./routes/adminRouter";
dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname, "dist")));

app.use(fileUpload());
const port = process.env.PORT;
app.use(cors());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/admin", adminRouter);
//app.use("/uploads", express.static(path.join(__dirname+ "/uploads")));
app.use("/uploads", express.static("dist/uploads"));
app.get("/", (req: Request, res: Response) => {
  //res.send('Express + TypeScript Server!!!!');
  res.sendFile(path.join(__dirname + "/acasa.html"));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});