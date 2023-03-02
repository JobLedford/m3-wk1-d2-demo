var express = require('express');
var router = express.Router();

router.get('/home', function(req,res) {
    res.send('Hello World!');
});

router.post('/home', function (req, res) {
  res.send("You just called the post method at '/hello'\n");
});

//export this router to be used in the next JS file
module.exports = router;