function(doc) {
    if(doc.doc_type==="CouchSyslogDoc"){
        emit([doc.priority,doc.timestamp],doc);
    }
}
