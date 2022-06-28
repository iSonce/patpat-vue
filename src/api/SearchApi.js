import instance from "./axios";

export function GetPostsBySearch(data, headers){
    return instance.request({
        method: "get",
        url: "/user/post",
        params: data,
        headers: headers
    })
}