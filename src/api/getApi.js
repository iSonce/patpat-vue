import instance from "./axios";

export function GetGames(data) {
    return instance.request({
        method: "get",
        url: "/games",
        // data example { pageSize: 10, offset: 10}
        params: data,
    })
}

export function GetRank(data) {
    return instance.request({
        method: "get",
        url: "game/rank",
        // data example { offset: 15, pageSize: 10 }
        params: data
    })
}