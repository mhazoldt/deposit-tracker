let path = require('path')
// let logger = require('morgan')
let express = require("express")
let bodyParser = require("body-parser")
let apiRoutes = require('./routes/api')
let webRoutes = require('./routes/web')
let cors = require('cors')



var app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(bodyParser.json())

/////////// routes

app.use('/api', apiRoutes)
app.use('/', webRoutes)


// no stacktraces leaked to user in production
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  })
})


///////////// server

app.listen(process.env.PORT || 3001, function() {
  console.log("Express running")
})