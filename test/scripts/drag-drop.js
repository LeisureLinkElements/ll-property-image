'use strict';

describe('Drag and Drop', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  it('should fire _handleDragStart when you start to drag an element', function() {
    var spy = sinon.spy(element[0], '_handleDragStart');

    dragMock.dragStart(element[0], function(e) {
      expect(e.dataTransfer.effectAllowed).to.be.eql('move');
      expect(e.dataTransfer.types[0]).to.be.eql('text/plain');
      expect(e.dataTransfer.getData("text/plain")).to.be.eql("1");

      //class list returns a DOMTokenList
      expect(element[0].classList.contains('dragging')).to.be.eql(true);
    });
    expect(spy.callCount).to.be.eql(1);
  });

  it('should fire _handleDragOver when you drag the element over another', function() {
    var spy = sinon.spy(element[1], '_handleDragOver');

    dragMock.dragStart(element[0])
      .dragOver(element[1]);

    expect(element[1].classList.contains('over')).to.be.eql(true);
    expect(spy.callCount).to.be.eql(1);
  });



  it('should fire _handleDragLeave when you drag the element over another', function() {
    var spy = sinon.spy(element[1], '_handleDragLeave');

    dragMock.dragStart(element[0])
      .dragOver(element[1])
      .dragLeave(element[1]);

    expect(element[1].classList.contains('over')).to.be.eql(false);
    expect(spy.callCount).to.be.eql(1);
  });


  it('should fire _handleDrop when you drop the element over another', function() {
    var spy = sinon.spy(element[1], '_handleDrop');

    dragMock.dragStart(element[0])
      .dragOver(element[1])
      .drop(element[1], function(e) {
        expect(e.dataTransfer.effectAllowed).to.be.eql('move');
        expect(e.dataTransfer.types[0]).to.be.eql('text/plain');
      });

    expect(spy.callCount).to.be.eql(1);
  });

  it('should fire an event when getting a drop event', function() {

    element[1].addEventListener('ll-property-image-drag', function(event) {
      expect(event.detail.item).to.be.eql("1");
      expect(event.detail.target).to.be.eql("2");
    });
    dragMock.dragStart(element[0])
      .dragOver(element[1])
      .drop(element[1]);
  });

  it('should fire _handleDragEnd after the drop is finished', function() {
    var spy = sinon.spy(element[1], '_handleDragEnd');

    element[0].addEventListener('ll-property-image-drag-cleanup', function(event) {
      expect(event.detail).to.be.ok;
      expect(element[0].classList.contains('dragging')).to.be.eql(false);
      expect(element[0].classList.contains('over')).to.be.eql(false);
    });

    dragMock.dragStart(element[0])
      .dragOver(element[1])
      .drop(element[1]);

    expect(spy.callCount).to.be.eql(1);
  });


});
