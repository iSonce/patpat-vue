import instance from "./axios";

export function Reply(data) {
    return instance.request({
        method: "post",
        url: "/reply",
        params: data
    })
}

export function LikeReply(data, headers) {
    return instance.request({
        method: "post",
        url: "/reply/like",
        params: data,
        headers: headers
    })
}

export function CancelLikeReply(data, headers) {
    return instance.request({
        method: "delete",
        url: "/reply/like",
        params: data,
        headers: headers
    })
}