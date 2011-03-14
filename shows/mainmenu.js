function(head, req) {
    // This Show generates all the main Menu entries
    var ddoc = this;
    var Mustache = require("lib/mustache");
    var data={
      db: req.path[0],
      design: req.path[2]      
     // }
    };
    //log(data.couchsession); 
    return Mustache.to_html(ddoc.templates.index,data,ddoc.templates.partials);
}

