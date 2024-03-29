let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let options = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "__tests__/contract/pacts")],
    pactBroker: "http://localhost:9292",
    consumerVersion: "1.0.1",
    providerVersion: "1.0.1",
    tags: "dev"
}

publisher.publishPacts(options)