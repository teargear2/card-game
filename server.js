var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose');

db = mongoose.createConnection('mongodb://localhost:27017/demo2');

db.on('connected',function(err){
    if(err){
        console.log('connection failed:'+err);
    }else{
        console.log('connection set');
    }
});

Schema = mongoose.Schema;

UserSchema = new Schema({
    username : String,
    password : String,
    birth : String,
    gender : String,
    intro : String,
    status : String
});

UserModel = db.model('users',UserSchema);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});

/*
UserModel.findOne({username : 'aaa'},function(err,doc){
    if(err)
        console.log(err);
    if(!doc)
        console.log('none');
    else
        console.log(doc.password);
        console.log(doc.gender);
});
*/

io.on('connection',function(socket){

    socket.on('newlogin',function(data){
        UserModel.findOne({username : data.username, password : data.password},function(err,user){
            if(!user){
                socket.emit('loginfailed');
            }else{
                socket.emit('loginsucceed',{
                    username : data.username,
                    userid : socket.id
                });
            }
        });
    });

    socket.on('newregister',function(data){
        UserModel.findOne({username : data.username},function(err,user){
            if(user){
                socket.emit('registerfailed');
            }else{
                var user = new UserModel();
                user.username = data.username;
                user.password = data.password;
                user.save(function(err){
                    if(err) throw err;
                    socket.emit('registersucceed');
                });
            }
        });
    });

    socket.on('usernamemodify',function(data){
        UserModel.update({username : data.oldusername},{username : data.newusername},function(err,docs){
            if(err) console.log(err);
            else{
            console.log('Modification Succeed: ' + docs);
            socket.emit('modificationsucceed');
            }
        });
    });

    socket.on('passwordmodify',function(data){
        UserModel.update({username : data.username},{password : data.newpassword},function(err,docs){
            if(err) console.log(err);
            else{
            console.log('Modification Succeed: ' + docs);
            socket.emit('modificationsucceed');
            }
        });
    });

    socket.on('userbirthmodify',function(data){
        UserModel.update({username : data.username},{birth : data.newuserbirth},function(err,docs){
            if(err) console.log(err);
            else{
            console.log('Modification Succeed: ' + docs);
            socket.emit('modificationsucceed');
            }
        });
    });

    socket.on('usergendermodify',function(data){
        UserModel.update({username : data.username},{gender : data.newusergender},function(err,docs){
            if(err) console.log(err);
            else{
            console.log('Modification Succeed: ' + docs);
            socket.emit('modificationsucceed');
            }
        });
    });

    socket.on('userintromodify',function(data){
        UserModel.update({username : data.username},{intro : data.newuserintro},function(err,docs){
            if(err) console.log(err);
            else{
            console.log('Modification Succeed: ' + docs);
            socket.emit('modificationsucceed');
            }
        });
    });

    socket.on('inforequest',function(data){
        UserModel.findOne({username : data},function(err,doc){
            socket.emit('infosend',{
                username : doc.username,
                password : doc.password,
                birth : doc.birth,
                gender : doc.gender,
                intro : doc.intro
            });
        });
    });
});

