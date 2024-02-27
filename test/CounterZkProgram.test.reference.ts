import assert from "node:assert"
import { describe, it } from "node:test"
import { UInt64, verify } from "o1js"
import { CounterZkProgram } from "../src/CounterZkProgram.reference.js"

describe("CounterZkProgram", async () => {
	const { verificationKey } = await CounterZkProgram.compile()

	const initialCount = UInt64.from(0)

	let lastProof = await CounterZkProgram.genesis(initialCount)

	it("can increment the count", async () => {
		lastProof = await CounterZkProgram.increment(lastProof.publicOutput, lastProof)
		assert.deepEqual(lastProof.publicInput, UInt64.from(0))
		assert.deepEqual(lastProof.publicOutput, UInt64.from(1))
	})

	it("can decrement the count", async () => {
		lastProof = await CounterZkProgram.decrement(lastProof.publicOutput, lastProof)
		assert.deepEqual(lastProof.publicInput, UInt64.from(1))
		assert.deepEqual(lastProof.publicOutput, UInt64.from(0))
	})

	it("can set the count to 42", async () => {
		lastProof = await CounterZkProgram.set(lastProof.publicOutput, lastProof, UInt64.from(42))
		assert.deepEqual(lastProof.publicInput, UInt64.from(0))
		assert.deepEqual(lastProof.publicOutput, UInt64.from(42))
	})

	it("can verify the last proof with verification key", async () => {
		const isValid = await verify(lastProof, verificationKey)
		assert.equal(isValid, true)
	})
})
