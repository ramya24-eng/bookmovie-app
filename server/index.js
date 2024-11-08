
const express = require('express')
var cors = require('cors')

require('dotenv').config();

const dbConfig = require('./config/dbConfig')

const app = express()

const userRoutes = require('./routes/userRoutes')
const movieRoute = require('./routes/movieRoutes')
const theatreRoute = require('./routes/theatreRoute')
const showRoute = require('./routes/showRoute')
const bookingRoute = require('./routes/bookingRoute')

const allowedOrigins = ['https://bookmovie-app.vercel.app',
                        'https://bookmovie-app-server.vercel.app'];

const options = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],  // Ensure Authorization header is allowed
  credentials: false,
};

app.use(cors(options));

//app.use(cors())
app.use(express.json())
app.use('/api/users' , userRoutes)
app.use('/api/movies' , movieRoute)
app.use('/api/theatres' , theatreRoute )
app.use('/api/shows' , showRoute )
app.use('/api/bookings' , bookingRoute )


const PORT = process.env.PORT || 8081




app.listen(PORT , ()=>{
    console.log("server running")
})
