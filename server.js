const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000

const app = express();

app.use(
    express.json({
        limit: "1024mb"
    })
)
app.use(
    express.urlencoded({
        limit: "1024mb",
        extended: true
    })
)


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();

const pusher = new Pusher({
  appId: process.env.appId,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  encrypted: true,
});

app.post("/message", (req, res) => {
  const payload = req.body;
  pusher.trigger(req.query.channel, "message", payload);
  res.send(payload);
});


app.listen(port, () => {
    console.log('my port is'+ ' ' + port)
})
