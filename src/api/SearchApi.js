import instance from "./axios";

export function Search(data, headers) {
    return instance.request({
        method: "get",
        url: "/search",
        params: data,
        headers: headers
    })
}