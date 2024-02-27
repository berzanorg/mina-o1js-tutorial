# 📖 Mina o1js tutorial

The repository is for Mina o1js tutorial at https://berzan.org/posts/mina-o1js-tutorial.

## Todo

You can clone the repo with the command below:

```shell
git clone https://github.com/berzanorg/mina-o1js-tutorial.git
```

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── src/
│   ├── CounterSmartContract.reference.ts
│   ├── CounterSmartContract.ts
│   ├── CounterZkProgram.reference.ts
│   └── CounterZkProgram.ts
├── test/
│   ├── CounterSmartContract.test.reference.ts
│   ├── CounterSmartContract.test.ts
│   ├── CounterZkProgram.test.reference.ts
│   └── CounterZkProgram.test.ts
├── tsconfig.json
└── package.json
```

Zk programs and smart contracts are placed in `src/` directory.

Tests are placed in `test/` directory.

Files that end with `*.reference.ts` are reference implementations.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command       | Action                  |
| :------------ | :---------------------- |
| `npm install` | Installs dependencies   |
| `npm test`    | Runs tests in `./test/` |

## 👨🏻‍🔬 Author

The project is developed by [Berzan](https://berzan.org/) with his love, sweat, and tears.
