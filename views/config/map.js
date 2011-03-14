function(doc) {
    if(doc.doc_type==="config"){
        emit([doc.config_type,doc.config_name],doc.config_value);
    }
}

