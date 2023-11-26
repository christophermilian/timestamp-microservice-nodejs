require('dotenv').config();
let express = require('express');
let app = express();

// Enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
let cors = require('cors');
// Some legacy browsers hang on 204 status code
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

/**
 * Middleware function to log request information
 */
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} -${req.ip}`);
  next();
});

// routes
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// get the date as unix and utc
app.get('/api/:date?', function (req, res) {
  const { date } = req.params;
  const responseObj = { unix: undefined, utc: undefined };

  if (!date) {
    const nowDate = new Date();
    responseObj.unix = nowDate.valueOf();
    responseObj.utc = nowDate.toUTCString();
    return res.json(responseObj);
  }

  const dateParsed = isNaN(date) ? new Date(date) : new Date(parseInt(date));

  if (isNaN(dateParsed.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  responseObj.unix = dateParsed.valueOf();
  responseObj.utc = dateParsed.toUTCString();
  return res.json(responseObj);
});

let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
