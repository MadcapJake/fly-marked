const marked = require("marked")
module.exports = function () {
  this.filter("marked", (source, options) => {
    try {
      marked.setOptions(options)
      return marked(source)
     } catch (e) { throw e }
  }, { ext: ".md" })
}
