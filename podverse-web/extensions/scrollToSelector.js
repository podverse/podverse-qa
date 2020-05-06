module.exports.command = function (selector) {
  this.execute(`document.querySelector('${selector}').scrollIntoView()`)

  // Offset the scroll by y: -150 so the navbar is not in the way of clicking the element.
  this.execute(`document.querySelector('.view__contents').scrollBy(0, -100)`)

  return this
}
