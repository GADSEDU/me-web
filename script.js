
function promptUser() {
	let greet;
	const name = prompt('Please enter your name');
	
	if (name != "") {
		greet = `Welcome to my page ${name}`;
		
	}
	document.getElementById('user').innerHTML = greet;
}

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open')
});

//alert('connected');

const display = document.getElementById('clock');
          //const audio = new Audio('');
          //audio.loop = true;
          //let alertTime = null;
          //let alertTimeout = null;

          const morning = 'am';
          const evening = 'pm';

          function formatTime(time) {
             if(time < 10) {
               return '0' + time;
             }
          return time;
          }

          function updateTime() {
             const date = new Date();
             
             const hour = formatTime(date.getHours());
             const minutes = formatTime(date.getMinutes());
             const seconds = formatTime(date.getSeconds());
             if(hour < 12 && minutes <= 59) {
               display.innerText = `${hour} : ${minutes} : ${seconds} ${morning}`;
             } else {
               display.innerText = `${hour} : ${minutes} : ${seconds} ${evening}`;
             } 
          }

          setInterval(updateTime, 1000);

//requestAnimationFrame(updateTime, 1000);

//function

//Date setting
let date = new Date()
document.getElementById('date').textContent = date;

var field = document.querySelector('textarea');
var backup = field.getAttribute('placeholder');
var btn = document.querySelector('.btn');
var clear = document.getElementsById('clear');

field.onfocus = function () {
  this.setAttribute('placeholder', '');
  this.style.borderColor('#333');
  btn.style.display = 'block';
}

field.onblur = function () {
  this.setAttribute('placeholder', backup);
  this.style.borderColor = '#aaa';
}

clear.onclick = function() {
  btn.style.display = 'none';
  field.value = '';
}

let name = '';
let comment = '';

function save() {
  name = document.getElementById('name').value;
  comment = document.getElementById('comment').value;
  
  firebase.database().ref('/').child(`${name} : ${comment}`).update;

}