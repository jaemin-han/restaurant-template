const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {

	const data = {
		// cdn: '' https://youtu.be/R1MKdih1H6k?t=1098
		greeting: 'Welcome to my Restaurant',
		description: 'This is a great place for a business meeting ot to bring a date!'
	}

	res.render('index', data)
})

module.exports = router
