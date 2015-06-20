
var getContactFileName = function(id) {

	// We assume contacts are stored under data sub-folder
	return "../../data/" + id + "-Contact.json";
}

describe("FilePersistence Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";
	var fs = require('fs');

	describe("create persist contact", function(){
		var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							console.log(body);
							idCreated = body;
							done();
					    });
		});

		it("should persist contact",function(done){

			var fileName = getContactFileName(idCreated);
			console.log(fileName);
			console.log("one");

			console.log(fs.readFileSync(fileName));
			console.log("one");
			var obj = JSON.parse(fs.readFileSync(fileName));
			console.log(obj.firstName);
			expect(obj.firstName).toBe("jagan");
			done();

		});
       
		it("should update contact",function(done){
		    console.log("here");
		    console.log("obj1");
			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
			},

		    		    function(error, response, body){
		    		        console.log("obj2");
							expect(response.statusCode).toBe(200);
							console.log(body);

							var fileName = getContactFileName(idCreated);
							console.log(fileName);
							var obj = JSON.parse(fs.readFileSync(fileName));
							console.log(obj);
							expect(obj.firstName).toBe("jagan-updated");
							done();
					    });
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){

		it("should post message to contact", function(done){
		    //TODO: Write your test case here.
		    console.log("heloo");
		    var msg = new Object();
		    msg.userid = "0";
		    msg.text = "hello";
		    request.post({
		        url: contacts_url + "/" + msg.userid + "/" + msg.text,
		        body: msg,
		        json: true
		    },
            function (error, response, body) {
                // id = body;
                //expect(body.userid).toBe('0');
                id = body;
                //console.log("idid");
                //console.log(id);
                //expect(response.statusCode).toBe(200);
                //console.log(body);
                //console.log("Tests are over");
                //expect(id).toBe('0');
                console.log("id is ");
                done();
            })

//		    done();

		});

		it("should get message for contact", function(done){
			//TODO: Write your test case here.
		    request.get({
		        url: contacts_url + "/ask/" + id,
		        json: true
		    },
            function (error, response, body) {
                text = body;
                console.log(text);
                expect(text).toBe("hello");
                done();
            })

//		    done();

		});

	});

});
