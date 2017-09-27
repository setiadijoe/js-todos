const fs = require('fs')
let json = fs.readFileSync('data.json', 'utf8')
let parseJson = JSON.parse(json)
// console.log(typeof parseJson)


class Model {

	static readJson(){

		return parseJson
	}

	static addData(data){
		parseJson.push({
			id:this.readJson().length + 1,
			todo:data
		})

		let string = JSON.stringify(parseJson)


		fs.writeFile('data.json', string, (err, contents)=>{
			if(err){
				throw err
			}else{
				console.log(`Added "${data}" to your TODO list`)
			}

		})
	}

	static find(id){
		for(var i = 0; i < parseJson.length; i++){

			if(parseJson[i].id === +id){
				return parseJson[i]
			}
		}
	}

	static delete(id){
		for(var i = 0; i < parseJson.length; i++){

			if(parseJson[i].id === +id){
				parseJson.splice(i, 1)
				// return parseJson

			}
		}

		let string = JSON.stringify(parseJson)


		fs.writeFile('data.json', string, (err, contents)=>{
			if(err){
				throw err
			}else{
				console.log(`Delete "${data.todo}" from your TODO list...`)
			}

		})
	}

	static completed(id){
		for(var i = 0; i < parseJson.length; i++){

			if(parseJson[i].id === +id){
				parseJson[i].complete = '[x]'
			}
		}

		let string = JSON.stringify(parseJson)
		fs.writeFile('data.json', string)

	}

	static uncompleted(id){
		for(var i = 0; i < parseJson.length; i++){

			if(parseJson[i].id === +id){
				parseJson[i].complete = '[ ]'
			}
		}

		let string = JSON.stringify(parseJson)
		fs.writeFile('data.json', string)

	}

}


module.exports = Model;
// console.log(Model.addData('tes'))
// console.log(Model.completed(2))

