var form = document.querySelector("form")
var input = document.querySelector("input")
var todo_section = document.querySelector("#todo-section")

var lists = []
var lists2 = []

form.addEventListener('submit', function(event){
	event.preventDefault()

	if (input.value == ''){
		input.value = ''
	}
	else{
		var todo_item = {todo:input.value,
						 complete: 'False'}
		/**console.log(todo_item['todo'])**/
		lists.push(todo_item)
		parselists(lists,lists2)
		lists2 = Array.from(new Set(lists2))
		/**console.log(lists2)**/
		addtodoitems(lists2)
		input.value = ''
}
})

function hownewbuttonswork(itemname) {
	var new_todo = todo_section.querySelectorAll('.new-todo')

	new_todo.forEach(function(item) {
		item.querySelector('.btn-warning').addEventListener('click', function(){
			todo_section.removeChild(item)

			lists2 = lists2.filter(function(item){
                    return item !== itemname;
                })
			lists = lists.filter(function(item){
                    return item['todo'] !== itemname;
                })
			console.log(lists)
		})
	})

}

function remove_item(item) {
	var to_remove = lists2.indexOf(item) + 2
	var to_remove2 = lists.indexOf(item) + 2
	console.log(to_remove2)
	console.log(to_remove)
	lists2.splice(to_remove, 1)
	lists.splice(to_remove2, 1)
}

function addtodoitems(todoItems){
    todo_section.innerHTML = ''

        todoItems.forEach(function(item){
            todo_section.insertAdjacentHTML
            ('beforeend', `<h2 class='new-todo'>${item}<span> </span><button class='btn btn-warning'>Delete</button></h2>` );

            hownewbuttonswork(item)
        })
}

function parselists(list, list2){
	for (var i = 0; i<list.length; i++){
		list2.push(list[i]["todo"])
	}
}




