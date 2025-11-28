import express from "express";
import dotenv from "dotenv";
import contactsRoute from "./routes/contactsRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/contacts", contactsRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
