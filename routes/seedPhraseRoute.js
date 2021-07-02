import express from "express";
const router = express.Router();
import {
  generateSeedPhrase,
  createWallet,
} from "../controllers/seedPhraseController.js";
router.get("/", (req, res) => {
  res.send("SeedPhrase");
});
router.get("/generate", generateSeedPhrase);
router.post("/create", createWallet);

export default router;
