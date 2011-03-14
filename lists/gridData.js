function(head, req) {
//This list provides specified view's data in jQgrid native JSON format

var ddoc = this;
var Mustache = require("lib/mustache");
var List = require("vendor/couchapp/lib/list");
var query = req.query;

provides("json", function() {
    

    //## compute the JSON output        

    //number of total pages for query
    var pageCount = head.total_rows / req.query.rows;    
    if ((pageCount % 1) > 0) 
        pageCount=Math.floor(pageCount)+1;
    
    
    //page of query
    var pageCurrent = req.query.page;
    if (pageCurrent > pageCount) 
        pageCurrent=1;

    //number of recors for query
    var recordCount = head.total_rows;
    if (pageCurrent == pageCount) 
        recordCount = head.total_rows % pageCount; 
    
    //array of result rows formatted {id,cell[gridentry]}    
    var stash = {
        total : pageCount,
        page : pageCurrent,
        records : recordCount,
        rows : []   
    }; 

    var row,entry,value;
    while (row=getRow()){
        value=row.value;
        entry={
            id: value._id,
            cell: [value.timestamp,value.priority,value.hostname,value.tag,value.content]
        };
        stash.rows.push(entry);    
    };
        


    // render the html head using a template
    send(JSON.stringify(stash));
});};
