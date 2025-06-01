import ReactDOM from 'react-dom/client'
// 导入provider
import { RouterProvider } from 'react-router-dom'
// 导入router 实例
import { router } from './router/index.tsx'

import { fetchChannelAPI } from './apis/list.ts'

fetchChannelAPI().then(res => {
    console.log(res.data.data.channels);
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}>
    </RouterProvider>

)
