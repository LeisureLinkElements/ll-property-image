'use strict';

describe('<ll-property-image> -  Read Only', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });


  it('should set the readOnly property', function() {
    expect(element.readOnly).to.be.true;
  });

  it('should not allow drag and drop if readOnly is true', function() {
    expect(element.readOnly).to.be.true;
    expect(element.$.imageContainer.getAttribute('draggable')).to.be.eql('false');
  });

  it('should set a class of readOnly if the readOnly property is true', function() {
    expect(element.classList.contains('readOnly')).to.be.true;
  });

  it('should hide the delete button if the readOnly property is true', function() {
    expect(window.getComputedStyle(element.$['delete-image']).getPropertyValue('display')).to.be.eql('none');
  });



});
