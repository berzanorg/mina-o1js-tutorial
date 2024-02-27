import { DeployArgs, Permissions, SmartContract, State, UInt64, method, state } from "o1js"

/**
 * `CounterSmartContract` is a zk smart contract that represents a counter.
 * It has a single state called `count` which is a `Uint64`.
 * Deploy function deploys the smart contract's verification key to Mina blockchain and sets the permissions.
 * Init function initializes the state of the smart contract.
 * It has 3 different smart contract methods and each method has to be called inside a transaction.
 * Increment method increments the count state by one.
 * Decrement method decrements the count state by one.
 * Set method updates the count state with the given count.
 * Every method makes sure that the state is valid using `State.getAndRequireEquals`.
 */

export class CounterSmartContract extends SmartContract {}
