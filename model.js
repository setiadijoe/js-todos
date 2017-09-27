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
                if (read.length == 1) {
                    cb('Tidak ada task')
                } else {

                    for( let i = 1; i < read.length; i++) {
                        if (read[i].marked == true){
                            list.push(i+' [x] '+read[i].task)
                        } else {
                            list.push(i + ' [ ] ' + read[i].task)
                        }
                    }
                    
                    cb(list.join('\n'))
                }
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

    static add(task, cb) {
        this.view((data)=>{
            let newData=data;
            let obj = {"task":task, "marked":"false", "created_at": new Date()}
            newData.push(obj);
            fs.writeFile('data.json', JSON.stringify(newData), 'UTF-8', (err) => {
                if (!err) {
                    let pesan =  'Data sudah update'
                    cb(pesan)
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
                    fs.writeFile('data.json', JSON.stringify(data), 'UTF-8', (err) => {
                        if (!err) {
                            let pesan = 'Data sudah update'
                            cb(pesan)
                        }
                    })
                }
            }
        })
    }

    static complete(id, cb) {
        this.view((data)=>{
            let objbaru = []
            let arr = []
            let newObj = []
            for (let i = 1; i < data.length; i++) {
                if (id == i) {
                    data[i].marked = true
                    arr.push(data[i])
                } else {
                    arr.push(data[i])
                }
            }
            objbaru.push(data[0])
            for (let i = 0; i < arr.length; i++) {
                objbaru.push(arr[i])
            }
            fs.writeFile('data.json', JSON.stringify(objbaru), 'UTF-8', (err) => {
                if (!err) {
                    let pesan = 'Task sudah selesai dikerjakan'
                    cb(pesan)
                }
            })
        })
    }

    static uncomplete(id, cb) {
        this.view((data) => {
            let objbaru = []
            let arr = []
            let newObj = []
            for (let i = 1; i < data.length; i++) {
                if (id == i) {
                    data[i].marked = false
                    arr.push(data[i])
                } else {
                    arr.push(data[i])
                }
            }
            objbaru.push(data[0])
            for (let i = 0; i < arr.length; i++) {
                objbaru.push(arr[i])
            }
            fs.writeFile('data.json', JSON.stringify(objbaru), 'UTF-8', (err) => {
                if (!err) {
                    let pesan = 'Task belum selesai dikerjakan'
                    cb(pesan)
                }
            })
        })
    }

    static sortingAsc(cb) {
        this.view(data=>{
            // console.log(data)
            let minIdx, temp
            for (let i = 1; i < data.length; i++){
                minIdx = i;
                for (let j = i+1; j < data.length; j++){
                    if (data[j].created_at > data[minIdx].created_at){
                        minIdx = j
                    }
                }
                temp = data[i]
                data[i] = data[minIdx]
                data[minIdx] = temp
            }
            // console.log('setelah di sorting')
            // console.log(data)
            fs.writeFile('data.json', JSON.stringify(data), 'UTF-8', (err) => {
                if (!err) {
                    let pesan = 'Task sudah diurutkan berdasarkan waktu pembuatan terbaru'
                    cb(pesan)
                }
            })
            // for (let i = 1; i< data.length; i++) {
            //     if(data[i].created_at)
            // }
        })
    }

}

module.exports = Model

