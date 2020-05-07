const BASE_URL = "localhost:8080";

const METHOD = {
    PUT() {
        return {
            method: "PUT"
        };
    },
    DELETE() {
        return {
            method: "DELETE"
        };
    },
    POST(data) {
        return {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })
        };
    }
};

const api = (() => {
    const request = (uri, config) => fetch(uri, config).then(data => data.json());

    const station = {
        get() {
            return request(`/stations`);
        },
        create(data) {
            return request(`/stations`, METHOD.POST(data));
        },
        update(data) {
            return request(`/stations/${id}`, METHOD.PUT(data));
        },
        delete(id) {
            return request(`/stations/${id}`, METHOD.DELETE());
        }
    };

    const line = {
        get() {
            return request(`/lines/${id}`);
        },
        create(data) {
            return request(`/lines`, METHOD.POST(data));
        },
        update(date) {
            return request(`/lines/${id}`, METHOD.PUT(date));
        },
        delete(id) {
            return request(`/lines/${id}`, METHOD.DELETE());
        }
    };

    const lines = {
        get() {
            return request(`/lines`);
        },
    };

    return {
        station,
        line,
        lines
    };
})();

export default api;
