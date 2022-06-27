import instance from "./axios";

export function GetPosts(data, headers) {
    return instance.request({
        method: "get",
        url: "user/post",
        params: data,
        headers: headers
    })
}

export function ConcernUser(data, headers) {
    return instance.request({
        method: "post",
        url: "user/concern",
        params: data,
        headers: headers
    })
}

export function CancelConcernUser(data, headers) {
    return instance.request({
        method: "delete",
        url: "user/concern",
        params: data,
        headers: headers
    })
}