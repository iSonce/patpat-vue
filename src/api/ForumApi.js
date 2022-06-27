import instance from "./axios";

export function GetForumPosts(data, headers) {
    return instance.request({
        method: "get",
        url: "forum/post",
        params: data,
        headers: headers
    })
}

export function GetForum(data, fid) {
    return instance.request({
        method: "get",
        url: "/forum/" + fid,
        params: data
    })
}