import instance from "./axios";

export function GetPosts(data) {
    return instance.request({
        method: "get",
        url: "user/post",
        params: data
    })
}