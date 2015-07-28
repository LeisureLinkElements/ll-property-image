'use strict';

describe('<ll-property-image> - Optional Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should optionally take a imgSizing property', function() {
    expect(element.imgSizing).to.be.eql('contain');
  });

  it('should optionally take a description', function() {
    expect(element.imgDescription).to.be.eql('This is a description');
  });

  it('should optionally take a title', function() {
    expect(element.imgTitle).to.be.eql('This is a title');
  });

  it('should optionally take a isDefaultImage property', function() {
    expect(element.isDefaultImage).to.be.eql(true);
  });
});
