'use strict';

describe('<ll-property-image> - Optional Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should optionally take a imgSizing property', function() {
    expect(element.sizing).to.be.eql('contain');
  });

  it('should optionally take a description', function() {
    expect(element.description).to.be.eql('This is a description');
  });

  it('should optionally take a title', function() {
    expect(element.title).to.be.eql('This is a title');
  });

  it('should optionally take a isPrimary property', function() {
    expect(element.isPrimary).to.be.eql(true);
  });

  it('should optionally take a sortOrder property', function() {
    expect(element.sortOrder).to.be.eql(2);
  })
});
