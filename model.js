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

    static list(cb) {
        fs.readFile('data.json', 'UTF-8', (err, data) => {
            if (err) {
                console.log('Ada error')
            } else {
                let read = JSON.parse(data)
                let list = []
                for( let i = 1; i < read.length; i++) {
                    list.push(i+' '+read[i].task)
                }
                
                cb(list.join('\n'))
            }
        })
    }

    static view(cb) {
        fs.readFile('data.json', 'UTF-8', (err, data) => {
            if (err) {
                console.log('Ada error')
            } else {
                let read = JSON.parse(data)
                let list = read
                cb(list)
            }
        })
    }

    static add(task,cb) {
        this.view((data)=>{
            // console.log(data)
            let newData=data;
            let obj = {"task":task}
            // console.log(newData)
            newData.push(obj);
            // console.log(newData)
            fs.writeFile('data.json', JSON.stringify(newData), 'UTF-8', (err) => {
                if (err) {
                    console.log('Ada error')
                } else {
                    console.log('statusnya bagaimana?')
                }
            })
        })
        
    }

}

module.exports = Model

