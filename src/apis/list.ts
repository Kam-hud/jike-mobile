import { http } from "@/utils";
import type { ResType } from "./shared";

// 2.定义具体接口类型
export type ChannelItem = {
    id: number,
    name: string
}

type ChannelRes = {
    channels: ChannelItem[]
}

// 请求频道列表
export function fetchChannelAPI() {
    return http.request<ResType<ChannelRes>>({
        url: '/v1_0/channels'
    })
}

// 文章列表
type ListItem = {
    art_id: string
    title: string
    aut_id: string
    comm_count: number
    pubdate: string
    aut_name: string
    is_top: number
    cover: {
        type: number
        images: string[]
    }
}

export type ListRes = {
    results: ListItem[]
    pre_timestamp: string
}

type ListParams = {
    channel_id: string
    timestamp: string
}

// 文章列表
export function fetchListAPI(params: ListParams) {
    return http.request<ResType<ListRes>>({
        url: '/v1_0/articles',
        params
    })
}
