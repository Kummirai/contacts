import express from "express";
import dotenv from "dotenv";
import contactsRoute from "./routes/contactsRoute.js";
import connectToDb from "./mongoDB/db.js";
import cors from "cors";

dotenv.config();
const corsOptions = "http://localhost:5173";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/contacts", contactsRoute);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server running on port ${PORT}`);
});
