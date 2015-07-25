<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [marked](https://github.com/chjj/marked) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/chjj/marked#options-1) to see the available options.

### Install

```a
npm install -D fly-marked
```

### Example

```js
export function* md () {
  yield this
    .source("src/**/*.md")
    .marked()
    .concat("test.html")
    .target("dist")
}
```

# License

[MIT][mit] © [Jake Russo][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/MadcapJake
[contributors]: https://github.com/MadcapJake/fly-marked/graphs/contributors
[releases]:     https://github.com/MadcapJake/fly-marked/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-marked
[npm-ver-link]: https://img.shields.io/npm/v/fly-marked.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-marked.svg?style=flat-square
[travis-link]:  https://travis-ci.org/MadcapJake/fly-marked
[travis-badge]: http://img.shields.io/travis/MadcapJake/fly-marked.svg?style=flat-square
