import assert from "node:assert"
import { describe, it } from "node:test"
import { AccountUpdate, Mina, PrivateKey, UInt64 } from "o1js"
import { CounterSmartContract } from "../src/CounterSmartContract.reference.js"

describe("CounterSmartContract", async () => {
	const { verificationKey } = await CounterSmartContract.compile()

	const LocalBlockchain = Mina.LocalBlockchain()
	Mina.setActiveInstance(LocalBlockchain)

	const userAccount = LocalBlockchain.testAccounts[0]

	const counterSmartContractPrivateKey = PrivateKey.random()
	const counterSmartContractPublicKey = counterSmartContractPrivateKey.toPublicKey()

	const counterSmartContract = new CounterSmartContract(counterSmartContractPublicKey)

	it("can deploy the smart contract", async () => {
		const tx = await Mina.transaction(userAccount.publicKey, () => {
			AccountUpdate.fundNewAccount(userAccount.publicKey)
			counterSmartContract.deploy({
				verificationKey,
				zkappKey: counterSmartContractPrivateKey,
			})
		})

		await tx.prove()

		tx.sign([userAccount.privateKey, counterSmartContractPrivateKey])

		await tx.send()

		const count = counterSmartContract.count.get()
		assert.deepEqual(count, UInt64.from(0))
	})

	it("can increment the count", async () => {
		const tx = await Mina.transaction(userAccount.publicKey, () => {
			counterSmartContract.increment()
		})

		await tx.prove()

		tx.sign([userAccount.privateKey])

		await tx.send()

		const count = counterSmartContract.count.get()
		assert.deepEqual(count, UInt64.from(1))
	})

	it("can decrement the count", async () => {
		const tx = await Mina.transaction(userAccount.publicKey, () => {
			counterSmartContract.decrement()
		})

		await tx.prove()

		tx.sign([userAccount.privateKey])

		await tx.send()

		const count = counterSmartContract.count.get()
		assert.deepEqual(count, UInt64.from(0))
	})

	it("can set the count to 42", async () => {
		const tx = await Mina.transaction(userAccount.publicKey, () => {
			counterSmartContract.set(UInt64.from(42))
		})

		await tx.prove()

		tx.sign([userAccount.privateKey])

		await tx.send()

		const count = counterSmartContract.count.get()
		assert.deepEqual(count, UInt64.from(42))
	})
})
