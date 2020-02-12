var makeHulkDancer = function(top, left, timeBetweenSteps) {
  // console.log('blinky', this);
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="hulkdancer"></span>');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // return this;
};

makeHulkDancer.prototype = Object.create(makeDancer.prototype);
makeHulkDancer.prototype.constructor = makeHulkDancer;

makeHulkDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  var oldStep = makeDancer.prototype.step.bind(this);

  oldStep();


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.top += 5;
  // if (this.top >= screen.height) {
  //   return;
  // }

  this.setPosition(this.top, this.left);
};