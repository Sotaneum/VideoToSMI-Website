/*
    Version. 2019.06.02
    Copyright 2019 Info lab. (Donggun LEE)
    Website : http://infolab.kunsan.ac.kr
*/

function setIP(ip){
    SERVER_IP = ip;
}

function openDialog(){
    var inputbox = $("#middle-upload-form-input");
    inputbox.click();
}
function input_change(e){
    var fileName = e. target.files[0].name;
    $("#middle-upload-title")[0].innerText = fileName;
    uploadFile();
}
function uploadFile() {
    $('.background').css('display', '');
    var form = $('#middle-upload-form')[0];
    var formData = new FormData(form);
    $.ajax({
        url: SERVER_IP,
        processData: false,
        contentType: false,
        data: formData,
        type: 'POST',
        success: function (result) {
            $('.background').css('display', 'none');
            window.open(SERVER_IP+"?smi="+result, 'newWindow');
            alert("다운로드 되었습니다. 다운로드가 되지 않는다면 팝업을 확인해주세요.");
        },
        error:function(){
            $('.background').css('display', 'none');
            alert("서버와 접속을 실패했습니다. 다시 시도하세요.");
        },
        complete:function(){
            $("#middle-upload-form-input").change(null);
            $("#middle-upload-form-input").val("");
            $("#middle-upload-form-input").change(input_change);
            $("#middle-upload-title")[0].innerText = "Please upload the file.";
        }
    });
}

$('.background').css('display', 'none');
$("input:file").change(input_change);