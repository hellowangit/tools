fl.outputPanel.clear();
fl.trace("start");
save();
fl.trace("end");
function save() {
    var dom = fl.getDocumentDOM();
    var lib = dom.library;
    var target = lib.getSelectedItems()[0];
    if (target == null || target.length == 0) {
        target = dom.selection[0].libraryItem;
        if(target == null || target.length == 0){
            alert("no elements selected!");
            return;
        }
    }
    var outURI = "file:///C|/output/"; // ！！
    if (target.itemType == "bitmap") {
        target.exportToFile(outURI + target.name + ".jpg");
        fl.trace("file [" +target.name+ ".jpg] saved in " + outURI)
    }
}
