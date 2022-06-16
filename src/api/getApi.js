import instance from "./axios";

export function GetRcmdList(data) {
    return instance.request({
        method: "get",
        url: "/RcmdList",
        // data example { type: "fight"}
        params: data,
    })
}

export function GetTopList(data) {
    return instance.request({
        method: "get",
        url: "/topList",
        // data example { begin: 15 }
        params: data
    })
}