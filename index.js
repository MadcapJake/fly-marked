const marked = require("marked")
module.exports = function () {
  this.filter("transformerName", (source, options) => {
    try {
      marked.setOptions(options)
      return marked(source)
     } catch (e) { throw e }
  })
}
