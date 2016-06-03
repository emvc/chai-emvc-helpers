# chai-emvc-helpers

[![Build](https://travis-ci.org/emvc/chai-emvc-helpers.png)](https://travis-ci.org/emvc/chai-emvc-helpers)
[![Coverage](https://coveralls.io/repos/emvc/chai-emvc-helpers/badge.png)](https://coveralls.io/r/emvc/chai-emvc-helpers)
[![Quality](https://codeclimate.com/github/emvc/chai-emvc-helpers.png)](https://codeclimate.com/github/emvc/chai-emvc-helpers)
[![Dependencies](https://david-dm.org/emvc/chai-emvc-helpers.png)](https://david-dm.org/jaredhanson/chai-emvc-helpers)


Helpers for testing emvc helpers with the
[Chai](http://chaijs.com/) assertion library.

## Install

    $ npm install chai-emvc-helpers

## Usage

#### Use Plugin

Use this plugin as you would all other Chai plugins:

```javascript
var chai = require('chai');

chai.use(require('chai-emvc-helpers'));
```

#### Write Test Cases

Once used, the `chai.emvc.helper` and `chai.emvc.dynamicHelper`
functions will be available to set up test cases for emvc helpers.

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
