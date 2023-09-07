const { describe } = require("node:test");

// import  { AddressFacade }  from './../../../facades/AddressFacade';
import { newAddressFacade } from './../../../facades/BaseFacade';

describe('GET /address', function () {
    test("get all address from database", async () => {
        //const newAddressFacade = new AddressFacade;
        //newAddressFacade.first(2);
        const returnAddress = newAddressFacade.first(1).then((result) => {
            expect(result).toEqual(promisedData);
        })
        
        console.log('return address', returnAddress)
    })
});

// describe('Todos list API Integration Tests', function () {
//     describe('#GET / tasks', function () {
//         it('should get all tasks', function (done) {
//             request(app).get('/')
//                 .end(function (err, res) {
//                     expect(res.statusCode).to.equal(200);

//                     done();
//                 });
//         });
//     });
// });

