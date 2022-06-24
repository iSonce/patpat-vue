import instance from "./axios";

export function GetPost(data) {
    return instance.request({
        method: "get",
        url: "/post",
        params: data
    })
}

export function GetPostsByRelated(data) {
    return instance.request({
        method: "get",
        url: "/post/related",
        // data examle { uid: 6, fid: 4, offset: 0, pageSize: 10, order: 0 }
        params: data
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

export function CollectPost(data) {
    return instance.request({
        method: "post",
        url: "/post/collect",
        params: data
    })
}

export function CancelCollect(data) {
    return instance.request({
        method: "delete",
        url: "/post/collect",
        params: data
    })
}

export function LikePost(data) {
    return instance.request({
        method: "post",
        url: "/post/like",
        params: data
    })
}

export function CancelLike(data) {
    return instance.request({
        method: "delete",
        url: "/post/like",
        params: data
    })
}

export function AddRead(data) {
    return instance.request({
        method: "post",
        url: "/post/read",
        params: data
    })
}