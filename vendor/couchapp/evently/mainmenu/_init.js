function(){
    elem=$(this);
    $.ajax({
        url:'http://syslog.mycouch/list/config/config/?startkey=["menuitem"]&endkey=["menuitem",{}]',
        dataType: 'json',
        success: function(data) {
                elem.trigger("createButton",[data.rows]);
        }
        
    });
    elem.children('a').button();    
}
