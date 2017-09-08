/*
* @Author: Administrator
* @Date:   2017-09-07 14:53:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-08 21:07:36
*/



  //filter 筛选    筛选出数组里头的偶数  
  function filter1(arr){
  	var newarr=[];
  	for(i=0;i<arr.length;i++){
  		if(arr[i]%2==0){
  			newarr[newarr.length]=arr[i]
  		}
  	}
  	return newarr;
  }


  //映射
  function map(arr,fn){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
      newarr[newarr.length]=fn(arr[i])
    }
       return newarr;
  }

  //筛选出数组里头的单数
  function filter(arr,fn){
    var newarr=[];
    for(var i=0;i<arr.length;i++){
      if(fn(arr[i])){
        newarr[newarr.length]=arr[i]
      }
    }
       return newarr;
  }
  
	
 