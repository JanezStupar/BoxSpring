function(gridname,result){
// TODO: async parameter passing
// TODO: parametrization of hardcoded properties

    var rslt=result;
    var elem=$('#'+gridname+'table');
    elem.jqGrid({
        url: result.url,
        ajaxGridOptions: { contentType: 'application/json; charset=utf-8' },
        datatype: "json",
        colNames: result.colnames,
        colModel: result.colmodel,
        pager: '#'+gridname+'pager',
        rowNum:40,
        rowList:[40,80,120],
        sortname: result.colmodel[0].name,
        sortorder: 'desc',
        height: 400,
        viewrecords: true,
        caption: gridname+' data',
        onSelectRow: function (id) {
        //For parametrized views by property we need to save the selected row
        //data
        // TODO: better async solution get rid of maingrid
            $$("#maingrid").selectedData = elem.getRowData(id);
        },
        beforeRequest: function() {
        // take care of url parameters
            var limit = elem.getGridParam("rowNum");
            var skip = (elem.getGridParam("page")-1) * limit;
            
            var postData = {
                postData: {
                    limit: limit, 
                    skip: skip
                }
            };

            var selectedData = $$("#maingrid").selectedData;
            if (rslt.source!=null && selectedData!=null) { 
                var parVal = selectedData[rslt.source];

                rslt.endkey = rslt.endkey.replace(rslt.source,parVal);
                rslt.startkey = rslt.startkey.replace(rslt.source,parVal);
            }

            if (elem.getGridParam("sortorder")=='asc') {
                postData.postData.descending=true;
                postData.postData.startkey=rslt.endkey;
                postData.postData.endkey=rslt.startkey;
            }
            else{
                postData.postData.descending=false;
                postData.postData.startkey=rslt.startkey;
                postData.postData.endkey=rslt.endkey;
            }
            elem.setGridParam(postData);
        },
        ondblClickRow: function(rowid,iRow,iCol,e) {
        // show form on dbl click
        // TODO: replace the hardcoded form
           var dialog=$("#dialog-form");
           var rowdata=elem.getRowData(rowid);
           dialog.find("#timestamp").attr("value",rowdata.tstamp);
           dialog.find("#priority").attr("value",rowdata.pri);
           dialog.find("#hostname").attr("value",rowdata.host);
           dialog.find("#tag").attr("value",rowdata.tag);
           dialog.find("#content").attr("value",rowdata.content);
           dialog.dialog();
        }
    });
   // $(window).bind('resize', function() {
    //    $(elem).setGridWidth($("#items").width());
   // }).trigger('resize');

}
