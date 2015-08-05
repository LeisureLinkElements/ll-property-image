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

  it('should default the title to the imgName, if Title is not provided', function() {
    expect(element.title).to.be.eql('dc134145.jpg');
    expect(element.title).to.be.eql(element.name);
  });

  it('should default the isDefaultImage property to false if it is not provided', function() {
    expect(element.isDefaultImage).to.be.eql(false);
  });

  it('should default the sortOrder if it is not provided', function() {
    expect(element.sortOrder).to.be.eql(1);
  });

});
