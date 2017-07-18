'use strict'
var test = require('tap').test
var colorCalc = require('../colorCalc.js')

// Given #199ADB, Then return #47AEE2
test('color-calc-lighten-20', function(t) {
    t.is(colorCalc.from("#199adb"), "#47aee2", 'find 20% lighten color')
    t.done()
})