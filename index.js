const marked = require("marked")
module.exports = function () {
  this.filter("transformerName", (source, options) => {
    try {
      return source
     } catch (e) { throw e }
  })
}
