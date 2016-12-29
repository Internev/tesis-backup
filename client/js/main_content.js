// Created by Duncan on 12.29.2016
// Methods for main_content.vu

module.exports = {
    // Function adds each charactor to input
    update(e) {
      this.input = e.target.value
    },
    // On each keyup counts amount of words on document
    wordCounter() {
      this.count = this.input.split(' ').length - 1;// Minus one for accuracy
    }
  }