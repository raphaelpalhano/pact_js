const path = require("path")
const {Verifier} = require("@pact-foundation/pact")
const {server, importData} = require("../../../src/provider")


const URL = "http://localhost:8081"


server.listen(8081, () => {
    importData()
    console.log(`Client Service listening on ${URL}`)

})

describe("Clients Service Verification", () => {
    it("validates the expectations of Client Service", async () => {
        let options = {
            provider: "Clients Service",
            logLevel: "DEBUG",
            providerBaseUrl: URL,
            pactUrls: ['http://localhost:8080/pacts/provider/ClientService/consumer/Frontend/latest'],
            consumerVersionTags: ["dev"],
            providerVersionTags: ["dev"],
            publishVerificationResult: true,
            providerVersion: "1.0.0",

        }

        return new Verifier(options).verifyProvider().then(output => {
            console.log("Pact Verification Complete!")
            console.log(output)
        })


    })
})