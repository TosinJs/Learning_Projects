var buttons = document.querySelectorAll('.btn-1')
var form = document.querySelector('form')
var input = document.querySelector('input')
var equals = document.querySelector('#equals')
var clear = document.querySelector('#clear')
var output = document.querySelector('#output')


form.addEventListener('submit', solve)

function solve (event) {
	event.preventDefault()
	/**var num = input.value
	input.value = eval(num)
	console.log(eval(num))**/
}

buttons.forEach(function(element){
	element.addEventListener('click', function() {
		input.value = input.value + element.value
	})
})

equals.addEventListener('click', function () {
	output.value = eval(input.value)
})
clear.addEventListener('click', function () {
	input.value = ''
	output.value = ''
})