const yargs = require('yargs')
const grading = require('./grading')

//  commands //
// add command
yargs.command({
    command: 'add',
    describe: 'add data',
    builder:{
        name:{
            describe: "it's name",
            demandOption: true,
            type: 'string'
        },
        subject:{
            describe: "it's subject",
            demandOption: true,
            type: 'string'
        },
        grade:{
            describe: "it's grade",
            demandOption: true,
            type: 'number'
        },
        comment:{
            describe: "it's comment",
            demandOption: false,
            type: 'string'
        }
    },
    handler:(argv)=>{
        grading.addData(argv.name,argv.subject,argv.grade,argv.comment)
    }

})
////////////////////////////////
// read command
yargs.command({
    command: 'read',
    describe: 'read data',
    builder:{
        name:{
            describe: "it's name",
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        grading.readData(argv.name)
    }

})
/////////////////////////////////////////////////////////
// list command
yargs.command({
    command: 'list',
    describe: 'list data',
    handler:(argv)=>{
        grading.listData()
    }

})
///////////////////////////////////////////////////////
//delete command
yargs.command({
    command: 'delete',
    describe: 'delete data',
    builder:{
        name:{
            describe: "it's name",
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        grading.deleteData(argv.name)
    }

})
///////////////////////////
yargs.parse()