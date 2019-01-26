function exitApp(){
    navigator.app.exitApp();
}
/****************文件上传****************/
//cordovaFlag是否有phonegap环境，从而决定是否调用本地方法
var cordovaFlag = false;
var uploadFileUrl = null;
document.addEventListener("deviceready", onDeviceReady, false);
var pictureSource; //  getPicture:数据来源参数的一个常量
var destinationType; // getPicture中：设置getPicture的结果类型
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
    cordovaFlag = true;
}


function getFilePic(source, element) {
    navigator.camera.getPicture(function (imageURI) {
        console.log("imageURI:"+imageURI);
        uploadFileUrl = imageURI;
        if(element){
            $("#" + element).attr("src", imageURI);
        }else{
            $("#path") && $("#path").text(imageURI);
            $("#path2") && $("#path2").text(imageURI);
        }

    }, function () {
        if (source == pictureSource.CAMERA)
            console.log('加载照相机出错!');
        else
            console.log('加载相册出错!');
    }, {
        quality: 100,
        destinationType: destinationType.FILE_URI,
        sourceType: source,
        //allowEdit : true,
        //encodingType: Camera.EncodingType.JPEG,
        //targetWidth: 100,
        //targetHeight: 100,
       // popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true

    });
}

function getFilePicBack(source, callback) {
    navigator.camera.getPicture(function (imageURI) {
        console.log("imageURI:"+imageURI);
        callback && callback(imageURI);

    }, function () {
        if (source == pictureSource.CAMERA)
            console.log('加载照相机出错!');
        else
            console.log('加载相册出错!');
    }, {
        quality: 100,
        destinationType: destinationType.FILE_URI,
        sourceType: source,
        //allowEdit : true,
        //encodingType: Camera.EncodingType.JPEG,
        //targetWidth: 100,
        //targetHeight: 100,
        // popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true

    });
}

function getFileAttach(callback) {
    navigator.camera.getPicture(function (imageURI) {
        callback && callback(imageURI);
    }, function () {

    }, {
        quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: 0
    });
}

function captureSound(){
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
}

// capture callback
var captureSuccess = function(mediaFiles) {
    changePage("lushuaddpage","none");
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        uploadFileUrl = path;
        $("#soundbar").attr("src",path);
        // do something interesting with the file
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start audio capture


/**
 * 上传意外终止处理。
 * @param message
 */
function uploadBroken(message) {
    alert(message);
};

/**
 * 上传过程回调，用于处理上传进度，如显示进度条等。
 */
function uploadProcessing(progressEvent) {

    if (progressEvent.lengthComputable) {
        //已经上传
        var loaded = progressEvent.loaded;
        //文件总长度
        var total = progressEvent.total;
        //计算百分比，用于显示进度条
        var percent = parseInt((loaded / total) * 100);
        showLoader("正在上传文件:" + percent + "%");
        //换算成MB
        //loaded=(loaded/1024/1024).toFixed(2);
        //total=(total/1024/1024).toFixed(2);
    }
};

/**
 * 选择文件后回调上传。
 */
function uploadFile(fileURI, url, success, fail) {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "multipart/form-data";
    options.chunkedMode = false;
    ft = new FileTransfer();
    var uploadUrl = encodeURI(url);
    console.log(fileURI);
    ft.upload(fileURI, uploadUrl, success, fail, options);
    //获取上传进度
    ft.onprogress = uploadProcessing;
}


function localFile(fileUrl,filename) {
    fileUrl = fileUrl || downloadUrl+"?attach="+focusobj.attach;
    filename = filename || focusobj.attach;
    window.requestFileSystem(LocalFileSystem.PERSISTENT,  5*1024*1024, function(fileSystem){
        //创建目录
        fileSystem.root.getDirectory("file_mobile", {create:true},
            function(fileEntry){ },
            function(){  console.log("创建目录失败");});

        var _localFile = "file_mobile/"+filename;
        var _url = fileUrl;
        //查找文件
        fileSystem.root.getFile(_localFile, null, function(fileEntry){
            //文件存在就直接显示
            showLoader("文件已经下载过了!",true);
        }, function(){
            //否则就到网络下载图片!
            fileSystem.root.getFile(_localFile, {create:true}, function(fileEntry){
                var targetURL = fileEntry.toURL();
                download(_url,targetURL);
            },function(){
                alert('下载图片出错');
            });
        });

    }, function(evt){
        console.log("加载文件系统出现错误");
    });
}


function download(fileUrl,targetUrl){
    showLoader("正在下载请稍候!");
    var fileTransfer = new FileTransfer();
    var uri = encodeURI(fileUrl);

    fileTransfer.download(uri,targetUrl,
        function(entry) {
            showLoader("下载成功,文件已保存到file_mobile文件夹下",true);
            console.log("download complete: " + entry.fullPath);
        },
        function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("upload error code" + error.code);
        },
        false
    );
}

/**
 * 上传成功回调.
 * @param r
 */
function uploadSuccess(r) {
    alert('文件上传成功:' + r.response);
}

/**
 * 上传失败回调.
 * @param error
 */
function uploadFailed(error) {
    alert('上传失败了。');
}

/****************文件上传结束****************/
function openJisuanqi(){
    cordova.exec(function(data){

    }, null, "Plugs", "jisuanqi", []);
}


function toBaidu(city,address){
    cordova.exec(function(){},function(){},"Plugs","tobaidu",[{city: city,str:address}]);
}

function toShare(subject,text){
    cordova.exec(function(){},function(){},"Plugs","share",[{subject: subject,text:text}]);
}

function toDail(el){
    var tel = $(el).text();
    tel = tel.split(":")[1];
    cordova.exec(function(){},function(){},"Plugs","toDail",[{tel:tel}]);
}

function toAddress(el){
    var address = $(el).text();
    address = address.split(":")[1];
    cordova.exec(function(){},function(){},"Plugs","toAddress",[{address:address}]);
}

function uplaodImg(callback){
    if(uploadFileUrl){
        uploadFile(uploadFileUrl,uploadUrl,function(r){
            var img = r.response;
            callback && callback(img);
        },function(error){
            showLoader(error,true);
        });
    }else{
        showLoader("请选择图片!",true);
        callback && callback("");
    }
}

function uploadAttach(fileUrl,callback){
    if(fileUrl){
        uploadFile(fileUrl,uploadUrl,function(r){
            var img = r.response;
            callback && callback(img);
        },function(error){
            showLoader(error,true);
        });
    }else{
        showLoader("请选择图片!",true);
    }
}

