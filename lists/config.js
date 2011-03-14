function(head, req) {
//This list provides specified view's data in jQgrid native JSON format

var ddoc = this;
var Mustache = require("lib/mustache");
var List = require("vendor/couchapp/lib/list");
var query = req.query;

provides("json", function() {
  
    var stash = {
        head: head,
        rows: []
    };

    var row,entry,value;
    while (row=getRow()){
        value=row.value;
        stash.rows.push(value);    
    };
        


    // render the html head using a template
    send(JSON.stringify(stash));
});};
