fl.outputPanel.clear();
var library = fl.getDocumentDOM().library;
var libItems = library.items;
var length = libItems.length;
for(var i=0;i<length;i++)
{
    var item = libItems[i];
    if(item.itemType=='movie clip'){
        library.selectNone();
        library.selectItem(item.name);
        fl.getDocumentDOM().library.editItem();//进入元件内部
        var timeline = fl.getDocumentDOM().getTimeline();
        for(var j=0;j<timeline.layers.length;j++)
        {
            var layer = timeline.layers[j];
            // fl.outputPanel.trace(layer.name);
            if(layer.locked == true) layer.locked = false;
            var layFrames = layer.frames;//层中的所有帧
            for(var k=0;k<layFrames.length;k++)
            {
                var frame = layFrames[k];
                if(k == frame.startFrame){//是关键帧
                    var fraElements = frame.elements;
                    for(var m=0;m<fraElements.length;m++)
                    {
                        var element = fraElements[m];
                        if(element.locked == true) element.locked = false;
                        // fl.outputPanel.trace(element.elementType+" "+element.layer.name);
                        if(element.elementType == 'text')
                        {
                            fl.outputPanel.trace("text string:" + element.getTextString());
                            element.selectable = false;
                            fl.outputPanel.trace("============================");
                        }
                        // if(element.elementType == 'shape')
                        // {
                            // element.selected = true;
                            // fl.outputPanel.trace("isDrawingObject:" + element.isDrawingObject);
                            // fl.outputPanel.trace("isGroup:" + element.isGroup);
                            // fl.outputPanel.trace("isOvalObject:" + element.isOvalObject);
                            // fl.outputPanel.trace("isRectangleObject:" + element.isRectangleObject);
                            // fl.outputPanel.trace("============================");
                        // }
                    }
                }
            }
        }
    }
}
