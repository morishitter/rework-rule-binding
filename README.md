# rework-rule-binding [![Build Status](https://travis-ci.org/morishitter/rework-rule-binding.png)](https://travis-ci.org/morishitter/rework-rule-binding)

A [Rework](https://github.com/reworkcss/rework) plugin to not cascade the rules.

# Installation

```
npm install rework-rule-binding
```

# Use
As a Rework plugin:

```javascript
// dependencies
var fs = require('fs');
var rework = require('rework');
var bind = require('rework-rule-binding');

// css to be processed
var css = fs.readFileSync('build/build.css', 'utf8').toString();

// process css using rework-vars
var out = rework(css).use(bind).toString();
```

# Example
Selectors enclosed in parenthesis is not cascading.

```
(.hoge) {
  color: red;
}

.piyo {
  color: blue;
}

.hoge {
  font-size: 18px;
}
```
runs **error**.
