var express = require('express');
var router = express.Router();

/* GET contacts */
var array = [];
count = 0;
message_count = 0;
messages = [];
fs = require('fs');
router.get('/:id', function (req, res, next) {
    //console.log(req);
    res.json(array[req.params.id]);
});

router.post('/', function (req, res, next) {
    count++;
    array.push(req.body);
    res.json(count-1);
    console.log(req.body);
    //json.stringify(req.body)
    fs.writeFile("../../data/" + (count - 1) + "-Contact.json", JSON.stringify(array[count-1]));
    console.log("file created");
    
   
});

router.put('/:id', function(req, res, next) {
    //console.log(req);
    console.log("coming inside\n");
    array[parseInt(req.params.id)].firstName = req.body.firstName;
    console.log("coming inside\n");
    console.log(array[req.params.id]);
    console.log("coming inside\n");
    
    fs.writeFile("../../data/" + parseInt(req.params.id) + "-Contact.json", JSON.stringify(array[parseInt(req.params.id)]));
  
    res.json(array[parseInt(req.params.id)]);
});


router.post('/:id/:message', function (req, res, next) {
    message_count++;
    messages.push(req.body);
    console.log(req.body);
    console.log("done");
    console.log(message_count);
    res.json(message_count - 1);
    array[parseInt(req.params.id)].message = req.body;
    fs.writeFile("../../data/" + parseInt(req.params.id) + "-Contact.json", JSON.stringify(array[parseInt(req.params.id)]));
});
router.get('/ask/:message_id', function (req, res, next) {
    //console.log(req);
    console.log(messages[parseInt(req.params.message_id)].text);
    
    res.json(messages[parseInt(req.params.message_id)].text);

});
module.exports = router;