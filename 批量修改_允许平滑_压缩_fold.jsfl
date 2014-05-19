var tItems=fl.getDocumentDOM().library.items
var tCount=0
for(var i=0;i<tItems.length;i++)
{
        var tItem=tItems[i]
        var itemFolds=tItem.name.split("/")
        var needCompress=false
        for(var j=0;j<itemFolds.length-1;j++)
        {
            if(itemFolds[j]=="compress")
            {
                needCompress=true
                break
            }
        }
        if(tItem.itemType=="bitmap" && needCompress)
        {
                tItem.allowSmoothing=true
                tCount++
                tItem.compressionType="photo"
                tItem.quality=50
        }
}

fl.getDocumentDOM().save()
alert("Completed "+tCount+"!")
