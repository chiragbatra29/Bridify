class Api {

    static async get(route: any, params?: any) {
        return Api.xhr(route, params, "GET");
    }

    static async xhr(route?: any, params?: any, method?: any, body?: any) {
        const options: any = {
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            method: method
        };
        if (body) {
            options.body = JSON.stringify(body);
        }
        try {
            const response = await fetch(route, options);
            return response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default Api;
