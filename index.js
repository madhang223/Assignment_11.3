$(function(){
    $('#show').click(function(){ // click event to show the attributes
        var attrs = document.getElementById("google").attributes; // gets the attributes of the anchor tag
        $.each(attrs,function(i,elem){
            $("#attrs").html($("#attrs").html()+"<br><b>"+elem.name+"</b>:<i>"+elem.value+"</i>");//binds the attribute name and value inside a div
        });
    });

    $('#remove').click(function(){ // click event to remove the result
        $("#attrs").empty(); // clears the result rendered inside div
    });
});