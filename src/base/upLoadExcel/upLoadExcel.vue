<template>
  <div class="upLoadExcel">
    <input type="file" ref="upload" accept=".xls, .xlsx" class="outputlist_upload">
  </div>
</template>

<script>
import XLSX from "xlsx";
export default {
  data() {
    return {
      outputs: []
    };
  },
  computed: {},
  mounted() {
    this.$refs.upload.addEventListener("change", e => {
      //绑定监听表格导入事件
      this.readExcel(e);
    });
  },
  methods: {
    readExcel(e) {
      //表格导入
      var that = this;
      const files = e.target.files;
      console.log("files", files);
      if (files.length <= 0) {
        //如果没有文件名
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error("上传格式不正确，请上传xls或者xlsx格式");
        return false;
      }
      // 读取表格数据
      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          files;
          const data = ev.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          const wSheets = workbook.Sheets;
          const all_sm_name = files[0].name.replace(/\.(xls|xlsx)$/, "")
          const sm_proName = files[0].name.replace(/\.(xls|xlsx)$/, "").split("_")[0];  // excel的项目英文名xmRoboot
          const sm_fileName = files[0].name.replace(/\.(xls|xlsx)$/, "").split("_")[1]; // excel的文件英文名case
          const fileData = clearNullSheets();

          that.outputs = []; //清空之前接收数据
          // console.log("xlsx文件：", workbook);
          // console.log("xlsx所有无空表的数据：", fileData);
          that.outputs = normalizeData();
          createAndDownloadFile(all_sm_name+".js",normalizeData())  // 下载json文件
          that.$refs.upload.value = ""; // 清空上传后的文件名


          // 得到无空表数据
          function clearNullSheets() {
            let fileData = [];
            Object.keys(wSheets).forEach(key => {
              let sheet_title = [];
              let sheet_data = [];
              if (wSheets[key]["!ref"]) {
                let sheet = wSheets[key];
                Object.keys(sheet).forEach(k => {
                  // 取表头A1-A2
                  let result = new RegExp("[1]").test(k);
                  if (result) {
                    sheet_title.push(sheet[k].v);
                  }
                });
                sheet_data = XLSX.utils.sheet_to_json(wSheets[key]);
                fileData.push({ sheet_name: key, sheet_data, sheet_title });
              }
            });
            return fileData;
          }

          // 指定第一张表为测试用例，格式化数据
          function normalizeData() {
            let data_rows = [];
            const proName = fileData[0].sheet_name.split("_")[0];
            const fileName = fileData[0].sheet_name.split("_")[1];
            let sheetData = fileData[0].sheet_data; // 第一张表数据
            for (let i = 0; i < sheetData.length; i++) {
              data_rows.push({
                num: sheetData[i][fileData[0].sheet_title[0]],
                step: sheetData[i][fileData[0].sheet_title[1]],
                result: sheetData[i][fileData[0].sheet_title[2]],
                people: sheetData[i][fileData[0].sheet_title[3]],
                note: sheetData[i][fileData[0].sheet_title[4]]
              });
              // console.log(data_rows)
            }
            let sheetObj = {
              proName,
              proData: [
                {
                  fileName,
                  fileType: "table",
                  data: data_rows
                }
              ]
            };
            // console.log('sheetObj',sheetObj); // 格式化的数据
            return sheetObj
          }

        // 写入创建json文件
          /**
           // http://caibaojian.com/js-download.html
          * 创建并下载文件
          * @param  {String} fileName 文件名
          * @param  {Obejct} content  文件内容
          */
          function createAndDownloadFile(fileName, content) {
            let aTag = document.createElement('a');
            let j = JSON.stringify(content)  // 将Object转化json格式
            let s = `export const ${all_sm_name} = ` + j
            let blob = new Blob([s]);
            aTag.download = fileName;
            aTag.href = URL.createObjectURL(blob);
            aTag.click();
            URL.revokeObjectURL(blob);
          }

        } catch (e) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
// .outputlist_upload
</style>
