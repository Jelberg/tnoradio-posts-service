//inside create_test.js
import assert from "assert";
import User from "../repository/mongo/Schemas/User.js"; //imports the User schema.
import app from "../app.js";
import "../repository/mongo/MongoDatabase.js";
import sinon from "sinon";
import "../sinon-mongoose.js";
import chai from "chai";
import chaiHttp from "chai-http";
const expect = chai.expect;
chai.use(chaiHttp);

var url = "http://localhost:9000";

describe("User Insertion", () => {
  const userMock = sinon.mock(
    new User({
      name: "Karolyn",
      lastName: "Méndez",
      email: "karolscript@gmail.com",
      dni: 17577898,
      isActive: true,
    })
  );
  var user = userMock.object;
  beforeEach(function () {
    //  console.log(user);
  });

  /*   it('Sould mock user insertion', function(done) { // <= Pass in done callback
        chai.request(app)
        .post('/api/users/save')
        .send(user)
        .end(function (err, res) {
            console.log("INSERT RESUSER " + res.text);
            console.log("INSERT ERROR " + err);
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            done();      
        }); 
       
    });*/

  afterEach(function () {
    //   User.deleteOne(user);
  });
});
