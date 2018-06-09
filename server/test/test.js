var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080");

describe.skip("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .post("/users/add")
        .expect(200)
        .send({username:'naa',password:'naa'})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("inserted",res.text, "res.text is not matching with inserted");
          //res.text.should.be.equal("inserted");
            done();
        });
  });
});


describe.skip("SaveNews", function(err){

  it("It should save news", function(done){

  var json =
            {
            "author": "BBC Sport",
            "title": "Premier League 2016: BBC Sport readers rank top 10 moments of the year",
            "description": "This year has thrown up some classic matches, memorable incidents and remarkable feats - we asked you to rank the top 10 moments of 2016.",
            "url": "http://www.bbc.co.uk/sport/football/38397132",
            "urlToImage": "http://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/9AB4/production/_93040693_fotorcreated.jpg",
            "publishedAt": "2016-12-21T19:45:45Z"
            }
    url
        .post("/sav/add1")
        .expect(200)
        .send(json)
        .end(function(err,res){
          if (err){
              throw err;
          }
          assert.equal("inserted",res.text,"res.text is inserted");
          //res.text.should.be.equal("inserted");
          done();
        });

  });
});

describe.skip("DeleteNews", function(err){

  it("It should delete the saved news", function(done){

  var json ={"title": "Premier League 2016: BBC Sport readers rank top 10 moments of the year"}
    url
        .delete("/del/delete")
        .expect(200)
        .send(json)
        .end(function(err,res){
          if (err){
              throw err;
          }
          assert.equal("Deleted",res.text,"res.text is not match");

          done();
        });

  });
});


describe("UpdateNews", function(err){

  it("It should update the news", function(done){

  var json ={"title": "Northern Ireland's football governing body wants urgent Fifa meeting over poppy fine","Comment":"I dont like naaz"}
    url
        .put("/up/update")
        .expect(200)
        .send(json)
        .end(function(err,res){
          if (err){
              throw err;
          }
          assert.equal("updated",res.text,"res.text is not match");

          done();
        });

  });
});

/*
describe("Testing the third route", function(err){
  it("should handle and send the JSON data Part 1", function(done){
    url
        .get("/data")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.name.should.be.equal("Amit");
          myObj.age.should.be.equal("26");
          myObj.location.should.be.equal("Bangalore");
          done();
        });

  });
  it("should handle and send the JSON data", function(done){
    url
        .get("/data/js")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj.product.should.be.equal("Mobile");
          myObj.price.should.be.equal("12000");
          done();
        });

  });
});*/
