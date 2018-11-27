var ok = true;

function name() {
  var userName = prompt("Ваше имя")
}

function age() {
  while (ok) {
    var age = prompt("Ваш возраст!")
    if (age > 17) {
      alert("отлично");
      ok = false;
    } else {
      alert("отказ!");
    }
  }
}

function sub() {
  var sub = prompt("Подписка имеется?")
  if (sub == "да") {
    alert("Великолепно!");
  } else {
    alert("Отказ");
  }
}

name();
age();
sub();
