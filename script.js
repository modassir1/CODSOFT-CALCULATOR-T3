var result = document.getElementById('result');
var buttons = document.querySelectorAll('button');

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        // alert(this.innerHTML);
        // result.innerHTML = result.innerHTML + this.innerHTML;
        if (this.innerHTML == "=") {
            result.innerHTML = eval(result.innerHTML);
        } else {
            if (this.innerHTML == "÷") {
                result.innerHTML += "/";
            } else if (this.innerHTML == "x") {
                result.innerHTML += "*";
            } else if (this.innerHTML == 'C') {
                result.innerHTML = "";
            } else {
                result.innerHTML += this.innerHTML;
            }
        }
    })
}