functionn(head, req) {
    var ddoc = this;
    var Mustache = require("lib/mustache");
    var List = require("vendor/couchapp/lib/list");
    var path = require("vendor/couchapp/lib/path").init(req);
    var Atom = require("vendor/couchapp/lib/atom");

    var indexPath = path.list('index','recent-posts',{descending:true, limit:10});
    var feedPath = path.list('index','recent-posts',{descending:true,limit:10, format:"atom"});
    var commentsFeed =
    path.list('comments','comments',{descending:true, limit:10,format:"atom"});
    var path_parts = req.path;

}

