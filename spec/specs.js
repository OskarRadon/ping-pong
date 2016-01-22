describe("pingPong", function() {
  it("will count up to a given number", function() {
    expect(pingPong(5)).to.equal("1, 2, 3, 4, 5");
  });

  it("will replace all numbers divisible by 3 with 'ping'", function(){
    expect(pingPong(5)).to.equal("1, 2, 3, 4, 'ping'");
  });

});
