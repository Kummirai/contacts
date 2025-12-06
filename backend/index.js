import express from "express";
import dotenv from "dotenv";
import connectToDb from "./mongoDB/db.js";
import cors from "cors";
import contactsRoute from "./routes/contactsRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import authRoute from "./routes/authRoute.js";
import session from "express-session";
import passport from "passport";
import { isAuthenticated } from "./controllers/authController.js";

dotenv.config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
const PORT = process.env.PORT || 3000;

const app = express();

app.use(
  session({
    secret: "MYSECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/contacts/auth", authRoute);
app.use("/api/contacts/categories", categoryRoute);
app.use("/api/contacts", contactsRoute);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server running on port ${PORT}`);
});
