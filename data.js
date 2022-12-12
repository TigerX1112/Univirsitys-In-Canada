$(document).ready(function(){
    $("#button1").click( function(){
        $("#div1").load("test.txt");
    });

    $("#button2").click(function(){
        $("#div1").load("task.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success") {
                alert("External content success");
            }
            if(statusTxt == "error") {
                alert("Error! Faiuled to get data.");
            }
            $("#div1").html();
        });
    });

    $("#button3").click(function(){
        $.get("https://uyghur.ai/course/data/uyghur-ai-welcome.txt", function(data, status){
            $("#div1").html(data);
        });
    });
});