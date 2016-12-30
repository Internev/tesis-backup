// Created by Duncan on 12.29.2016
// Methods for main_content.vu

module.exports = {
  // Function adds each charactor to input
  update(e) {
    this.input = e.target.value
    this.socket();
  },
  socket() {
    // Web socket connection. Only passing text so both people can save there own versions.
    this.$socket.emit('textadded', this.input);
  },
  // On each keyup counts amount of words on document
  wordCounter() {
    let splitIt = this.input.split(' ');
    // filters out spaces on each 'delete' or 'spacebar' or 'enter' key up then returns the length.
    this.count = splitIt.filter(val => val !== '').length;
  }
}