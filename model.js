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

    static add(task) {
        this.view((data)=>{
            let newData=data;
            let obj = {"task":task}
            newData.push(obj);
            fs.writeFile('data.json', JSON.stringify(newData), 'UTF-8', (err) => {
                if (err) {
                    console.log('Ada error')
                } else {
                    console.log('Data sudah update')
                }
            })
        })
    }

    static find(id, cb) {
        this.view(data=>{
            for (let i = 1; i < data.length; i++) {
                if (id == i){
                    let kirim = data[i].task
                    cb(kirim)   
                } 
            }
        })
    }

    static delete(id, cb) {
        this.view(data=>{
            for (let i = 1; i < data.length; i++) {
                if (id == i){
                    data.splice(i,1)
                    // console.log(data)
                    fs.writeFile('data.json', JSON.stringify(data), 'UTF-8', (err) => {
                        if (err) {
                            console.log('Ada error')
                        } else {
                            console.log('Data sudah update')
                        }
                    })
                }
            }
        })
    }

}

module.exports = Model

