const test = require("tape").test
const marked = require("../")

test("fly-marked", (t) => {
  t.plan(3)
  marked.call({
    filter: function (name, transform, options) {
      t.equal(name, "marked", "add marked filter")
      t.ok(/<p>I am using <strong>markdown<\/strong>\.<\/p>/.test(
        transform("I am using __markdown__.")), "marked transform")
      t.equal(options.ext, ".md", "extension is .md")
    }
  })
})
