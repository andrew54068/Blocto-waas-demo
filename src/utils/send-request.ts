export const sendRequest = async (
    method: string, // GET, POST
    url: string,
    param: Record<string, any>,
    apiKey: string,
    sig: string,
    timestamp: string
): Promise<any | null> => {
    try {
        const _method = method.toUpperCase()
        const headers = {
            "Content-Type": "application/json",
            "X-Blocto-API-Key": apiKey,
            "X-Blocto-API-Signature": sig,
            "X-Blocto-API-Timestamp": timestamp,
        }
        let finalURL = url
        if (_method == 'GET') {
            const query = Object.keys(param).length == 0 ? '' : '?' + new URLSearchParams(param).toString()
            finalURL = url + query
        }
        let response = await fetch(finalURL, {
            method: _method,
            headers: headers,
            body: _method == 'GET' ? null : JSON.stringify(param)
        });
        const result = await response.json()
        return result
    } catch (error) {
        console.log("💥 Error:", error);
        return null
    }
}