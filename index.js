const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

const mainRoutes = require('./routes/index');
const employeeRoutes = require('./routes/employee');

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})

// use external store to implement rate limiting to support multiple servers
app.use(limiter);

// parse application/json
app.use(bodyParser.json())

app.use('/', mainRoutes);
app.use('/', employeeRoutes);

// do not start server when running tests
if (require.main === module) {
	app.listen(port, () => {
	  console.log(`Example app listening on port ${port}`);
	})
}

module.exports = app;