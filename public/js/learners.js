

function Hello() {
	alert("Hi there!")
}

function addName(name, mobile) {
	var elm = document.createElement("h3")
	var txt = document.createTextNode(name+" : "+mobile)
	elm.appendChild(txt)

	var names = document.getElementById("names")
	names.appendChild(elm)
}

function add() {
	var name = document.getElementById("name").value
	var mobile = document.getElementById("mobile").value

	addName(name, mobile)
}

function singleClick() {
	elem = document.getElementById("myname")
	elem.style.color = "red"
}

function doubleclick() {
    blha = document.getElementById("mydad")
    blha.style.color ="yellow"

}

function overmouse(){
	over = document.getElementById("mouse")
	over.style.color ="red"
}

function mouseout(){
	out = document.get getElementById("outblha")
	out.style.color="blue"
}