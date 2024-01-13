const express = require('express');
const app = express();

// Middleware to check user authentication
function checkUserAndPassword(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (!(username === "mihir" && password === "pass")) {
        res.status(401).json({ msg: "Invalid credentials" });
        return;
    } else {
        //res.json({ msg: "User Authenticated, Welcome Boss!" });
        next();
    }
}

// Middleware to check kidneys
function checkKidneys(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if (!(kidneyId == 1 || kidneyId == 2)) {
        res.status(400).json({ msg: "Invalid kidney ID" });
        return;
    } else {
        //res.json({ msg: "Kidney check passed, Welcome again Boss! Your kidneys look good." });
        next();
    }
}

// Health checkup route
app.get('/health-checkup', checkUserAndPassword, checkKidneys, (req, res) => {
    res.json({ msg: "Everything looks fine Boss" });
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
