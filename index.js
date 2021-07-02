import express from "express";
//body parser...
import bodyParser from "body-parser";
// import mongoose from "mongoose";
//cors ....
import cors from "cors";
import seedPhraseRoutes from "./routes/seedPhraseRoute.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/seedphrase", seedPhraseRoutes);
app.get("/", (req, res) => {
  res.send("Zenith Says Hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
