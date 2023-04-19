const path = require("path")
const {Verifier} = require("@pact-foundation/pact")
const {server, importData} = require("../../../src/provider")


const URL = "http://localhost:8081"

jest.setTimeout(30000)

server.listen(8081, () => {
    importData()
    console.log(`Client Service listening on ${URL}`)

})

describe("Clients Service Verification", () => {
    it("validates the expectations of Client Service", () => {
        let options = {
            provider: "ClientsService",
            logLevel: "DEBUG",
            providerBaseUrl: URL,
            //{host do broker/pacts/provider/nome do provider no contrato/consumer/nome do consumer no contrato/latest}
            //pactUrls: ["http://localhost:9292/pacts/provider/ClientsService/consumer/Frontend/latest"],
            consumerVersionTags: ["dev"],
            providerVersionTags: ["dev"],
            //publishVerificationResult: true,
            providerVersion: "1.0.1",

        }

        return new Verifier(options).verifyProvider().then(output => {
            console.log("Pact Verification Complete!")
            console.log(output)
        })


    })
})




