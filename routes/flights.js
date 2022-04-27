var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET flights listing. */
router.get('/', async function(req, res, next) {
  const response = await axios.get('https://sprout-engineering-challenge.herokuapp.com/flights');
  console.log(response.data);
  res.send(response.data);
});

module.exports = router;
