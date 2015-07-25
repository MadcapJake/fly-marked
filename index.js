const marked = require("marked")
module.exports = function () {
  this.filter("transformerName", (source, options) => {
    try {
      return marked(src)
     } catch (e) { throw e }
  })
}
