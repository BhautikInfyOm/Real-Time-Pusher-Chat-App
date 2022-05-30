const Pusher = require("pusher");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.set('PORT', process.env.PORT || 5000);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: "1415946",
  key: "dc26be17ccaceb24e6da",
  secret: "7d3b547e4e661209c247",
  cluster: "ap2",
  useTLS: true
});


app.post('/message', (req, res) => {
    const payload = req.body;
    console.log(payload)
    pusher.trigger('message', 'message', payload);
    res.send(payload)
  });

app.listen(app.get('PORT'), () =>
  console.log('Listening at ' + app.get('PORT')))


