// 导入每个项目的所有数据
import { bootReport} from './xmRoboot/report'
import { bootCase } from './xmRoboot/case'

import { shopCase } from './xmShop/case'
import { shopReport } from './xmShop/report'

// 创建项目对象
const xmRoboot = {
  proName: '小萌机器人',
  proData: [
    bootCase,
    bootReport
  ]
}
const xmShop = {
  proName:'小萌商城',
  proData:[
    shopCase,
    shopReport
  ]
}

// 导出所有项目对象
export const projectData = [
  xmRoboot,
  xmShop
]
