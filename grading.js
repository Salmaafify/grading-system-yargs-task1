const fs = require('fs')

// add function //////////////
const addData = (name,subject,grade,comment)=>{
    const studentInfo = loadData()
    const duplicateNames = studentInfo.filter((element)=>{
        return element.name === name
    })
    if(duplicateNames.length === 0){
        studentInfo.push({
            name,
            subject,
            grade,
            comment:comment
        })
        saveData(studentInfo)
        console.log('Saved Successfully')
    }
    else{
        console.log('ERROR!! , There Exist A Duplicated Name ....')
    }
}
///////////////////////////////////
// readData function
const readData = (name) =>{
    const data = loadData()
    const readData = data.find((element)=>{
        return element.name === name
    })
    if(readData){
        console.log('Your Name Is -----> ' +readData.name)
        console.log('Your Subject Is -----> ' +readData.subject)
        console.log('Your Grade Is -----> ' +readData.grade)
        if(readData.comment){
            console.log('You Write This Comment -----> ' +readData.comment)
        }else{
            console.log('-')
        }
    }else{
        console.log('This Name Not Found , Please Try Again With Other Name ....')
    }
}
//////////////////////////////////////////////////
// listData function
const listData = () =>{
    const data = loadData()
    data.forEach(element => {
        console.log(element.name)
    });
}
/////////////////////////////////////////////////////
// deleteData function
const deleteData = (name) =>{
    const data = loadData()
    const dataToKeep = data.filter((element)=>{
        return element.name !== name
    })
     saveData(dataToKeep)
     console.log('Removed Successfully ..........................')
}
/////////////////////////////////////////////////////////////////////////////////////////////
// loadData function
const loadData = () =>{
    try{
        const data = fs.readFileSync('grades.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return []
    }
}
// saveData function
const saveData = (data) =>{
    const saveData = JSON.stringify(data)
    fs.writeFileSync('grades.json',saveData)
}
// exports
module.exports = {
    addData,
    readData,
    listData,
    deleteData
}