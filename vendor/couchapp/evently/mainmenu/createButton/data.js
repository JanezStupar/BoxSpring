function(e,rows){
    var result=[];
    for (var i=0;i<rows.length;i++) {
        result.push({
            menuitemname: rows[i].menuitemname,
            menuitemtext: rows[i].menuitemtext
        });
    }

    return {menuitems: result};
}
