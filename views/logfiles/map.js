function(doc) {
    if(doc.doc_type==="CouchSyslogDoc"){
        emit(doc.timestamp,doc);
    }
}
