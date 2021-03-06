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
        expect(event.detail).to.be.eql({
          dirty: false,
          imgId: "1234567",
          title: "This is a title",
          description: "This is a description",
          tags: [],
          sortOrder: 1,
          fileName: "dc134145.jpg",
          isDefault: false
        });
      });

      element.makeDefaultImage();
    });

    it('should raise an event for cleaning up styles after a drag drop', function() {
      element.addEventListener('ll-property-image-drag-cleanup', function(event) {
        expect(event.detail).to.be.ok;
      });

      element._handleDragEnd();
    });
  });




});
