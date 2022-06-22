import instance from "./axios";

export function GetGames(data) {
    return instance.request({
        method: "get",
        url: "/games",
        // data example { type: "多人联机", num: 10}
        params: data,
    })
}

export function GetRank(data) {
    return instance.request({
        method: "get",
        url: "game/rank",
        // data example { startNum: 15, num: 10 }
        params: data
    })
}