import { domain } from "./utils/constant";
import { getSignature } from "./utils/get-signature";
import { sendRequest } from "./utils/send-request";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    const apiKey = process.env["APIKEY"] || ''
    const secret = process.env["SECRET"] || ''
    const userId = 'your_user_id_here'

    
    const method = "POST"
    const path = `/v1/account/${userId}/transactions`
    const script = `transaction {
        prepare(acct: AuthAccount) {
            log("Hello from prepare")
        }
        execute {
            log("Hello from execute")
        }
    }
    `
    const args: string[] = []

    const body = {
        script,
        args,
    }
    const stringifyBody = JSON.stringify(body)
    const timestamp = (new Date()).getTime().toString()
    const sig = getSignature(method, path, secret, stringifyBody, timestamp)

    const result = await sendRequest(method, domain + path, body, apiKey, sig, timestamp)
    console.log(`${JSON.stringify(result, null, '  ')}`);
    process.exit();
})();

