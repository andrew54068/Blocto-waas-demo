import { domain } from "./utils/constant";
import { getSignature } from "./utils/get-signature";
import { sendRequest } from "./utils/send-request";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    const apiKey = process.env["APIKEY"] || ''
    const secret = process.env["SECRET"] || ''
    const userId = 'your_user_id_here'
    const txHash = 'your_tx_hash_here'
    
    const method = "GET"
    const path = `/v1/account/${userId}/transactions/${txHash}`
    const timestamp = (new Date()).getTime().toString()
    const sig = getSignature(method, path, secret, '', timestamp)

    const result = await sendRequest(method, domain + path, {}, apiKey, sig, timestamp)
    console.log(`${JSON.stringify(result, null, '  ')}`);
})();