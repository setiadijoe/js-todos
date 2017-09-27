'use strict'
// let Model = require('./model.js')

class View {
	static help(){
		return `node todo.js\nnode todo.js help\nnode todo.js list\nnode todo.js add <task_content>\n`+
		`node todo.js add <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>`
	}

	static list(data){
		// console.log(data)
		console.log('==================List Menu =====================')
		for(var i = 0; i < data.length; i++){
			console.log(`${data[i].id}. ${data[i].complete} ${data[i].todo}`)
		}
	}

	// static add(addData){
	// 	console.log(`Added "${addData}" to your TODO list`)

	// }

	static find(data){
		// console.log(data)
		console.log(`${data.id}. ${data.todo}`)
	}


}

module.exports = View;

// let view = View.list(Model.readJson())
// console.log(View.help())
