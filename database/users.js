const { database } = require('../core/database')
const  argv = require('yargs').argv
switch(argv.migration)
{
    case "create":
         database.CreateTable('users')
                .Fields('user_id')
                    .PrimaryKey()
                    .NotNull()
                .Fields('username')
                    .String('15')
                    .Unique()
                    .NotNull()
                .Fields('roles')
                    .String('100')
                    .NotNull()
                .Fields('password')
                    .String('220')
                    .Null()
                .Fields('token')
                    .Text()
                    .Null()
                .Timestamp()
                .Execute()               
        break;
    case "drop":
        database.DropTable('users')
                .Execute()
                
        break;
}

return
