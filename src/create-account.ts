import { domain } from "./utils/constant";
import { getSignature } from "./utils/get-signature";
import { sendRequest } from "./utils/send-request";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    const apiKey = process.env["APIKEY"] || ''
    const secret = process.env["SECRET"] || ''
    const method = "POST"
    const path = "/v1/account/register"
    const data: Record<string, string> = {
        "email": "type_the_email_you_want_to_create"
    }
    const body = JSON.stringify(data)
    const timestamp = (new Date()).getTime().toString()
    const sig = getSignature(method, path, secret, body, timestamp)

    
    const result = await sendRequest('POST', domain + path, data, apiKey, sig, timestamp)
    console.log(`${JSON.stringify(result, null, '  ')}`);
    process.exit();
})();

