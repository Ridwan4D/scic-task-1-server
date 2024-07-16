const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json());



app.get("/", async (req, res) => {
    res.send("MFC server is running")
})

app.listen(port, () => {
    console.log(`mfc server is running on port ${port}`);
})