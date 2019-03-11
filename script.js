document.getElementsByTagName("button")[0].onclick = function(){
    if(this.style.backgroundColor == 'blue')
    this.style.backgroundColor = 'red';
    else
    this.style.backgroundColor = 'blue';

    document.getElementsByTagName("h1")[0].style.display = "none";
}