// 导入每个项目的所有数据
import { xmRoboot_case } from './xmRoboot/xmRoboot_case'
import { xmRoboot_report } from './xmRoboot/xmRoboot_report'

const proName = xmRoboot_case['proName']
const proData = xmRoboot_case['proData'].concat(xmRoboot_report['proData'])  // 合并数组数据

// 导出所有项目对象
export const projectData = [
  {
    proName,
    proData
  }
]
