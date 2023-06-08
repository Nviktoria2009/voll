var myimage = document.querySelector('img');

myimage.onclick = function() {
var mySrc = myimage.getAttribute('src');
if(mySrc ==='2.jpg'){
myimage.setAttribute('src','R.jpg');
} else {
myimage.setAttribute('src','https://sportishka.com/uploads/posts/2021-11/1637367904_52-sportishka-com-p-napadayushchie-po-voleibolu-komandnii-spor-63.jpg');
}
}
if(localStorage.getItem('name')) {
    setUserName ();  
} else {
var storedName = localstorage.getItem ('name');
myHeading .textContent = 'Привет' + storedName;
}
myButton.onclick = function() {
    setUserName();
}