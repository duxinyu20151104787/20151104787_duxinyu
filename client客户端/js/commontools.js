/**
 * Created by ideabobo on 14-6-28.
 * commontools
 */
serializeObject = function(form) {
    var o = {};
    $.each(form.serializeArray(), function(index) {
        if (o[this['name']]) {
            o[this['name']] = o[this['name']] + "," + this['value'];
        } else {
            o[this['name']] = this['value'];
        }
    });
    return o;
};

function ajaxCallback(action, data, cb) {
    if(!clientUrl){
        alert("请先设置服务端根路径");
        return;
    }
    showLoader("请稍后...");
    data = data || {};
    var retrytimes = 5;
    var count = 0;
    var connectServer = function(){
        showLoader("请稍后...");
        $.ajax({
            type: "GET",
            url: clientUrl + action,
            dataType: "jsonp",
            jsonp: "callback",
            contentType: "text/html; charset=utf-8",
            data: data,
            timeout:50000,
            async:true,
            success: function (data) {
                hideLoader();
                cb(data);
                console.log("success");
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                hideLoader();
                console.log("error:"+XMLHttpRequest+" textStatus:"+textStatus+" errorThrown"+errorThrown);
            },
            complete:function(XMLHttpRequest, textStatus){
                console.log("complete:"+XMLHttpRequest+"textStatus:"+textStatus);
                if(textStatus == "timeout"){
                    if(count<retrytimes){
                        count++;
                        connectServer();
                        console.log(count);
                    }else{
                        showLoader("连接服务器超时！",true);
                    }

                }
            }
        });
    };
    connectServer();
}
/**
 * 判断是否所有的属性都有值
 * @param obj
 * @returns {boolean}
 */
function checkObjectValue(obj) {
    for(var p in obj){
        if(obj[p]!=undefined && obj[p]!=null){
            if($.trim(obj[p]) == ""){
                return true;
            }
        }
    }
    return false;
}

function getObjectById(id,goodlist){
    for(var i=0;i<goodlist.length;i++){
        var good = goodlist[i];
        if(good.id == id){
            return good;
        }
    }
    return null;
}

function toTimestr(m){

    var d=parseInt(m/86400);
    var h=parseInt((m%86400)/3600);
    var s=parseInt((m%3600)/60);
    var m=m%60;

    //document.write(s+"分钟 "+m+"秒");
    return s+"分钟 "+m+"秒";
}


function saveToLocal(key,data){
    var liststr = localStorage[key];
    var list = [];
    if(liststr){
        list = JSON.parse(liststr);
    }
    for(var i=0;i<list.length;i++){
        var obj = list[i];
        if(obj.id==data.id){
            return list;
        }
    }
    list.push(data);
    localStorage[key] = JSON.stringify(list);
    return list;
}

function removeFromLocal(key,id){
    var liststr = localStorage[key];
    var list = [];
    if(liststr){
        list = JSON.parse(liststr);
    }
    var newlist = [];
    for(var i=0;i<list.length;i++){
        var obj = list[i];
        if(obj.id==id){
            continue;
        }else{
            newlist.push(obj);
        }
    }
    localStorage[key] = JSON.stringify(newlist);
    return newlist;
}

function getListLocal(key){
    var liststr = localStorage[key];
    var list = [];
    if(liststr){
        list = JSON.parse(liststr);
    }
    return list;
}