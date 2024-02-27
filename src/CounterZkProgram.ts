import { SelfProof, UInt64, ZkProgram } from "o1js"

/**
 * `CounterZkProgram` is a zk program that represents a counter.
 * Its public input and public output types are `UInt64` which is based on a `Field`.
 * Its public input represents the count and its public output represents the updated count.
 * It has 4 differents methods and each method generates a zero knowledge proof.
 * Genesis method takes a count and returns it back as is.
 * Increment method takes a count and a zero knowledge proof and returns the count plus 1.
 * Decrement method takes a count and a zero knowledge proof and returns the count minus 1.
 * Set method takes a count, a zero knowledge proof and a new count and returns the new count.
 * Every method that takes a zero knowledge proof verifies the proof.
 * And requires that the current public input is equal to the public output of the previous proof.
 */

export const CounterZkProgram = ZkProgram({
	name: "CounterZkProgram",
	methods: {},
})
