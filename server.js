import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import notFound from "./middleware/notfound.js";
import error from "./middleware/error.js";
import loginRoute from "./routes/login.js";
import signupRoute from "./routes/signup.js";
import userRoute from "./routes/user.js";
import multer from "multer";
import "dotenv/config";
import changeKey from "./routes/changeKey.js";

const port = process.env.PORT || 8080;

const app = express();
app.use(cookieParser());
const corsOptions = {
  origin: "https://front-end-mern-joke-app.onrender.com",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use("/login", loginRoute);
app.use("/signup", upload.single("file"), signupRoute);

app.use("/current-user", userRoute);
app.use("/changekey/", changeKey);

app.use(notFound);
app.use(error);

// Handling OPTIONS requests
app.options("*", cors(corsOptions));

app.listen(port, () => console.log(`Server is running on ${port}!`));
