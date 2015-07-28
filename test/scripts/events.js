'use strict';

describe('<ll-property-image> - Optional Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  describe('events', function() {
    it('should raise an event for delete', function() {

      element.addEventListener('ll-property-delete-image', function(event) {
        expect(event.detail).to.be.eql({ imgName: 'dc134145.jpg' });
      });

      element.deleteImage();
    });

    it('should raise an event for Make Default Image', function() {
      element.addEventListener('ll-property-default-image', function(event) {
        expect(event.detail).to.be.eql({ imgName: 'dc134145.jpg' });
        console.log(event.detail);
      });

      element.makeDefaultImage();
    });
  });


});
