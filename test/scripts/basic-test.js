'use strict';

describe('<ll-property-image> - Required Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should take a imgName', function() {
    expect(element.name).to.be.eql('dc134145.jpg');
  });

  it('should take a src', function() {
    expect(element.src).to.be.eql('http://lorempixel.com/600/400');
  });

  it('should default a imgSizing property', function() {
    expect(element.sizing).to.be.eql('cover');
  });

  it('should default the isDefault property to false if it is not provided', function() {
    expect(element.isDefault).to.be.eql(false);
  });

  it('should default the sortOrder if it is not provided', function() {
    expect(element.sortOrder).to.be.eql(1);
  });

});
