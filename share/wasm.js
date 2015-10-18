#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var wasm = require('wasm-jit');
var Compiler = require('./compiler')
var argv = require('yargs')
    .demand(1)
    .argv;

var src = fs.readFileSync(argv._[0]).toString();

var compiler = Compiler.create();

var module = path.basename(argv._[0]).replace(/\.[^\.]*$/, '');
var info = compiler.compile(module, src);

if (!info.main)
  throw new Error('No `main` function was exported');

var ctx = wasm.std.createContext();
info.main(ctx);
