# rework-rule-binding [![Build Status](https://travis-ci.org/morishitter/rework-rule-binding.png)](https://travis-ci.org/morishitter/rework-rule-binding)

[Rework](https://github.com/reworkcss/rework) plugin to prohibit cascading the rulesets.

## Installation

```
npm install rework-rule-binding
```

## Use
As a Rework plugin:

```javascript
// dependencies
var fs = require('fs');
var rework = require('rework');
var bind = require('rework-rule-binding');

// css to be processed
var css = fs.readFileSync('build/build.css', 'utf8').toString();

// process css using rework-rule-binding
var out = rework(css).use(bind).toString();
```

## Example
Selectors enclosed in parenthesis don't cascade.

```css
(.binded) {
  color: red;
}

.binded {
  font-size: 18px;
}
```
Run **error**.

And placeholder selectors with `rework-inherit` don't cascade too.

```css
%placeholder {
    color: red;
}

%placeholder {
    font-size: 12px;
}
```

Run **error**.


## License
The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
