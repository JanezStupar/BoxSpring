function(doc) {
    if(doc.doc_type==="CouchSyslogDoc"){
        emit([doc.hostname,doc.timestamp],doc);
    }
}
