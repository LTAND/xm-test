// 读取 Excel 文件
import XLSX from 'xlsx';

export function readExcel(e) {
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
      files
      const data = ev.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const wsname = workbook.SheetNames[0]; //取第一张表
      const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
      console.log(ws);
      that.outputs = []; //清空接收数据
      //编辑数据
      for (var i = 0; i < ws.length; i++) {
        var sheetData = {
          address: ws[i].addr,
          value: ws[i].value
        };
        that.outputs.push(sheetData);
      }
      console.log('this.$refs.upload.value前', this.$refs.upload.value)
      this.$refs.upload.value = "";
      console.log('this.$refs.upload.value后', this.$refs.upload.value)
    } catch (e) {
      return false;
    }
  };
  fileReader.readAsBinaryString(files[0]);
}



