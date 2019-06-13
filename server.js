var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose');

<<<<<<< HEAD
var RoomInfo = {};  //房间列表
var UserInfo = {};  //用户列表
var User_Room = {}; //用户与房间的关系
const ROOM_MAX = 2; //房间最大玩家数

=======
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
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
<<<<<<< HEAD
    birth : String,
    gender : String,
    intro : String,
=======
<<<<<<< HEAD
    birth : String,
    gender : String,
    intro : String,
=======
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
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

<<<<<<< HEAD
/*
UserModel.findOne({username : 'aaa'},function(err,doc){
=======
<<<<<<< HEAD
/*UserModel.update({username : "zuozi"},{password : "12345678",gender : 'female'},function(err,doc){
    if(err) console.log(err);
    console.log('更改成功：' + doc.password);
});*/

/*UserModel.findOne({username : "1"},function(err,doc){
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
    if(err)
        console.log(err);
    if(!doc)
        console.log('none');
    else
<<<<<<< HEAD
        console.log(doc.password);
        console.log(doc.gender);
});
*/

=======
        console.log(doc.status);
});*/

io.on('connection',function(socket){
    socket.on('newlogin',function(data){
        if ((data.username=='123123123')&&(data.password=='123123123') ){
            socket.emit('manageloginsucceed');    //发送
        }else{
            socket.emit('manageloginfailed');
        } 
=======
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
io.on('connection',function(socket){

    socket.on('newlogin',function(data){
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
        UserModel.findOne({username : data.username, password : data.password},function(err,user){
            if(!user){
                socket.emit('loginfailed');
            }else{
<<<<<<< HEAD
                socket.emit('loginsucceed',{
                    username : data.username,
                    userid : socket.id
                });
=======
<<<<<<< HEAD
                UserInfo[socket.id] = data.username;    //将socketID与用户名相关联
                socket.emit('loginsucceed',{username : data.username, userid : socket.id});
=======
                socket.emit('loginsucceed');
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

    socket.on('newroom',function(){
        RoomInfo[socket.id] = [];
        RoomInfo[socket.id].push(socket.id);
        User_Room[socket.id] = socket.id;
        socket.join(socket.id);
        socket.emit('roomset');
    });

    socket.on('joinroom',function(){
        var mark = false;
        var temp;
        for(var iter in RoomInfo){
            if(RoomInfo[iter].length == 1){
                mark = true;
                RoomInfo[iter].push(socket.id);
                User_Room[socket.id] = iter;
                socket.join(iter);
                temp = iter;
                break;
            }
        }
        if(mark){
            io.sockets.in(User_Room[socket.id]).emit('roomfull',{
                master : UserInfo[temp],
                guest : UserInfo[socket.id]
            });
        }
    });

    socket.on('requestformasterid',function(){
        socket.emit('masteridresponse',UserInfo[User_Room[socket.id]]);
    });

    socket.on('gamestartrequest',function(){
        if(RoomInfo[socket.id].length == 2)
            io.sockets.in(socket.id).emit('gamestart',socket.id);
    });

    socket.on('roomexit',function(){
        var roomname = User_Room[socket.id];
        socket.leave(roomname);
        RoomInfo[roomname].pop();
        io.sockets.in(roomname).emit('guestleave');
    });

    socket.on('roomterminate',function(){
        var roomname = User_Room[socket.id];
        socket.leave(roomname);
        io.sockets.in(roomname).emit('roomterminate');
    });

    socket.on('guestroomterminate',function(){
        var roomname = User_Room[socket.id];
        socket.leave(roomname);
        delete RoomInfo[socket.id];
    });

    socket.on('roominforequest',function(){
        var roomname = User_Room[socket.id];
        var master_index = RoomInfo[roomname][0];
        var guest_index = RoomInfo[roomname][1];
        socket.emit('roominfo',{
            master : UserInfo[master_index],
            guest : UserInfo[guest_index]
        });
    });

    socket.on('masterstatuscheck',function(data){
        UserModel.findOne({username : data},function(err,doc){
            if(err)
                console.log(err);
            else
                socket.emit('masteruserstatus',doc.status);
        });
    });

    socket.on('gueststatuscheck',function(data){
        UserModel.findOne({username : data},function(err,doc){
            if(err)
                console.log(err);
            else
                socket.emit('guestuserstatus',doc.status);
        });
    });

    socket.on('sendmessage',function(data){
        io.sockets.in(User_Room[socket.id]).emit('newmessage',{
            message : data,
            id : socket.id
        });
    });

    /*socket.on('gamemessage',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('gamemessage',data);
    });*/

    //游戏逻辑部分
    socket.on('pilemessage0',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receivepile0',data);
        
    });

    socket.on('firstturn0',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receivefirstturn0',data);

    });

    socket.on('playedcardmessage',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receiveopplayedcardmessage',data);
    });
    
    socket.on('playedcardtype',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receiveopplayedcardtype',data);
    });

    socket.on('numplayedcard',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receiveopplayedcardnum',data);
    });

    socket.on('turn',function(data){
        socket.broadcast.to(User_Room[socket.id]).emit('receiveturn',data);
    });

    //资料部分
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
    socket.on('usernamemodify',function(data){
        UserModel.update({username : data.oldusername},{username : data.newusername},function(err,docs){
            if(err) console.log(err);
            else{
<<<<<<< HEAD
=======
            UserInfo[socket.id] = data.newusername;
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
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
<<<<<<< HEAD
=======

    //管理员
    socket.on('newinfoManage1',function(data){
        UserModel.findOne({username : data.username},function(err,doc){
            if(err)
                console.log(err);
            if(!doc)
                socket.emit('failed1');
            else
                socket.emit('user1',doc)
        });
    });     

    socket.on('newinfoManage2',function(data){
        UserModel.findOne({username : data.username},function(err,doc){
           
            if(err)
                console.log(err);
            if(!doc)
                socket.emit('failed2');
            else
                socket.emit('user2',doc)
        });
    });     



    socket.on('modify',function(data){
        UserModel.update({username : data.username},{password : data.password,status : data.status},function(err,doc){

            if(err)
            socket.emit('failed4'); 
        if(!doc.n)
        socket.emit('failed4');
        else{
            console.log(doc.password);
            socket.emit('user4',{
                username : doc.username,
                password : doc.password,
                status : doc.status
                });
        }
        

          
            

        });
    }); 

    socket.on('mastergameover',function(){
        var roomname = User_Room[socket.id];
        socket.broadcast.to(roomname).emit('gameisover');
        socket.leave(roomname);
    });

    socket.on('guestgameover',function(){
        var roomname = User_Room[socket.id];
        socket.broadcast.to(roomname).emit('gameisover');
        socket.leave(roomname);
    });

    socket.on('killme',function(){
        var roomname = User_Room[socket.id];
        var master_index = RoomInfo[roomname][0];
        socket.leave(roomname);
        delete RoomInfo[master_index];
    });
        
});




=======
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
});

>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
