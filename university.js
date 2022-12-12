$(document).ready(function() {
    $.get('countries.json', function(data, status){
        more_countrys = data;
    });

    setButtonText();
    generateUniversitiesList(getSelectedValue());

    $("#target").change(function() {
        setButtonText();
        generateUniversitiesList(getSelectedValue());
    });

    function generateUniversitiesList(country) {
        var urlLink = "http://universities.hipolabs.com/search?country=" + country;
        $.get(urlLink, function(data, status) {
            if (status == "success" && data != null && data != undefined) {
                $("#universityList").html('');
                for (let index = 0; index < data.length; index++) {
                    $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

                }
            } else {
                $("#universityList").append("Can't load the list from url.");
            }
        });
    }
    function getSelectedValue() {
        return $('#target').find(":selected").val();
    }

    function setButtonText() {
        $("#collapseButton").html("Universities in " + $('#target').find(":selected").text());
    }
    
    function addVal() {
        optionText = more_countrys[Math.random().name];
        optionValue = more_countrys[Math.random().name];
  
            $('.test').append(`<option value="${optionValue}">
                                       ${optionText}
                                       </option>`);
    }
});