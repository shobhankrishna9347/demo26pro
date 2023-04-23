function collofimg()
{
    var allimgtag=document.images;
    for(i=0;i<allimgtag.length;i++)
    {
        allimgtag[i].src=`${gallary} .jpg`
    }
}
collofimg()
function bigwindow(gallary)
{
    document.getElementById("imgcontainer").style.backgroundImage=`url(${gallary})`
}
