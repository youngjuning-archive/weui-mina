/**
 * utils函数引入
 **/
 import showdown from './showdown.js';
 import HtmlToJson from './html2json.js';
 /**
  * 主函数入口
  */
 function wxParse(bindName = 'wxParseData', type='html', data='<div class="color:red;">数据不能为空</div>', target,imagePadding) {
   return new Promise((resolve, reject) =>{
     var that = target;
     var transData = {};//存放转化后的数据
     if (type == 'html') {
       transData = HtmlToJson.html2json(data, bindName);
     } else if (type == 'md' || type == 'markdown') {
       var converter = new showdown.Converter();
       var html = converter.makeHtml(data);
       transData = HtmlToJson.html2json(html, bindName);
     }
     transData.view = {};
     transData.view.imagePadding = 0;
     if(typeof(imagePadding) != 'undefined'){
       transData.view.imagePadding = imagePadding
     }
     var bindData = {};
     bindData[bindName] = transData;
     that.setData(bindData)
     resolve()
   })
 }
function wxParseTemArray(temArrayName,bindNameReg,total,that){
  var array = [];
  var temData = that.data;
  var obj = null;
  for(var i = 0; i < total; i++){
    var simArr = temData[bindNameReg+i].nodes;
    array.push(simArr);
  }

  temArrayName = temArrayName || 'wxParseTemArray';
  obj = JSON.parse('{"'+ temArrayName +'":""}');
  obj[temArrayName] = array;
  that.setData(obj);
}

module.exports = {
  wxParse: wxParse,
  wxParseTemArray:wxParseTemArray
}
