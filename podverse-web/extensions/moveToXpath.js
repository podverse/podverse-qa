module.exports.command = function (selector, xoffset = 0, yoffset = 0) {
  console.log('hi', selector, xoffset, yoffset)
  this.moveToElement('xpath', selector, xoffset, yoffset)

  return this
}
