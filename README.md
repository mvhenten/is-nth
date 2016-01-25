# is-nth
Check if value is the nth value

When processing a large batch of things, it's often nice to output some progress,
e.g. _Processing all the users from 0 till 99_.

I often run into silly off-by-one's or get the modulo logic wrong the first time.
This fixes that :)

### Installation

    npm install is-nth


### Usage

This module exposes two little functions: `isNth` and `everyNth`. The latter is 
simple convenience wrapper. See examples

### Examples

Log every 10th number:

```javascript
    var isNth = require("is-nth").isNth;

    for(var i = 0; i < 100; i++){
        if(isNth(10, i))
            console.log("now the %sth number", i);
    }
    // now the 10th number
    // now the 20th number
    // now the 30th number
    // now the 40th number
    // now the 50th number
    // now the 60th number
    // now the 70th number
    // ...
```

Or, logging how much is going to be done:

```javascript
    var everyNth = require("is-nth").everyNth;

    var logger = everyNth(100, function(start, end){
        console.log("Processing %s to %s", start, end);
    });

    for(var i = 0; i < 1000; i++){
        logger(i);
    }

    // Processing 0 to 99
    // Processing 100 to 199
    // Processing 200 to 299
    // Processing 300 to 399
    // Processing 400 to 499
    // Processing 500 to 599
    // Processing 600 to 699
    // Processing 700 to 799
    // Processing 800 to 899
    // Processing 900 to 999
```

### Contributing

This module is quite silly, but if you feel anything is lacking, let me know :)