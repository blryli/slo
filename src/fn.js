import $ from 'jquery'
//配置接口根目录,编译上线时改成空字符串就ok
const apiRoot = '/static/data';
//const apiRoot = '';
const fn = {
		//发送一个ajax POST 请求
		post:function(url,data,success,error,async){
			if(!url){
				console.error('post error:url empty');
				return false;
			}
			url = apiRoot ? apiRoot+url+'.json' : url;
			$.ajax({
				url : url,
				async : typeof async==='boolean'?async:true,
				type : apiRoot ? 'GET' : 'POST',//请求文件只能用get方式
				data : typeof data!=='undefined'&&this.isJson(data) ? data : {},
				dataType : 'json',
				success : (result,status,xhr) => {
					result ? typeof success==='function'&&success(result) : console.error('Returns the data is null. url:' + url);
				},
				error : (xhr,status,errMsg) =>{
					typeof error==='function' ? error(xhr,status,errMsg) : console.error('URL request error: ' + status + 'url:' + url);
				}
			});
		},
		//返回是否为json
		isJson:function(obj) {
		    return typeof obj == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
		},
		//更新json
		updateJson:function(json1,json2){
			var json = {};
			if(this.isJson(json1)){
				if(this.isJson(json2)){
					for(var k1 in json1){
						json[k1] = json2.hasOwnProperty(k1) ? json2[k1] : json1[k1];
					}
				}else{
					json = json1;
				}
			}
			return json;
		},
		//返回是否为空json
		isEmptyJson:function(json){
			var k;
		    for(k in json){
		    	return false;
		    };
		    return true;
		},
		//判断是否存在数组中
		inArray:function(val,arr){
			 if(arr.indexOf && typeof arr.indexOf=='function'){
				 if(arr.indexOf(val) >= 0){
					 return true;
				 }
			 }else{
				 for(var i = 0; i < arr.length; i++){
					 if(val === arr[i]){
				            return true;
				        }
				    }
			 }
			 return false;
		},
		//往数值数组里插入值并排序
		pushArrSort:function(arr,val,by){
			!this.inArray(val,arr) && arr.push(val);
			typeof by!='function' && (by = function(a,b){return a-b});
			arr.sort(by);
			return arr;
		}
}
export default fn
