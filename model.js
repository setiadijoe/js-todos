const fs = require('fs')

class Model {
    static help(cb) {
        fs.readFile('data.json', 'UTF-8', (err, data)=>{
            if (err) {
                console.log('Ada error')
            } else {
                let read = JSON.parse(data)
                let menu = read[0].help.join('\n')
                cb(menu)
            }
        })
    }

    static view(cb) {
        fs.readFile('data.json', 'UTF-8', (err, data) => {
            if (err) {
                console.log('Ada error')
            } else {
                let read = JSON.parse(data)
                let list = read[1].task
                cb(list)
            }
        })
    }

    static add(task) {
        fs.writeFile('data.json', task, 'UTF-8', (err, data) => {
            if (err) {
                console.log('Ada error')
            } else {
                let read = JSON.parse(data)
                let addTask = task.slice(1).join(' ')
                // let newTask = JSON.parser(addTask)
                console.log(typeof addTask)
            }
        })
    }
}

module.exports = Model

