const { describe } = require("node:test");

import { debug } from 'console';
// import  { AddressFacade }  from './../../../facades/AddressFacade';
import { newAddressFacade } from './../../../facades/BaseFacade';

describe('GET /address', function () {
    test("get all address from database", async () => {
        //const newAddressFacade = new AddressFacade;
        //newAddressFacade.first(2);
        newAddressFacade.first(1).then((result) => {
            expect(result).toEqual('test');
        })
    })
});

// describe('Todos list API Integration Tests', function () {
//     describe('#GET / tasks', function () {
//         it('should get all tasks', function (done) {
//             request(app).get('/address')
//                 .end(function (err, res) {
//                     expect(res.statusCode).to.equal(200);

//                     done();
//                 });
//         });
//     });
// });

