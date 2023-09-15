import { domain } from "./utils/constant";
import { getSignature } from "./utils/get-signature";
import { sendRequest } from "./utils/send-request";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
    const apiKey = process.env["APIKEY"] || ''
    const secret = process.env["SECRET"] || ''
    const method = "GET"
    const path = "/v1/account"
    const email = "type_the_email_you_want_to_get"
    const timestamp = (new Date()).getTime().toString()

    const sig = getSignature(method, path, secret, '', timestamp)
    const result = await sendRequest(method, domain + path, { "email": email }, apiKey, sig, timestamp)

    console.log(JSON.stringify(result, null, '  '));

    process.exit();
})();