let name = prompt('Your Name?');
let sureName = confirm(`are you sure this is your name ${name}`)
if (sureName){
    alert(`hello ${name}`)
}else {
    alert('give us your name.')
}
