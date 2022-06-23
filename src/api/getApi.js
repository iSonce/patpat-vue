import instance from "./axios";

export function GetGames(data) {
    return instance.request({
        method: "get",
        url: "/games",
        // data example { pageSize: 10, offset: 10 }
        params: data,
    })
}

export function GetGamesByRank(data) {
    return instance.request({
        method: "get",
        url: "game/rank",
        // data example { pageSize: 10, offset: 15 }
        params: data
    })
}

export function GetGamesByType(data){
    return instance.request({
        method: "get",
        url: "game/type",
        // data example { type: "二次元", offset: 15, pageSize: 10 }
        params: data
    })
}