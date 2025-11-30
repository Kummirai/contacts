import express from "express";
import dotenv from "dotenv";
import connectToDb from "./mongoDB/db.js";
import cors from "cors";
import contactsRoute from "./routes/contactsRoute.js";
import categoryRoute from "./routes/categoryRoute.js";

dotenv.config();
const corsOptions = ["http://localhost:5173", "http://172.20.10.2:5173"];
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/contacts/categories", categoryRoute);
app.use("/api/contacts", contactsRoute);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server running on port ${PORT}`);
});
