const express = require("express");
const router = express.Router();

router.post(
    "/addition", async (req, res) => {
        const result = req.body.num1 + req.body.num2;
        console.log("addition result:" + result)
        res.json({ success: true, result: result })
    }
);

module.exports = router;