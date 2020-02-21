const { expect } = require('chai')
const fizzbuzz = require('../fizzbuzz');

describe('Fizzbuzz test', function() {
  it('should return number', function() {
    let output = fizzbuzz(1);
    expect(output).to.be.a("number");
    expect(output).to.be.equal(1)
    
  });

  it('should return "fizz" if given number can be divided by 3', function() {
    let output = fizzbuzz(6);
    expect(output).to.be.a("string");
    expect(output).to.be.equal("fizz");
  });

  it('should return "buzz" if given number can be divided by 5', function() {
    expect(fizzbuzz(5)).to.be.a("string");
    expect(fizzbuzz(5).to.be.equal("buzz"));
  });

  it('should return "fizzbuzz" if given number can be divided by 15', function() {
    let output = fizzbuzz(15);
    expect(output).to.be.a("string");
    expect(output).to.be.equal("fizzbuzz");
  });
}); 

