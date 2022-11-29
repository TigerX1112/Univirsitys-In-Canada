$(document).ready(function() {
    //$("universityList").html("");
    $.get("http://universities.hipolabs.com/search?country=Canada", function(data, status) {
        if (status == "success" && data != null && data != undefined) {
            for (let index = 0; index < data.length; index++) {
                $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

            }
        } else {
            $("#universityList").append("Can't load the list from url.");
        }
    });
});