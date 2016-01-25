"use strict";

var test = require("tape");
var isNth = require("./index").isNth;
var everyNth = require("./index").everyNth;

test("every silly bugger needs a test", function(assert){
    assert.ok(isNth(10, 100));
    assert.ok(isNth(9, 81));
    assert.ok(isNth(7, 49));
    assert.ok(isNth(80, 80));
    assert.ok(isNth(100, 1000));
    assert.ok(!isNth(2, 1));
    assert.ok(!isNth(2, 1));
    assert.ok(!isNth(9, 100));
    assert.ok(!isNth(9, "foo"));
    assert.ok(!isNth("1", 10));
    assert.ok(!isNth(100, 1002));
    
    assert.end();
});

test("everyNth", function(assert){
    
    var results = [];
    var expect = [
        "0 - 14",
        "15 - 29",
        "30 - 44",
        "45 - 59"
    ];
    
    var counter = everyNth(15, function(start, end){
       results.push(start + " - " + end); 
    });
    
    for(var i = 0; i < 58; i++){
        counter(i);
    }
    
    assert.deepEqual(results, expect);


    for(var i = 0; i < 100; i++){
        if(isNth(10, i))
            console.log("now the %sth number", i);
    }


    assert.end();
});

