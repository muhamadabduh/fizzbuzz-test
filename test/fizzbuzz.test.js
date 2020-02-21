const { expect } = require('chai')
const fizzbuzz = require('../fizzbuzz');

describe('Fizzbuzz test', function() {
  it('should return number', function() {
    let output = fizzbuzz(1);
    expect(output).to.be.a("number");
    expect(output).to.be.equal(1)
    
  });

});