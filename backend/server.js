import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello");
});
app.use("api/auth",authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));