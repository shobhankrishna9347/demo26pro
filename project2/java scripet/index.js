var email="shoban@gmail.com"
var pass="123"
var inputTags=document.querySelectorAll("input")
var divClass=document.getElementsByClassName("borderdiv")
var form=document.forms
 function loginout(){
    var userEmail= document.getElementById("email1").value
    var userPassw=document.getElementById("pass1").value
    if (email!=userEmail && pass!=userPassw){
        divClass[0].style.borderColor="red"
        divClass[1].style.borderColor="red"
        document.getElementById("reuslt").innerHTML="Wrong Email And Password"
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
    }
    else if ( email!=userEmail && pass==userPassw){
        divClass[0].style.borderColor="red"
        divClass[1].style.borderColor="pink"
        document.getElementById("reuslt").innerHTML="wrong Email Name"
        document.body.style.backgroundImage="linear-gradient(75deg ,pink,red)"


    }
    else if ( email==userEmail && pass!=userPassw){
        divClass[1].style.borderColor="pink"
        divClass[0].style.borderColor="red"
        document.getElementById("reuslt").innerHTML="wrong Email Name"
        document.body.style.backgroundImage="linear-gradient(75deg ,red,pink)"
    }
     else{
        form[0].elements[2].type="submit"
        form[0].action="./html/gallary.html"
     }
 }
 function visible()
{
    document.getElementById("pass1").type="text"
    document.getElementById("passvisble").style.transform="rotateY(360deg)"
    document.getElementById("passvisble").src="./assent/image/pngwing.com (21).png"
    document.getElementById("passvisble").style.transition="all 0.2s"
}
function invisible()
{
    document.getElementById("pass1").type="password"
    document.getElementById("passvisble").style.transform="rotateY(0deg)"
    document.getElementById("passvisble").src="./assent/image/pngwing.com (21).png"
}
