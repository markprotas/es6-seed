import Hello from '../Hello';

let hello;

let chai = require('chai');
chai.should();

describe('suite title', function () {
    beforeEach(function () {
        hello = new Hello();
    });

    it('Should say hello', function () {
        hello.sayHello().should.equal('hello');
    });
});


