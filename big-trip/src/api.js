import * as axios from "axios";

const AUTHORIZATION = "Basic ho963djbzer";

const instanceAxios = axios.create({
    baseURL: "https://11.ecmascript.pages.academy/big-trip/",
    headers: {
        "Authorization": AUTHORIZATION,
    },
});

export const tripAPI = {
    getPoints: () => {
        return (
            instanceAxios.get("points")
                .then((response) => {
                    return response.data;
                })
        )
    },

    getOffers: () => {
        return (
            instanceAxios.get("offers")
                .then((response) => {
                    return response.data;
                })
        )
    },

    getTypes: () => {
        return (
            instanceAxios.get("types")
                .then((response) => {
                    return response.data;
                })
        )
    },

    getDestinations: () => {
        return (
            instanceAxios.get("destinations")
                .then((response) => {
                    return response.data;
                })
        )
    },

    updatePoint: (id, data) => {
        return (
            instanceAxios.put(`points/${id}`, data)
                .then((response) => {
                    return response;
                })
        )
    },

    deletePoint: (id) => {
        return (
            instanceAxios.delete(`points/${id}`)
                .then((response) => {
                    return response;
                })
        )
    },

    addNewPoint: () => {
        return (
            instanceAxios.get("destinations")
                .then((response) => {
                    return response.data;
                })
        )
    }
};
