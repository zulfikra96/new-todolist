const { database } = require('../core/database')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('todo')
                .Fields('todo_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('user_id')
                    .Integer()
                    .NotNull()
                .ForeignKeys('user_id').References('users').OnDeleteCascade()
                .Fields('title')
                    .String(40)
                    .Null()
                .Fields('description')
                    .Text()
                    .Null()
                .Fields('date_start')
                    .Date()
                    .Null()
                .Fields('date_end')
                    .Date()
                    .Null()
                .Timestamp()
                .Execute()               
        break;
    case "drop":
        database.DropTable('todo')
                .Execute()
                
        break;
}

return
