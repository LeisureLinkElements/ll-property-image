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
      element.title = 'BLAH';
      expect(element.title).to.be.eql('BLAH');
      expect(element.isDirty()).to.be.eql(true);
    });

    it('should be able to reset the dirty property if the value is set back to the original', function() {
      element.title = 'This is a title';
      expect(element.title).to.be.eql('This is a title');
      expect(element.isDirty()).to.be.eql(false);
    });

    it('should change to dirty if the description is modified after loading', function() {
      element.description = 'This is my Kitchen';
      expect(element.description).to.be.eql('This is my Kitchen');
      expect(element.isDirty()).to.be.equal(true);
    });

    it('should be able to reset the dirty property if the value is set back to the original', function() {
      element.description = 'This is a description';
      expect(element.description).to.be.eql('This is a description');
      expect(element.isDirty()).to.be.equal(false);
    });

    it('should change to dirty if the tags are modified after loading', function() {
      element.addEventListener('ll-token-modified', function() {
         expect(element.tags).to.be.eql(['1']);
        expect(element.isDirty()).to.be.eql(true);
      });

      expect(element.isDirty()).to.be.eql(false);
      element.tags = ['1'];
      element.$.tags.tagChanged();
    });

    it('should reset the dirty status when calling resetDirtyStatus', function() {
      element.description = 'This is my Kitchen';
      expect(element.description).to.be.eql('This is my Kitchen');
      expect(element.isDirty()).to.be.equal(true);
      element.resetDirtyStatus();
      expect(element.isDirty()).to.be.equal(false);
    });

  });

  describe('getChanges()', function() {

    it('should expose a function for getChanges()', function() {
      expect(element.getChanges()).to.be.ok;
    });



    it('should return the title, description, and tags', function() {
      var changes = element.getChanges();
      expect(changes).to.have.deep.property('title');
      expect(changes).to.have.deep.property('description');
      expect(changes).to.have.deep.property('tags');
      expect(changes).to.have.deep.property('imgId');
      expect(changes).to.have.deep.property('sortOrder');
      expect(changes).to.have.deep.property('fileName');
      expect(changes).to.have.deep.property('isDefault');
      expect(changes).to.be.eql({
        dirty: false,
        imgId: '123456',
        title: 'This is a title',
        description: 'This is a description',
        tags: ['Rufus', 'Garfield', 'Beavis'],
        sortOrder: 2,
        fileName: "dc134145.jpg",
        isDefault: true
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

  describe('setSortOrder()', function() {

    it('should be able to update the sortOrder property', function() {
      element.setSortOrder(3);
      expect(element.sortOrder).to.be.eql(3);
    });

    it('should not trigger isDirty when only the sort order changes', function() {

      expect(element.isDirty()).to.be.eql(false);
      element.setSortOrder(4);
      expect(element.isDirty()).to.be.eql(false);
    });
  });

});
