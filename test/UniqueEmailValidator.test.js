//inside create_test.js
import assert from 'assert';
import User from '../repository/mongo/Schemas/User.js'; //imports the User schema.
import app from '../app.js';
import '../repository/mongo/MongoDatabase.js';
import sinon from 'sinon';
import '../sinon-mongoose.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
const expect = chai.expect;
chai.use(chaiHttp);

var url='http://localhost:4000';

describe('Unique email validation tests', () => {
    
 const userMock = sinon.mock(new User({name:'Karolyn', lastName:'Méndez',    
    email: 'karolscript@gmail.com', dni:17577898, isActive: true}));
   var user = userMock.object;
    beforeEach(function () {
      //  console.log(user);
    });

    it ('Should pass if email is unique', ()=>{
      chai.request(app)
      .get('/api/users/verifyemail')
      .send( { email: user.email })
      .end(function (err, res) {
          expect(res).to.have.status(200);
        //  expect(res).to.have.status(202);
        //  done();
          });    
    });

    it ('Should fail when email is not unique', (done)=> {
        chai.request(app)
        .get('/api/users/verifyemail')
        .send( { email: user.email })
        .end(function (err, res) {
            expect(res).to.have.status(400);
            done();
        });           
        
    });
  /*  afterEach(function (){
     //   User.deleteOne(user);
    });*/
});
