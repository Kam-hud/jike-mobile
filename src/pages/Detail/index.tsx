import { fetchDetailAPI, type DetailDataType } from "@/apis/detail"
import { NavBar } from "antd-mobile"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

const Detail = () => {

    const [detail, setDetail] = useState<DetailDataType | null>(null)

    // 获取路由参数
    const [params] = useSearchParams()
    const id = params.get('id')
    useEffect(() => {
        const getDetail = async () => {
            try {
                const res = await fetchDetailAPI(id!)
                setDetail(res.data.data)
            } catch (error) {
                throw new Error('error')
            }
        }
        getDetail()
    }, [])

    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    // 数据返回之前，先用loading占位
    if (!detail) {
        return <div>this is loading...</div>
    }

    // 数据返回之后，正式渲染内容
    return <div>
        <NavBar onBack={back}>{detail?.title}</NavBar>
        <div dangerouslySetInnerHTML={{
            __html: detail?.content
        }}></div>
    </div>
}

export default Detail 