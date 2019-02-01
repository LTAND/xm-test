// 1.插入新数据
import { xmRoboot_case_v1206181022 } from './xmRoboot/cases/xmRoboot_case_v1.2.06.181022'
import { xmRoboot_case_v1206190121 } from './xmRoboot/cases/xmRoboot_case_v1.2.06.190121'
import { xmRoboot_report_v1206181022 } from './xmRoboot/reports/xmRoboot_report_v1.2.06.181022'
import { xmRoboot_report_v1206190121 } from './xmRoboot/reports/xmRoboot_report_v1.2.06.190121'


const xmRoboot = {
  proName: '小萌机器人',
  proData:{
    // 2.插入新测试报告或测试用例
    cases: [
      xmRoboot_case_v1206190121,
      xmRoboot_case_v1206181022
    ],
    reports: [
      xmRoboot_report_v1206190121,
      xmRoboot_report_v1206181022
    ]
  }
}
// 3.导出项目数据对象
export const projectData = [
  xmRoboot
]
