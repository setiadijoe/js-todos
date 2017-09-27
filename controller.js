'use strict'

const View = require('./view.js')
const Model = require('./model.js')

class Controller {
	static help(command){
		// console.log(command[0])
		switch(command[0]) {
			case 'help' :
				View.help()
				break;
			case 'list' :
				View.list(Model.readJson())
				break;
			case 'add':
				Model.addData(command[1])
				break;
			case 'find' :
				let find = Model.find(command[1])
				View.find(find)
				break;
			case 'delete':
				Model.delete(command[1])
				break;
			case 'complete':
				Model.completed(command[1])
				View.list(Model.readJson())
				break;
			case 'uncomplete':
				Model.uncompleted(command[1])
				View.list(Model.readJson())
				break;

			default: break
		}
	}

}

module.exports = Controller


// Controller.help('list')

