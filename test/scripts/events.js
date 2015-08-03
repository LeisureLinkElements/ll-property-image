'use strict';

describe('<ll-property-image> - Optional Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  describe('events', function() {
    it('should raise an event for delete', function() {

      element.addEventListener('ll-property-image-delete', function(event) {
        expect(event.detail).to.be.eql({ imgId: '1234567', name: 'dc134145.jpg' });
      });

      element.deleteImage();
    });

    it('should raise an event for Make Default Image', function() {
      element.addEventListener('ll-property-image-default', function(event) {
        expect(event.detail).to.be.eql({ imgId: '1234567', name: 'dc134145.jpg', isDefaultImage: false });
      });

      element.makeDefaultImage();
    });
  });


});
