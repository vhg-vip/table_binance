var tbody = $("tbody");

function add(params) {
    let number1 = Math.floor(Math.random() * 1000000) + 100000
    let number2 = Math.floor(Math.random() * 1000000) + 100000
    let number3 = Math.floor(Math.random() * 1000000) + 100000
    tbody.prepend("<tr id=''><td>" + number1 + "</td><td>" + number2 + "</td><td>" + number3 +
        "</td></tr>");
    tbody.find("tr").eq(10).remove()

}
let select = $("#timer");
var timing = select.val(),
    output = document.getElementById('table');

function loop() {
  add();
  window.setTimeout(loop, timing);
}
document.querySelector('#timer').addEventListener('change', function (e) {
    timing = parseInt(this.value);
  });
  

loop();
