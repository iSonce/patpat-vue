import instance from "./axios";

export function GetPost(data) {
    return instance.request({
        method: "get",
        url: "/post",
        params: data
    })
}

export function GetPostsByRelated(data, headers) {
    return instance.request({
        method: "get",
        url: "/post/related",
        // data examle { uid: 6, fid: 4, offset: 0, pageSize: 10, order: 0 }
        params: data,
        headers: headers
    })
}

export function GetPostReply(data) {
    return instance.request({
        method: "get",
        url: "/post/reply",
        params: data
    })
}

export function PublishPost(data) {
    return instance.request({
        method: "post",
        url: "/post",
        params: data
    })
}

export function CollectPost(data, headers) {
    return instance.request({
        method: "post",
        url: "/post/collect",
        params: data,
        headers: headers
    })
}

export function CancelCollectPost(data, headers) {
    return instance.request({
        method: "delete",
        url: "/post/collect",
        params: data,
        headers: headers
    })
}

export function LikePost(data, headers) {
    return instance.request({
        method: "post",
        url: "/post/like",
        params: data,
        headers: headers
    })
}

export function CancelLikePost(data, headers) {
    return instance.request({
        method: "delete",
        url: "/post/like",
        params: data,
        headers: headers
    })
}

export function AddRead(data, headers) {
    return instance.request({
        method: "post",
        url: "/post/read",
        params: data,
        headers: headers
    })
}