/**
 * Created by Bowa on 2014/8/28.
 */
var _result = {};
var _index = 0;
var focusobj = null;
var sharestr = "";
var _sharepath="";
var _pics = [];
var _type=0;
var _typecn=0;
var _records = [];
var _systemtimmer = null;
var _count = 0;
var _shengciben = [];
var shengcibenkey = "shengciben";
var _leixing = {
    "dxt":"11",
    "xzt":"1",
    "pdt":"2",
    "tkt":"3",
    "wxtk":"4",
    "jdt":"5"
};

var _totaltime = 60;//到了这个时间自动交卷
var _mintime = 60;//少于这个时间不能交卷
var historyhd = localStorage['historyhd'];
var listorylist = [];
if(historyhd){
    listorylist = JSON.parse(historyhd);
}

_shengciben = getListLocal(shengcibenkey);

$(function (){
    var p666666 = {};
    p666666.tpl = '<li><a href="#" onclick="">'+
        '<h2>%s</h2>'+
        '<p>%s</p>'+
        '<p>%s</p>'+
        '</a></li>';
    p666666.colums = ["ndate","note","username"];
    $("#replays2").data("property",JSON.stringify(p666666));

    var p66666 = {};
    p66666.tpl = '<li><a href="#" onclick="toTypeDetail(%s);">'+
        '<h2>%s</h2>'+
        '</a><a onclick="deleteType(%s);"></a></li>';
    p66666.colums = ["id","title","id"];
    $("#typelist").data("property",JSON.stringify(p66666));


    var p6666t = {};
    p6666t.tpl = '<li><a href="#" onclick="toBegin(%s);">'+
        '<h2>%s</h2>'+
        '</a></li>';
    p6666t.colums = ["id","title"];
    $("#typelist2").data("property",JSON.stringify(p6666t));


    var p6666 = {};
    p6666.tpl = '<li><a href="#" onclick="chooseDetail(%s);">'+
        '<h2>%s</h2>'+
        '</a><a onclick="deleteChoose(%s);"></a></li>';
    p6666.colums = ["id","title","id"];
    $("#chooselist").data("property",JSON.stringify(p6666));

});


function chooseDetail(id){
    ajaxCallback("getChoice",{id:id},function(data){
        changePage('choicedetailpage');
        $("#ctitle").text("标题:"+data.title);
        $("#xa").text(data.opa+":"+data.ac);
        $("#xb").text(data.opb+":"+data.bc);
        $("#xc").text(data.opc+":"+data.cc);
        $("#xd").text(data.opd+":"+data.dc);
    });
}

function toShengciben(){
    changePage("mainpage");
    _records = _shengciben;
    _index = 0;
    loadRecord();
    $("#atitle").text("生词本");
    $("#shengcibtn").text("删除");
    $("#shengcibtn").attr("onclick","delFromShengci();");
}

function addToShengci(){
    _shengciben = saveToLocal("shengciben",focusobj);
    showTipTimer("已添加到收藏!",function(){

    });
}

function delFromShengci(){
    _shengciben = removeFromLocal("shengciben",focusobj.id);
    showLoader("已从生词本移除!",true);
}

function toSearchUser(){
    changePage('userpagepage');
    $("#minfo").hide();
}

function getUserByPasswd(){
    $("#minfo").hide();
    ajaxCallback("getUserByPasswd",{passwd:$("#bianhao").val()},function(data){
        if(data.info!="fail"){
            focususer = data;
            userinfo = data;
            $("#photo").attr("src",fileurl+data.img);
            $("#xingming").text("姓名:"+data.username);
            $("#xingbie").text("性别:"+data.sex);
            $("#xueli").text("学历:"+data.xueli);
            $("#jingyan").text("经验:"+data.jingyan);
            $("#zhiwei").text("投票问卷职位:"+data.zhiwei);
            $("#tel").text("电话:"+data.tel);
            $("#minfo").show();
        }else{
            showLoader("未查询到信息!",true);
        }
    });
}


function toType(){
    changePage('chapterpage');
    ajaxCallback("listType",{},function(data){
        $("#typelist2").refreshShowListView(data);
    });
    ajaxCallback("listType2",{},function(data){
        $("#type2").refreshShowSelectMenu(data);
    });
}

$(function () {
    var thistory = {};
    thistory.tpl = '<li><a href="#" onclick="showHistory(\'%s\',\'%s\');">'+
    '<h2>%s</h2>'+
    '</a></li>';
    thistory.colums = ["fileName","filePath","fileName"];
    $("#historys").data("property",JSON.stringify(thistory));

    //$("#mainpage").on("swiperight",function(){
    //    $("#chapterpanel").panel("open");
    //});

    /*ajaxCallback("listType",{},function(data){
       $("#type").refreshShowSelectMenu(data);
    });*/
});
function toOpenChapters(){
    $("#popupMenu").popup("close");
    $("#chapterpanel").panel("open");
}
var _focustype = 1;
var _typeobj = null;


var _yitoup = "_yitoup";
var yiotustr = localStorage[_yitoup];
var yitoulist = [];
if(yiotustr){
    yitoulist = JSON.parse(yiotustr);
}
function toBegin(id){

    for(var i=0;i<yitoulist.length;i++){
        if(yitoulist[i].id==id && yitoulist[i].uid==userinfo.id){
            showTipTimer("你已经投票问卷过了!",function (){

            });

            return;
        }
    }

    var obj = {};
    obj.uid = userinfo.id;
    obj.id = id;
    yitoulist.push(obj);
    localStorage[_yitoup] = JSON.stringify(yitoulist);


    var typeid = id || $("#type").val();
    ajaxCallback("getType",{id:typeid},function(data){
        _typeobj = data;
        if(data.endtime){
            var lastdate = new Date(Date.parse(data.endtime));
            if(lastdate.getTime()<Date.now()){
                showLoader("投票问卷已过期!",true);
                return;
            }
        }

        toMain(_typeobj.id,_typeobj.title,2);
    });

}
function toMain(typeid,typetitle,focustype) {
    /*if(checkIsHuida()){
        showLoader("此问卷你已经回答过了!",true);
        return;
    }*/
    _index = 0;
    //_focustype = $("#type2").val();
    _type = typeid;
    _typecn = typetitle;

    //$("#showname").text(userinfo.an);
    //if (_index != 0) {
    //    var r = localStorage["_result"];
    //    if (r) {
    //        _result = JSON.parse(r);
    //    }
    //}
    ajaxCallback("getChoose",{type:_type},function(data){
        if(!data){
            showLoader("没有投票问卷!",true);
            return;
        }
        changePage("mainpage");
        for(var i=0;i<data.length;i++){
            data[i].index = i+1;
        }
        _records = data;
        loadRecord();
        _count = 0;
        $("#showname").html(focususer.username);
        /*_systemtimmer = setInterval(function(){
            _count++;
            $("#showname").html(focususer.username+': '+'<span style="color: red;">'+toTimestr(_count)+'</span>');
            if(_count>_totaltime){
                commit();
            }
        },1000);*/
    });




}

function checkIsHuida(){
    var type1 = $("#type").val();
    var type2 = $("#type2").val();
    for(var i=0;i<listorylist.length;i++){
        var obj = listorylist[i];
        if(obj.type1==type1 && obj.type2==type2 && obj.username==userinfo.username){
            return true;
        }
    }
    var hobj = {};
    hobj.type1 = type1;
    hobj.type2 = type2;
    hobj.username = userinfo.username;
    listorylist.push(hobj);
    localStorage['historyhd'] = JSON.stringify(listorylist);
    return false;
}

function showHistory(fileName,filePath){
    _sharepath = filePath;
    changePage("resultpage");
    readFile(filePath);
}

function readFile(filePath){
    var str = myObj.readFile && myObj.readFile(filePath);
    showResultContent(str);
}

function showResultContent(str){
    $("#resultdiv").html(str);
}

function toChapter(index){
    _index=index;
    loadRecord();
    $("#chapterpanel").panel("close");
}

function toHistory(){
    changePage("historypage");
    loadHistory();
}
function loadHistory(){
    var str = myObj.getFileList && myObj.getFileList();
    if(str){
        var list = JSON.parse(str);
        $("#historys").refreshShowListView(list);
    }
}

function getPic(){
    getFilePicBack(1,function(uri){
        uri = uri.substr(7);
        _pics.push(uri);
        showLoader("pic saved!",true);
    });
}

function loadRecord() {
    $(".timuctn").hide();
    var cobj = _records[_index];
    focusobj = cobj;
    focusobj.isright = false;
    //focusobj.choose = focusobj.choose || "0";


    $("#title").text(focusobj.index + "." + (focusobj.title||""));
    //$("#note").text(focusobj.note);
    //$("input[name='radio_name'][value='要选中Radio的Value值']").attr("checked",true);

    if(focusobj.leixing==_leixing.xzt){
        $("#xztctn").show();
        $("#atitle").text(focusobj.typecn);
        $("#opa").text("A."+focusobj.opa);
        $("#opb").text("B."+focusobj.opb);
        if(focusobj.opc){
            $("#opc").text("C."+focusobj.opc);
            $("#xztanswer3").show();
            $("#opc").show();
        }else{
            $("#xztanswer3").hide();
            $("#opc").hide();
        }

        if(focusobj.opd){
            $("#opd").text("D."+focusobj.opd);
            $("#xztanswer4").show();
            $("#opd").show();
        }else{
            $("#xztanswer4").hide();
            $("#opd").hide();
        }

        if(focusobj.ope){
            $("#ope").text("E."+focusobj.ope);
            $("#xztanswer5").show();
            $("#ope").show();
        }else{
            $("#xztanswer5").hide();
            $("#ope").hide();
        }

        if(focusobj.opf){
            $("#opf").text("F."+focusobj.opf);
            $("#xztanswer6").show();
            $("#opf").show();
        }else{
            $("#xztanswer6").hide();
            $("#opf").hide();
        }

        if(focusobj.opg){
            $("#opg").text("G."+focusobj.opg);
            $("#xztanswer7").show();
            $("#opg").show();
        }else{
            $("#xztanswer7").hide();
            $("#opg").hide();
        }


    }else if(focusobj.leixing==_leixing.dxt){
        $("#dxctn").show();
        $("#atitle").text(focusobj.typecn);
        $("#opa1").text("A."+focusobj.opa);
        $("#opb1").text("B."+focusobj.opb);

        if(focusobj.opc){
            $("#opc1").text("C."+focusobj.opc);
            $("#dxtanswer3").show();
            $("#opc1").show();
        }else{
            $("#dxtanswer3").hide();
            $("#opc1").hide();
        }

        if(focusobj.opd){
            $("#opd1").text("D."+focusobj.opd);
            $("#dxtanswer4").show();
            $("#opd1").show();
        }else{
            $("#dxtanswer4").hide();
            $("#opd").hide();
        }

        if(focusobj.ope){
            $("#ope1").text("E."+focusobj.ope);
            $("#dxtanswer5").show();
            $("#ope1").show();
        }else{
            $("#dxtanswer5").hide();
            $("#ope1").hide();
        }

        if(focusobj.opf){
            $("#opf1").text("F."+focusobj.opf);
            $("#dxtanswer6").show();
            $("#opf1").show();
        }else{
            $("#dxtanswer6").hide();
            $("#opf").hide();
        }

        if(focusobj.opg){
            $("#opg1").text("G."+focusobj.opg);
            $("#dxtanswer7").show();
            $("#opg1").show();
        }else{
            $("#dxtanswer7").hide();
            $("#opg1").hide();
        }
    }else if(focusobj.leixing==_leixing.pdt){
        $("#pdtctn").show();
        $("#tupianti").attr("src",fileurl+focusobj.img);
    }else if(focusobj.leixing==_leixing.tkt){
        $("#tktctn").show();
    }else if(focusobj.leixing==_leixing.wxtk){
        $("#wxtkctn").show();
        $("#opa2").text("A:"+focusobj.opa);
        $("#opb2").text("B:"+focusobj.opb);
        $("#opc2").text("C:"+focusobj.opc);
        $("#opd2").text("D:"+focusobj.opd);
    }else if(focusobj.leixing==_leixing.jdt){
        $("#jdtctn").show();
    }

    if(_focustype==1){
        $("#daanctn").show();
        $("#daanctn").text("答案:"+focusobj.daan);
    }else{
        $("#daanctn").hide();
    }

    //localStorage["_result"] = JSON.stringify(_result);
    //localStorage["iscontinue"] = _index + "";
    if(focusobj.img){
        $("#tmpic").attr("src",fileurl+focusobj.img).show();
    }else{
        $("#tmpic").hide();
    }
}
var fenshu=0;
function commit() {
    /*if(_count<_mintime){
        showLoader("未到"+parseInt(_totaltime/60)+"分钟不能交卷!",true);
        return;
    }*/
    changePage("resultpage");

    var template = "<table border='1' cellspacing='0'>"+
        "<tr>"+
        "<td>姓名: </td>"+
        "<td>"+focususer.username+"</td>"+
        "</tr>"+
        "</table>";
    var timuhtml = "<table border='1' cellspacing='0'><tr><td>编号</td><td>题目标题</td><td></td></tr>";
    fenshu = 0;
    for (var o in _result) {
        var obj = _result[o];
        /*var fenxi = "dp"+obj.choose;
        var op = "op"+obj.choose;*/
        var daan = "";

        if(obj.isright){
            daan = "答对!";
            fenshu+=5;
        }else{
            daan = "答错!";
        }
        var html= "<tr><td>"+obj.index+"</td><td>"+obj.title+"</td><td>"+daan+"</td></tr></tr>";
        timuhtml += html;
    }
    timuhtml+="</table>";
    var showhtml = template+timuhtml;

    showhtml+='<p style="color: red;font-size: 20px;text-align: center;">得分:'+fenshu+'</p>';
    $("#resultdiv").html(showhtml);
    var today = new Date();
    var year = today.getFullYear();
    var month = (today.getMonth() + 1) < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1);
    var day = (today.getDate()) < 10 ? '0' + (today.getDate()) : (today.getDate());
    var hours = (today.getHours()) < 10 ? '0' + (today.getHours()) : (today.getHours());
    var minutes = (today.getMinutes()) < 10 ? '0' + (today.getMinutes()) : (today.getMinutes());
    var seconds = (today.getSeconds()) < 10 ? '0' + (today.getSeconds()) : (today.getSeconds());
    var date1 = year + month + day + hours + minutes + seconds+"";
    var writeName = userinfo.username+date1+".xls";
    _sharepath = myObj.writeToSD && myObj.writeToSD(writeName,showhtml);

    /*$("#r1").text("CRI = 0: " + r1.length);
    $("#r2").text("CRI < 50: " + r2.length);
    $("#r3").text("CRI >= 50: " + r3.length);
    var p = r1.length / _records.length;
    p = p * 100;
    p = p.toFixed(2);
    $("#r4").text("Process indicator (PI) : " + p + "%");*/
    //$("#ruser").text("UserName:" + userinfo.username);
    _index = 0;
    //localStorage["iscontinue"] = "";
    //localStorage["_result"] = "";
    clearInterval(_systemtimmer);
    _count=0;
}

function shareTo() {
    //var str = userinfo.username + ":\n1." + $("#r1").text() + "\n2." + $("#r2").text() + "\n3." + $("#r3").text() + "\n4." + $("#r4").text();
    //var title = userinfo.username;
    //toShare(title, str);
    //alert(_sharepath);
    var obj = {};
    obj.xls = _sharepath;
    obj.pics = _pics;
    myObj.sendAll(JSON.stringify(obj));
    _pics=[];
    _sharepath="";
}

function next() {

    /*var choose = $('input[name="answer"]:checked').val();
    //focusobj.score = score * 1 * focusobj.weight;
    focusobj.choose = choose;*/
    if(focusobj.leixing==_leixing.jdt){
        var note = $("#jdtanswer").val();
        if(!note){
            showLoader("请填写回答",true);
            return;
        }
    }
    if(focusobj.leixing==_leixing.dxt){
        var length = $('#rgroup12 input[name="answer"]:checked ').length;
        if(length>_typeobj.piaoshu){
            showLoader("每人只有"+_typeobj.piaoshu+"票",true);
            return;
        }
    }
    checkIsRight();
    _result[_index] = focusobj;
    _index++;
    if (_index == _records.length - 1) {
        if(_focustype=="2"){
            $("#next").text("提交");
        }else{
            $("#next").text("结束");
        }


    } else if (_index > _records.length - 1) {
        if(_focustype=="2"){
            commit();
        }else{
            showTipTimer("题目结束",function (){
                toType();
            });
        }


        return;
    }
    loadRecord();

}
function pre() {
    /*var choose = $("input[name='answer'][checked]").val();
    focusobj.choose = choose;*/
    checkIsRight();
    _result[_index] = focusobj;
    _index--;
    if (_index < 0) {
        _index = 0;
    }
    loadRecord();
}

function toLiuyan(){
    changePage('liuyanpage');
    listReplay();
}

function addReplay(){
    var note = $("#rnote2").val();
    ajaxCallback("addReplay",{pid:10000,uid:userinfo.id,username:userinfo.username,note:note},function(data){
        listReplay();
        $("#rnote2").val("");
    });
}

function listReplay(){
    ajaxCallback("listReplay",{pid:10000},function(data){
        $("#replays2").refreshShowListView(data);
    });
}

/*
function checkIsRight(){
    if(focusobj.leixing==_leixing.xzt){
        var choose = $("input[name='answer'][checked]").val();
        if(focusobj.daan==choose){
            focusobj.isright = true;
        }
    }else if(focusobj.leixing==_leixing.pdt){
        var choose = $("input[name='pdtanswer'][checked]").val();
        if(focusobj.daan==choose){
            focusobj.isright = true;
        }
    }else if(focusobj.leixing==_leixing.tkt){
        var choose = $("#tktanswer").val();
        if(focusobj.daan==choose){
            focusobj.isright = true;
        }
    }else if(focusobj.leixing==_leixing.wxtk){
        var choose1 = $("#wxtkanswer1").val();
        var choose2 = $("#wxtkanswer2").val();
        if(focusobj.daana==choose1 && focusobj.daanb==choose2){
            focusobj.isright = true;
        }
    }else if(focusobj.leixing==_leixing.jdt){
        var choose = $("#jdtanswer").val();
        if(focusobj.daan == choose){
            focusobj.isright = true;
        }
    }
}
*/

var _typelist = [];
function toMyToupiao(){
    changePage('typepage');
    ajaxCallback("listType",{uid:userinfo.id},function(data){
        _typelist = data;
        $("#typelist").refreshShowListView(data);
    });
}
var _focustype = null;
function toTypeDetail(id){
    var obj = getObjectById(id,_typelist);
    _focustype = obj;
    changePage("typedetailpage");
    $("#typetitle").text("投票问卷主题:"+obj.title);
}

function deleteType(id){
    ajaxCallback("deleteType",{id:id},function(data){
        toMyToupiao();
    });
}

function toAddToupiao(){
    changePage('addtypepage');
}

function saveType(){
    var fdata = serializeObject($("#typeform"));
    fdata.uid = userinfo.id;
    fdata.endtime = fdata.endtime1+" "+fdata.endtime2;
    ajaxCallback("saveType",fdata,function(data){
        toMyToupiao();
    });
}


function checkIsRight(){
    //var choose = $("input[name='answer'][checked]").val();
    if(focusobj.leixing==_leixing.xzt){
        var choose = $('input[name="answer"]:checked ').val();
        //alert(choose);
        updateTimuCount(choose);
        uploadTimuRecord();
    }else if(focusobj.leixing==_leixing.dxt){

        if($("#dxtanswer1").is(":checked")){
            updateTimuCount("a");
        }
        if($("#dxtanswer2").is(":checked")){
            updateTimuCount("b");
        }
        if($("#dxtanswer3").is(":checked")){
            updateTimuCount("c");
        }
        if($("#dxtanswer4").is(":checked")){
            updateTimuCount("d");
        }
        if($("#dxtanswer5").is(":checked")){
            updateTimuCount("e");
        }
        if($("#dxtanswer6").is(":checked")){
            updateTimuCount("f");
        }
        if($("#dxtanswer7").is(":checked")){
            updateTimuCount("g");
        }
        uploadTimuRecord();

    }else{
        var note = $("#jdtanswer").val();
        ajaxCallback("addReplay",{uid:userinfo.id,username:userinfo.username,pid:focusobj.id,note:note},function(data){
            $("#jdtanswer").val("");
        });
    }

    /*if(focusobj.daan==choose){
     focusobj.isright = true;
     }*/
}


function updateTimuCount(op){
    var count = 0;
    var choose = focusobj.choose||"";
    if(op=="a"){
        count = focusobj.ac || 0;
        count++;
        focusobj.ac = count;
        choose+=" A."+focusobj.opa;
    }else if(op=="b"){
        count = focusobj.bc || 0;
        count++;
        focusobj.bc = count;
        choose+=" B."+focusobj.opb;
    }
    else if(op=="c"){
        count = focusobj.cc || 0;
        count++;
        focusobj.cc = count;
        choose+=" C."+focusobj.opc;
    }
    else if(op=="d"){
        count = focusobj.dc || 0;
        count++;
        focusobj.dc = count;
        choose+=" D."+focusobj.opd;
    }else if(op=="e"){
        count = focusobj.ec || 0;
        count++;
        focusobj.ec = count;
        choose+=" E."+focusobj.ope;
    }
    else if(op=="f"){
        count = focusobj.fc || 0;
        count++;
        focusobj.fc = count;
        choose+=" F."+focusobj.opf;
    }
    else if(op=="g"){
        count = focusobj.gc || 0;
        count++;
        focusobj.gc = count;
        choose+=" G."+focusobj.opg;
    }
    focusobj.choose = choose;

}


function uploadTimuRecord(){
    focusobj.uid = userinfo.id;
    focusobj.username = userinfo.username;

    ajaxCallback("updateTimu",focusobj,function(data){
        var o = data;
        var bfa = ((o.ac/(o.ac*1.00+ o.bc*1.00+ o.cc*1.00+ o.dc*1.00)).toFixed(2))*100+"%";
        var bfb = ((o.bc/(o.ac*1.00+ o.bc*1.00+ o.cc*1.00+ o.dc*1.00)).toFixed(2))*100+"%";
        var bfc = ((o.cc/(o.ac*1.00+ o.bc*1.00+ o.cc*1.00+ o.dc*1.00)).toFixed(2))*100+"%";
        var bfd = ((o.dc/(o.ac*1.00+ o.bc*1.00+ o.cc*1.00+ o.dc*1.00)).toFixed(2))*100+"%";
        if(_typeobj.code=="选举"){
            var renshu = _typeobj.renshu;
            var piaoshu = _typeobj.piaoshu;

        }
        //showLoader(null,true,null,null,"<p>A:"+ o.ac+"票 "+bfa+" </p>"+"<p>B:"+ o.bc+"票 "+bfb+" </p>"+"<p>C:"+ o.cc+"票 "+bfc+" </p>"+"<p>D:"+ o.dc+"票 "+bfd+" </p>");
    });
}

function tijiao(){
    var total = parseInt($("#wenda").val())+parseInt(fenshu);
    var note = $("#note2").val();
    ajaxCallback("updateMianshiUser",{id:focususer.id,score:10,note:note},function(data){
        showTipTimer("提交成功!",function (){
            toType();
        });

    });
}


function toChooseMg(){
    changePage('choosepage');
    ajaxCallback("listChoose",{type:_focustype.id},function(data){
        $("#chooselist").refreshShowListView(data);
    });
}

function deleteChoose(id){
    ajaxCallback("deleteChoice",{id:id},function(data){
        toChooseMg();
    });
}

function toAddChoose(){
    changePage('addchoosepage');
}


function saveChoice(){
    var fdata = serializeObject($("#choiceform"));
    fdata.type = _focustype.id;
    fdata.typecn = _focustype.title;
    fdata.leixing = 1;
    ajaxCallback("saveChoice",fdata,function(data){
        toChooseMg();
    });
}