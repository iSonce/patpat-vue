import instance from "./axios";

export function GetPosts(data) {
    return instance.request({
        method: "get",
        url: "/forum/post",
        params: data
    })
}

export function GetForum(data, fid) {
    return instance.request({
        method: "get",
        url: "/forum/" + fid,
        params: data
    })
}