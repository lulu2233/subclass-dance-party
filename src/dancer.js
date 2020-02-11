// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // console.log('dancer', this);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  console.log('dancer', this);
  setTimeout( , this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);
};