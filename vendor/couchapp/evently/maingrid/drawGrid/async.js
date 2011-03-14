function (callback) {
    //The gridname has been passed on from the _init event
    var gridname = arguments[2];
    $.ajax({
        url: '/list/config/config/?key=["jqgrid","'+gridname+'"]',
        contentType: "application/json",
        success: function(data) {
            var result=data.rows[0];                
            callback(gridname,result);
        }
    });
}
