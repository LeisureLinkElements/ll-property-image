'use strict';

describe('<ll-property-image> - Optional Inputs', function() {

  var element;
  beforeEach(function() {
    element = fixture('fixture');
  });

  describe('isDirty()', function() {
    it('should expose a isDirty method, by default it should return false', function() {
      expect(element.isDirty()).to.be.eql(false);
    });

    it('should change to dirty if the title is modified after loading', function() {
      element.imgTitle = 'BLAH';
      expect(element.imgTitle).to.be.eql('BLAH');
      expect(element.isDirty()).to.be.eql(true);
    });

    it('should be able to reset the dirty property if the value is set back to the original', function() {
      element.imgTitle = 'This is a title';
      expect(element.imgTitle).to.be.eql('This is a title');
      expect(element.isDirty()).to.be.eql(false);
    });

    it('should change to dirty if the description is modified after loading', function() {
      element.imgDescription = 'This is my Kitchen';
      expect(element.imgDescription).to.be.eql('This is my Kitchen');
      expect(element.isDirty()).to.be.equal(true);
    });

  });

  describe('getChanges()', function() {

    it('should expose a function for getChanges()', function() {
      expect(element.getChanges()).to.be.ok;
    });

    it('should return the title and description', function() {
      element.imgDescription = 'This is my Kitchen';
      expect(element.getChanges()).to.have.deep.property('title');
      expect(element.getChanges()).to.have.deep.property('description');
      console.log(element.getChanges());
      expect(element.getChanges()).to.be.eql({
        title: 'This is a title',
        description: 'This is my Kitchen',
        isDefaultImage: true
      });
    });

  });

  describe('setImgSrc()', function() {

    it('should expose a function for setImgSrc()', function() {
      expect(element.setImageSrc('http://lorempixel.com/100/400')).to.be.ok;
    });

    it('should change the img src', function() {
      var url = 'http://lorempixel.com/100/200';
      element.setImageSrc(url);
      expect(element.src).to.be.eql(url);
    });
  });

});
