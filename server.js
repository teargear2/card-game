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

io.on('connection',function(socket){

    socket.on('newlogin',function(data){
        UserModel.findOne({username : data.username, password : data.password},function(err,user){
            if(!user){
                socket.emit('loginfailed');
            }else{
                socket.emit('loginsucceed');
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
});

