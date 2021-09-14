const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/api/userRoute');
const authRoute = require('./routes/api/authRoute');
const flightRoute = require('./routes/api/flightRoute');
const raserRoute = require('./routes/api/raserRoute');
const postRoutes = require('./routes/api/posts');
const connectDB = require('./config/connectDB');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/api/users');
require('dotenv').config()
const SpotifyWebApi = require('spotify-web-api-node')


const app = express();

//coneect to db
connectDB();

//set a middleware to parse dat
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.post('/refresh', (req,res) => {
  const refreshToken = req.body.refreshToken
  console.log("hi")
  const spotifyApi = new SpotifyWebApi({
      redirectUri:process.env.REDIRECT_URI,
      clientId:process.env.CLIENT_ID,
      clientSecret:process.env.CLIENT_SECRET,
      refreshToken,
  })

  spotifyApi
  .refreshAccessToken()
  .then(data => {
      res.json({
          accessToken: data.body.accessToken,
          expiresIn: data.body.expiresIn,
      })
  })
  .catch(err => {
      console.log(err)
      res.sendStatus(400)
  })
})

app.post('/login',(req,res) => {
  const code = req.body.code
  const spotifyApi = new SpotifyWebApi({
      redirectUri:process.env.REDIRECT_URI,
      clientId:process.env.CLIENT_ID,
      clientSecret:process.env.CLIENT_SECRET,
  })

  spotifyApi
  .authorizationCodeGrant(code)
  .then(data => {
      res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
      })
  }).catch(err => {
      console.log(err)
      res.sendStatus(400)
  })
})
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/flight',flightRoute);
app.use('/api/reserve',raserRoute);
app.use('/posts',postRoutes);
app.use('/user', userRoutes);

app.listen(5000, () => {
  console.log('Server started');
});

