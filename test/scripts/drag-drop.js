'use strict';

describe('Drag and Drop', function() {

  var element;
  var myEl1;
  var myEl2;

  beforeEach(function() {
    element = fixture('fixture');
    myEl1 = element[0];
    myEl2 = element[1];
  });

  it('should fire _handleDragStart when you start to drag an element', function() {
    //var spy = sinon.spy(myEl1, '_handleDragStart');

    dragMock.dragStart(myEl1, function(e) {
      expect(e.dataTransfer.effectAllowed).to.be.eql('move');
      expect(e.dataTransfer.types[0]).to.be.eql('text/plain');
      expect(e.dataTransfer.getData("text/plain")).to.be.eql("1");

      //class list returns a DOMTokenList
      expect(myEl1.classList.contains('dragging')).to.be.eql(true);
    });
    //expect(spy.callCount).to.be.eql(1);
  });

  it('should fire _handleDragOver when you drag the element over another', function() {
    dragMock.dragStart(myEl1)
      .dragOver(myEl2);

    expect(myEl2.classList.contains('over')).to.be.eql(true);
  });



  it('should fire _handleDragLeave when you drag the element over another', function() {
    dragMock.dragStart(myEl1)
      .dragOver(myEl2)
      .dragLeave(myEl2);

    expect(myEl2.classList.contains('over')).to.be.eql(false);
  });


  it('should fire _handleDrop when you drop the element over another', function() {
    dragMock.dragStart(myEl1)
      .dragOver(myEl2)
      .drop(myEl2, function(e) {
        expect(e.dataTransfer.effectAllowed).to.be.eql('move');
        expect(e.dataTransfer.types[0]).to.be.eql('text/plain');
      });
  });

  it('should fire an event when getting a drop event', function() {
    myEl2.addEventListener('ll-property-image-drag', function(event) {
      expect(event.detail.item).to.be.eql("1");
      expect(event.detail.target).to.be.eql("2");
    });
    dragMock.dragStart(myEl1)
      .dragOver(myEl2)
      .drop(myEl2);
  });

  it('should fire _handleDragEnd after the drop is finished', function() {
    myEl1.addEventListener('ll-property-image-drag-cleanup', function(event) {
      expect(event.detail).to.be.ok;
      expect(myEl1.classList.contains('dragging')).to.be.eql(false);
      expect(myEl1.classList.contains('over')).to.be.eql(false);
    });

    dragMock.dragStart(myEl1)
      .dragOver(myEl2)
      .drop(myEl2);
  });


});
