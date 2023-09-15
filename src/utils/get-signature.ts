import crypto from 'crypto';

export const getSignature = (
    method: string,
    path: string,
    secret: string,
    body: string,
    timestamp: string
): string => {
    const request_payload = method + path + body

    const sig = crypto
        .createHmac('sha256', secret)
        .update(request_payload + timestamp)
        .digest('base64')
    return sig
}