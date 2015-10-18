
Cirru WASM CLI
----

This is an experimental project based on [`wasm-cli`][cli] but in Cirru syntax.

> Note that as `wasm-cli` may update this project may break and need to update again.

[cli]: https://github.com/indutny/wasm-cli/

Find more at https://github.com/Cirru/cirru-wasm-ast

### Usage

```bash
npm i -g cirru-wasm-cli
```

Create a file `hello-world.cirru`:

```cirru
\ (void main) ()
  i32.store (addr.from_64 (i64.const 0)) (i32.const 0x6c6c6568)
  i32.store (addr.from_64 (i64.const 4)) (i32.const 0x6177206f)
  i32.store (addr.from_64 (i64.const 8)) (i32.const 0x000a6d73)

  std::print
    addr.from_64 (i64.const 0)
    addr.from_64 (i64.const 11)

export main
```

```bash
cirru-wasm-cli hello-world.cirru
```

### License

MIT
