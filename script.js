var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

image1.addEventListener("mouseover",enlargeImage1);
image1.addEventListener("mouseout",defaultImage1);
image2.addEventListener("mouseover",enlargeImage2);
image2.addEventListener("mouseout",defaultImage2);

function enlargeImage1(){
	image1.classList.add("scale");
}
function defaultImage1(){
	setTimeout(function(){
	image1.classList.remove("scale");}
	,1000);
}
function enlargeImage2(){
	image2.classList.add("scale");
}
function defaultImage2(){
	setTimeout(function(){
	image2.classList.remove("scale");}
	,1000);
}
