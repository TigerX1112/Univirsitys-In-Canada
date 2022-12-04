$(document).ready(function() {
    $( ".target" ).change(function () {
        $( "select option:selected" ).each(function() {
            country = $(this).val();
            $("#test1").html("Universitys in "+country);
        });
        var url = "http://universities.hipolabs.com/search?country="+country+"";
        $("test1").click(function() {
            $.get(url, function(data, status) {
                $("universityList").html("");
                    if (status == "success" && data != null && data != undefined) {
                        for (let index = 0; index < data.length; index++) {
                            $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);
                        }
                    }   else {
                        $("#universityList").append("Can't load data");
                    }
                });
            });
    });
});