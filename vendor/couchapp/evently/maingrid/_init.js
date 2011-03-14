function(e,gridname) {
    var elem=$(this);
    var gridContainer=elem.find("#"+gridname);
    if (gridContainer.length)
        gridContainer.remove();
    elem.trigger("drawGrid",gridname);
   
}
