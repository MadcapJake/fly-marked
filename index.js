const marked = require("marked")
module.exports = function () {
  this.filter("marked",
    (source, options) => {
      marked.setOptions(options)
      return marked(source.toString())
    },
    { ext: ".html" }
  )
}
