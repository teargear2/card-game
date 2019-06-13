var Maingame = {};
Maingame.select =new Array(16).fill(0);//an array to store card selected(prepare to play)
Maingame.pile0 = new Array(16).fill(0);
Maingame.pile1 = new Array(16).fill(0);
Maingame.pile2 = new Array(16).fill(0);//48 cards pile into 3 piles
Maingame.opplayedcard = new Array(16).fill(0);//to store cards op played 
Maingame.opplayedcardtype=0;
//different card types 1=bomb,2=single，3=pair，4=three of kind，5=3+2，6=shift pairs,7=shift three of kind，8=straight
Maingame.numopplayedcard=0;
Maingame.whooseturn=0;
Maingame.num_opcard=16;
Maingame.numlastturn=0;
Maingame.restcard=16;

Maingame.clear = function(){
    Maingame.select =new Array(16).fill(0);
    Maingame.pile0 = new Array(16).fill(0);
    Maingame.pile1 = new Array(16).fill(0);
    Maingame.pile2 = new Array(16).fill(0);
    Maingame.opplayedcard = new Array(16).fill(0);
    Maingame.opplayedcardtype=0;//炸弹1，单张2，对子3，三条4，三带二5，姐妹对6，三姐妹7，顺子8
    Maingame.numopplayedcard=0;
    Maingame.whooseturn=0;
    Maingame.num_opcard=16;
    Maingame.numlastturn=0;
    Maingame.restcard=16;
};//Use clear function to reset these global variables when restarting game

Maingame.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};
//cardnumber=point*10+(spade=0,heart=1,club=2,diamond=3) eg:spadeA=1*10+0=10 diamond5=5*10+3=53
Maingame.preload = function(){
    game.load.audio('intro','assets/music/intro.mp3');
    game.load.image('musiconbtn','assets/pic/musicon.jpg');
    game.load.image('musicoffbtn','assets/pic/musicoff.jpg');
    game.load.image('pokerback','assets/pic/poker_back.png');
    game.load.image('ready','assets/pic/ready.png');
    game.load.image('tick','assets/pic/tick.png');
    game.load.image('playcardbtn','assets/pic/playcard.png');
    game.load.image('endturnbtn','assets/pic/endturn.png');
    game.load.image('10','assets/pic/10.jpg');
    game.load.image('11','assets/pic/11.jpg');
    game.load.image('12','assets/pic/12.jpg');
    game.load.image('13','assets/pic/13.jpg');
    game.load.image('20','assets/pic/20.jpg');
    game.load.image('21','assets/pic/21.jpg');
    game.load.image('22','assets/pic/22.jpg');
    game.load.image('23','assets/pic/23.jpg');
    game.load.image('30','assets/pic/30.jpg');
    game.load.image('31','assets/pic/31.jpg');
    game.load.image('32','assets/pic/32.jpg');
    game.load.image('33','assets/pic/33.jpg');
    game.load.image('40','assets/pic/40.jpg');
    game.load.image('41','assets/pic/41.jpg');
    game.load.image('42','assets/pic/42.jpg');
    game.load.image('43','assets/pic/43.jpg');
    game.load.image('50','assets/pic/50.jpg');
    game.load.image('51','assets/pic/51.jpg');
    game.load.image('52','assets/pic/52.jpg');
    game.load.image('53','assets/pic/53.jpg');
    game.load.image('60','assets/pic/60.jpg');
    game.load.image('61','assets/pic/61.jpg');
    game.load.image('62','assets/pic/62.jpg');
    game.load.image('63','assets/pic/63.jpg');
    game.load.image('70','assets/pic/70.jpg');
    game.load.image('71','assets/pic/71.jpg');
    game.load.image('72','assets/pic/72.jpg');
    game.load.image('73','assets/pic/73.jpg');
    game.load.image('80','assets/pic/80.jpg');
    game.load.image('81','assets/pic/81.jpg');
    game.load.image('82','assets/pic/82.jpg');
    game.load.image('83','assets/pic/83.jpg');
    game.load.image('90','assets/pic/90.jpg');
    game.load.image('91','assets/pic/91.jpg');
    game.load.image('92','assets/pic/92.jpg');
    game.load.image('93','assets/pic/93.jpg');
    game.load.image('100','assets/pic/100.jpg');
    game.load.image('101','assets/pic/101.jpg');
    game.load.image('102','assets/pic/102.jpg');
    game.load.image('103','assets/pic/103.jpg');
    game.load.image('110','assets/pic/110.jpg');
    game.load.image('111','assets/pic/111.jpg');
    game.load.image('112','assets/pic/112.jpg');
    game.load.image('113','assets/pic/113.jpg');
    game.load.image('120','assets/pic/120.jpg');
    game.load.image('121','assets/pic/121.jpg');
    game.load.image('122','assets/pic/122.jpg');
    game.load.image('123','assets/pic/123.jpg');
    game.load.image('130','assets/pic/130.jpg');
    game.load.image('131','assets/pic/131.jpg');
    game.load.image('132','assets/pic/132.jpg');
    game.load.image('133','assets/pic/133.jpg');
    game.load.spritesheet('bubble', 'assets/sprites/prompt.png',5,5);
};

/*Maingame.create = function(){
    Maingame.music = game.add.audio('intro');
    Maingame.music.play();
    Maingame.bg = game.add.tileSprite(0, 0, 1920, 1080, 'log_background');
    Maingame.display();
};*/


Maingame.display = function(){
    Maingame.musicon_btn = game.add.button(1700,0,'musiconbtn',Maingame.switch_musicoff,this);
    Maingame.start();
};

Maingame.ready = function(btn){
    btn.kill();
    Maingame.tick = game.add.image(500,500,'tick');
    Maingame.start();

};

Maingame.switch_musicoff = function(){
    Login.music.stop();
    Maingame.musicon_btn.kill();
    Maingame.musicoff_btn= game.add.button(1700,0,'musicoffbtn',Maingame.switch_musicon,this);
};

Maingame.switch_musicon =function(){
    Login.music.play();
    Maingame.musicoff_btn.kill();
    Maingame.musicon_btn = game.add.button(1700,0,'musiconbtn',Maingame.switch_musicoff,this); 
};//two functions above can control the music on/off 

Maingame.pretostart =function(){
    
    if(Client.status=='master'){
        Maingame.pile();
        Board.send_pile_message(Maingame.pile1);
        Maingame.whooseturn=Maingame.firstround();
        Board.send_firstturn(Maingame.whooseturn);
        if(Maingame.whooseturn==0){
        Maingame.showcard(Maingame.pile0,0);
        }
        Maingame.showopcard(Maingame.num_opcard);
        Maingame.musicon_btn = game.add.button(1700,0,'musiconbtn',Maingame.switch_musicoff,this);
        Maingame.start();
    }
};//pretostart function is used for 'master', pretostart function for 'guest' is in guestborad.js
//start function below can allow 'master' or 'guest' to play cards correctly in order
Maingame.start =function(){
    if(Client.status=='master'){
        if(Maingame.whooseturn==0){
            console.log(Maingame.numopplayedcard);
            if(Maingame.numopplayedcard!=0){
            if(Maingame.num_opcard>0) Maingame.cardback0.kill();
            if(Maingame.num_opcard>1) Maingame.cardback1.kill();
            if(Maingame.num_opcard>2) Maingame.cardback2.kill();
            if(Maingame.num_opcard>3) Maingame.cardback3.kill();
            if(Maingame.num_opcard>4) Maingame.cardback4.kill();
            if(Maingame.num_opcard>5) Maingame.cardback5.kill();
            if(Maingame.num_opcard>6) Maingame.cardback6.kill();
            if(Maingame.num_opcard>7) Maingame.cardback7.kill();
            if(Maingame.num_opcard>8) Maingame.cardback8.kill();
            if(Maingame.num_opcard>9) Maingame.cardback9.kill();
            if(Maingame.num_opcard>10) Maingame.cardback10.kill();
            if(Maingame.num_opcard>11) Maingame.cardback11.kill();
            if(Maingame.num_opcard>12) Maingame.cardback12.kill();
            if(Maingame.num_opcard>13) Maingame.cardback13.kill();
            if(Maingame.num_opcard>14) Maingame.cardback14.kill();
            if(Maingame.num_opcard>15) Maingame.cardback15.kill();
            Maingame.num_opcard=Maingame.num_opcard-Maingame.numopplayedcard;
            Maingame.showopcard(Maingame.num_opcard);
            }//reload op cards(only pokerback) after op played cards
            Maingame.showcard(Maingame.opplayedcard,2);//load op played cards
            if(Maingame.numlastturn>0) Maingame.playedcard0.kill();
            if(Maingame.numlastturn>1) Maingame.playedcard1.kill();
            if(Maingame.numlastturn>2) Maingame.playedcard2.kill();
            if(Maingame.numlastturn>3) Maingame.playedcard3.kill();
            if(Maingame.numlastturn>4) Maingame.playedcard4.kill();
            if(Maingame.numlastturn>5) Maingame.playedcard5.kill();
            if(Maingame.numlastturn>6) Maingame.playedcard6.kill();
            if(Maingame.numlastturn>7) Maingame.playedcard7.kill();
            if(Maingame.numlastturn>8) Maingame.playedcard8.kill();
            if(Maingame.numlastturn>9) Maingame.playedcard9.kill();
            if(Maingame.numlastturn>10) Maingame.playedcard10.kill();
            if(Maingame.numlastturn>11) Maingame.playedcard11.kill();
            if(Maingame.numlastturn>12) Maingame.playedcard12.kill();
            if(Maingame.numlastturn>13) Maingame.playedcard13.kill();
            if(Maingame.numlastturn>14) Maingame.playedcard14.kill();
            if(Maingame.numlastturn>15) Maingame.playedcard15.kill();//delete cards you played last turn
            for(i=0;i<16;i++) Maingame.select[i]=0;
            if(Maingame.numopplayedcard==0) Maingame.playcardbtn = game.add.button(790,650,'playcardbtn',Maingame.playcard,this);
            else{
                Maingame.playcardbtn = game.add.button(590,650,'playcardbtn',Maingame.playcard,this);
                Maingame.endturnbtn = game.add.button(990,650,'endturnbtn',Maingame.endturn,this);
            }//show playcard button and endturn button(when op played card last turn)
        }
        if(Maingame.whooseturn==1){
            Maingame.showcard(Maingame.pile0,0);
        }
    }
    if(Client.status=='guest'){
        if(Maingame.whooseturn==1){
            console.log(Maingame.numopplayedcard);
            if(Maingame.restcard==16&&Maingame.numopplayedcard==0) {
                Maingame.showopcard(Maingame.num_opcard);
                Maingame.showcard(Maingame.pile0,0);
                Maingame.musicon_btn = game.add.button(1700,0,'musiconbtn',Maingame.switch_musicoff,this);
            }

            if(Maingame.numopplayedcard!=0){
            if(Maingame.num_opcard>0) Maingame.cardback0.kill();
            if(Maingame.num_opcard>1) Maingame.cardback1.kill();
            if(Maingame.num_opcard>2) Maingame.cardback2.kill();
            if(Maingame.num_opcard>3) Maingame.cardback3.kill();
            if(Maingame.num_opcard>4) Maingame.cardback4.kill();
            if(Maingame.num_opcard>5) Maingame.cardback5.kill();
            if(Maingame.num_opcard>6) Maingame.cardback6.kill();
            if(Maingame.num_opcard>7) Maingame.cardback7.kill();
            if(Maingame.num_opcard>8) Maingame.cardback8.kill();
            if(Maingame.num_opcard>9) Maingame.cardback9.kill();
            if(Maingame.num_opcard>10) Maingame.cardback10.kill();
            if(Maingame.num_opcard>11) Maingame.cardback11.kill();
            if(Maingame.num_opcard>12) Maingame.cardback12.kill();
            if(Maingame.num_opcard>13) Maingame.cardback13.kill();
            if(Maingame.num_opcard>14) Maingame.cardback14.kill();
            if(Maingame.num_opcard>15) Maingame.cardback15.kill();

            Maingame.num_opcard=Maingame.num_opcard-Maingame.numopplayedcard;
            Maingame.showopcard(Maingame.num_opcard);
            }

            Maingame.showcard(Maingame.opplayedcard,2);
            if(Maingame.numlastturn>0) Maingame.playedcard0.kill();
            if(Maingame.numlastturn>1) Maingame.playedcard1.kill();
            if(Maingame.numlastturn>2) Maingame.playedcard2.kill();
            if(Maingame.numlastturn>3) Maingame.playedcard3.kill();
            if(Maingame.numlastturn>4) Maingame.playedcard4.kill();
            if(Maingame.numlastturn>5) Maingame.playedcard5.kill();
            if(Maingame.numlastturn>6) Maingame.playedcard6.kill();
            if(Maingame.numlastturn>7) Maingame.playedcard7.kill();
            if(Maingame.numlastturn>8) Maingame.playedcard8.kill();
            if(Maingame.numlastturn>9) Maingame.playedcard9.kill();
            if(Maingame.numlastturn>10) Maingame.playedcard10.kill();
            if(Maingame.numlastturn>11) Maingame.playedcard11.kill();
            if(Maingame.numlastturn>12) Maingame.playedcard12.kill();
            if(Maingame.numlastturn>13) Maingame.playedcard13.kill();
            if(Maingame.numlastturn>14) Maingame.playedcard14.kill();
            if(Maingame.numlastturn>15) Maingame.playedcard15.kill();
            for(i=0;i<16;i++) Maingame.select[i]=0;
            if(Maingame.numopplayedcard==0) Maingame.playcardbtn = game.add.button(790,650,'playcardbtn',Maingame.playcard,this);
            else{
                Maingame.playcardbtn = game.add.button(590,650,'playcardbtn',Maingame.playcard,this);
                Maingame.endturnbtn = game.add.button(990,650,'endturnbtn',Maingame.endturn,this);
            }
        }
        if(Maingame.whooseturn==0){
            if(Maingame.restcard==16&&Maingame.num_opcard==16) Maingame.showopcard(Maingame.num_opcard); 
            Maingame.showcard(Maingame.pile0,0);
        }
    }
};

Maingame.playcard =function(){
    var i=0;
    var j=0;
    var temp=0;
    var cnt=0;
    var flag=false;
    var pretoplay= new Array(16).fill(0);//cards prepared to play (array)
    
    var playedcardtype=0;
    for(i=0;i<16;i++){
        if(Maingame.select[i]!=0) {
            pretoplay[cnt]=Maingame.select[i];
            cnt++;
        }
    }
    for(i=0;i<cnt-1;i++){
        　　　　　　for(j=0;j<cnt-1-i;j++){
        　　　　　　　　if(pretoplay[j]>pretoplay[j+1]){
        　　　　　　　　　　temp=pretoplay[j];
        　　　　　　　　　　pretoplay[j]=pretoplay[j+1];
        　　　　　　　　　　pretoplay[j+1]=temp;
        　　　　　　　　}
        　　　　　　}
        　　　　}
        
    //to verify wheather cards you want to play are followed rules
    switch(cnt){
        case 0: {flag=false; playedcardtype=0; break;}//0 card:not exist
        case 1: {flag=true; playedcardtype=2; break;}//1 card:exist
        case 2: {
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)){
                flag=true;
                playedcardtype=3;
                break;
            }
            break;
        }//2cards: exist in pairs
        case 3: {
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[1]/10)==Math.floor(pretoplay[2]/10)){
                flag=true;
                playedcardtype=4;
                break;
            }
            break; 
        }//3cards:exist in three of kind
        case 4: {
            if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[1]/10)==1&&Math.floor(pretoplay[2]/10)==1){
                flag=true;
                playedcardtype=1;
                break;
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[1]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)){
                flag=true;
                playedcardtype=1;
                break;
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)){
                if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)){
                    flag=true;
                    playedcardtype=6;
                    break;
                }
                if(Math.floor(pretoplay[1]/10)+12==Math.floor(pretoplay[2]/10)){
                    flag=true;
                    playedcardtype=6;
                    break;
                }
            }
            break;
        }//bomb or shift pairs
        case 5: {
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[1]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)){
                flag=true;
                playedcardtype=5;
                break;
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)){
                flag=true;
                playedcardtype=5;
                break;
            }
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[4]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            break;
        }//3+2 or straight
        case 6: {
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[5]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }

            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[4]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[5]/10)){
                if(true){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[3]/10)){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[3]/10)==13){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                }
            }
            break;
        }//shift pairs,shift three of kind,straight
        case 7: {
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[6]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            break;
        }//straight
        case 8: {
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[7]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[7]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[6]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[6]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            break;
        }//shift pairs,straight
        case 9: {
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[7]/10)+1==Math.floor(pretoplay[8]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[8]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[8]/10)){
                if(Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[6]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[3]/10)){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[6]/10)==13){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                }
            }
            break;
        }//shift three of kind，straight
        case 10:{
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[7]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[9]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[9]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }

            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[8]/10)==Math.floor(pretoplay[9]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[8]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[8]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            break;
        }//shift pairs,straight
        case 11:{
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[7]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[9]/10)+1==Math.floor(pretoplay[10]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[10]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            break;
        }//straight
        case 12:{
            if(Math.floor(pretoplay[1]/10)+1==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[5]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[7]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[9]/10)+1==Math.floor(pretoplay[10]/10)&&Math.floor(pretoplay[10]/10)+1==Math.floor(pretoplay[11]/10)){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[11]/10)==13){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
                if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[1]/10)){
                    flag=true;
                    playedcardtype=8;
                    break;
                }
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[8]/10)==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[10]/10)==Math.floor(pretoplay[11]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[10]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[10]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[9]/10)==Math.floor(pretoplay[10]/10)&&Math.floor(pretoplay[9]/10)==Math.floor(pretoplay[11]/10)){
                if(Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[9]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[3]/10)){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[9]/10)==13){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                }
            }
            break;
        }//straight(3-A),shift pairs，shift three of kind
        case 13:{
            playedcardtype=0;
            break;
        }//no exist
        case 14:{
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[8]/10)==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[10]/10)==Math.floor(pretoplay[11]/10)&&Math.floor(pretoplay[12]/10)==Math.floor(pretoplay[13]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[10]/10)&&Math.floor(pretoplay[10]/10)+1==Math.floor(pretoplay[12]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[12]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            break;
        }//shift pairs
        case 15:{
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[2]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[3]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[9]/10)==Math.floor(pretoplay[10]/10)&&Math.floor(pretoplay[9]/10)==Math.floor(pretoplay[11]/10)&&Math.floor(pretoplay[12]/10)==Math.floor(pretoplay[13]/10)&&Math.floor(pretoplay[12]/10)==Math.floor(pretoplay[14]/10)){
                if(Math.floor(pretoplay[3]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[9]/10)+1==Math.floor(pretoplay[12]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[3]/10)){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[12]/10)==13){
                        flag=true;
                        playedcardtype=7;
                        break;
                    }
                }
            }
            break;
        }//shift three of kind
        case 16:{
            if(Math.floor(pretoplay[0]/10)==Math.floor(pretoplay[1]/10)&&Math.floor(pretoplay[2]/10)==Math.floor(pretoplay[3]/10)&&Math.floor(pretoplay[4]/10)==Math.floor(pretoplay[5]/10)&&Math.floor(pretoplay[6]/10)==Math.floor(pretoplay[7]/10)&&Math.floor(pretoplay[8]/10)==Math.floor(pretoplay[9]/10)&&Math.floor(pretoplay[10]/10)==Math.floor(pretoplay[11]/10)&&Math.floor(pretoplay[12]/10)==Math.floor(pretoplay[13]/10)&&Math.floor(pretoplay[14]/10)==Math.floor(pretoplay[15]/10)){
                if(Math.floor(pretoplay[2]/10)+1==Math.floor(pretoplay[4]/10)&&Math.floor(pretoplay[4]/10)+1==Math.floor(pretoplay[6]/10)&&Math.floor(pretoplay[6]/10)+1==Math.floor(pretoplay[8]/10)&&Math.floor(pretoplay[8]/10)+1==Math.floor(pretoplay[10]/10)&&Math.floor(pretoplay[10]/10)+1==Math.floor(pretoplay[12]/10)&&Math.floor(pretoplay[12]/10)+1==Math.floor(pretoplay[14]/10)){
                    if(Math.floor(pretoplay[0]/10)+1==Math.floor(pretoplay[2]/10)){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                    if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[14]/10)==13){
                        flag=true;
                        playedcardtype=6;
                        break;
                    }
                }
            }
            break;

        }//shift pairs
        default: break;
    }
    
    //compare cards you prepare to play with cards you op played
    
    switch(Maingame.opplayedcardtype){
        //different card types 1=bomb,2=single，3=pair，4=three of kind，5=3+2，6=shift pairs,7=shift three of kind，8=straight
        case 0: break;
        case 1: {
            if(playedcardtype==1){
                if(Math.floor(pretoplay[0]/10)==1||pretoplay[0]>Maingame.opplayedcard[0]) break; 
            }
            flag=false;
            break;
        }
        case 2: {
            if(playedcardtype==1) break;
            if(playedcardtype==2){
                if(Math.floor(pretoplay[0]/10)==2) break;
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(Maingame.opplayedcard[0]/10)>=3) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)&&Math.floor(Maingame.opplayedcard[0]>=3)) break;
            }
            flag=false;
            break;
        }
        case 3: {
            if(playedcardtype==1) break;
            if(playedcardtype==3){
                if(Math.floor(pretoplay[0]/10)==1) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)&&Math.floor(Maingame.opplayedcard[0]/10)!=1) break;
            }
            flag=false;
            break;
        }
        case 4: {
            if(playedcardtype==1) break;
            if(playedcardtype==4){
                if(Math.floor(pretoplay[0]/10)==1) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)&&Math.floor(Maingame.opplayedcard[0]/10)!=1) break;

            }
            flag=false;
            break;
        }
        case 5:{
            if(playedcardtype==1) break;
            if(playedcardtype==5){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[2]/10)==1) break;
                if(Math.floor(Maingame.opplayedcard[0]/10)==1&&Math.floor(Maingame.opplayedcard[2]/10)==1){
                    flag=false;
                    break;
                }
                if(Math.floor(pretoplay[2]/10)>Math.floor(Maingame.opplayedcard[2]/10)) break;
            }
            flag=false;
            break;
        }
        case 6:{
            if(playedcardtype==1) break;
            if(playedcardtype==6&&cnt==Maingame.numopplayedcard){
                if(Math.floor(pretoplay[0]/10)==1) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)&&Math.floor(Maingame.opplayedcard[0]/10)!=1) break;

            }
            flag=false;
            break;
        }
        case 7:{
            if(playedcardtype==1) break;
            if(playedcardtype==7&&cnt==Maingame.numopplayedcard){
                if(Math.floor(pretoplay[0]/10)==1) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)&&Math.floor(Maingame.opplayedcard[0]/10)!=1) break;

            }
            flag=false;
            break;
        }
        case 8:{
            if(playedcardtype==1) break;
            if(playedcardtype==8&&cnt==Maingame.numopplayedcard){
                if(Math.floor(pretoplay[0]/10)==1&&Math.floor(pretoplay[cnt-1]/10)==13) break;
                if(Math.floor(pretoplay[0]/10)>Math.floor(Maingame.opplayedcard[0]/10)) break;
            }
            flag=false;
            break;
        }
    } 


    if(flag){
        Maingame.showcard(pretoplay,1);//show cards you want to play
        Maingame.playcardbtn.kill();
        if(Maingame.numopplayedcard>0) Maingame.endturnbtn.kill();//delete playcard/endturn button

        for(i=0;i<16;i++){
            for(j=0;j<cnt;j++){
                if(Maingame.pile0[i]==pretoplay[j]) Maingame.pile0[i]=0;
            }
        }//change the card(in hand) value to 0
        
        if(Maingame.restcard>0)Maingame.card0.kill();
        if(Maingame.restcard>1)Maingame.card1.kill();
        if(Maingame.restcard>2)Maingame.card2.kill();
        if(Maingame.restcard>3)Maingame.card3.kill();
        if(Maingame.restcard>4)Maingame.card4.kill();
        if(Maingame.restcard>5)Maingame.card5.kill();
        if(Maingame.restcard>6)Maingame.card6.kill();
        if(Maingame.restcard>7)Maingame.card7.kill();
        if(Maingame.restcard>8)Maingame.card8.kill();
        if(Maingame.restcard>9)Maingame.card9.kill();
        if(Maingame.restcard>10)Maingame.card10.kill();
        if(Maingame.restcard>11)Maingame.card11.kill();
        if(Maingame.restcard>12)Maingame.card12.kill();
        if(Maingame.restcard>13)Maingame.card13.kill();
        if(Maingame.restcard>14)Maingame.card14.kill();
        if(Maingame.restcard>15)Maingame.card15.kill();//delete all cards in hand
        Maingame.restcard=Maingame.restcard-cnt;//change the value of Maingame.restcard
        if(Maingame.numopplayedcard>0) Maingame.opplayedcard0.kill();
        if(Maingame.numopplayedcard>1) Maingame.opplayedcard1.kill();
        if(Maingame.numopplayedcard>2) Maingame.opplayedcard2.kill();
        if(Maingame.numopplayedcard>3) Maingame.opplayedcard3.kill();
        if(Maingame.numopplayedcard>4) Maingame.opplayedcard4.kill();
        if(Maingame.numopplayedcard>5) Maingame.opplayedcard5.kill();
        if(Maingame.numopplayedcard>6) Maingame.opplayedcard6.kill();
        if(Maingame.numopplayedcard>7) Maingame.opplayedcard7.kill();
        if(Maingame.numopplayedcard>8) Maingame.opplayedcard8.kill();
        if(Maingame.numopplayedcard>9) Maingame.opplayedcard9.kill();
        if(Maingame.numopplayedcard>10) Maingame.opplayedcard10.kill();
        if(Maingame.numopplayedcard>11) Maingame.opplayedcard11.kill();
        if(Maingame.numopplayedcard>12) Maingame.opplayedcard12.kill();
        if(Maingame.numopplayedcard>13) Maingame.opplayedcard13.kill();
        if(Maingame.numopplayedcard>14) Maingame.opplayedcard14.kill();
        if(Maingame.numopplayedcard>15) Maingame.opplayedcard15.kill();//delete all cards op played

        if(Maingame.restcard==0&&Client.status=='master') Board.endgame();
        if(Maingame.restcard==0&&Client.status=='guest') Guestboard.endgame();
        
        if(Client.status=='master'){
            Maingame.whooseturn=1;//next is op turn
            Board.send_playedcardmessage(pretoplay);
            Board.send_playedcardtype(playedcardtype);
            Board.send_numplayedcard(cnt);//convey card message
            Board.send_turn(1);
            Maingame.start();
        }
        if(Client.status=='guest'){
            Maingame.whooseturn=0;//next is op turn
            Guestboard.send_playedcardmessage(pretoplay);
            Guestboard.send_playedcardtype(playedcardtype);
            Guestboard.send_numplayedcard(cnt);
            Guestboard.send_turn(0);
            Maingame.start();
        }
        
    }
};


Maingame.pile =function(){
    var cnt =0;
    var cnt0 =0;
    var cnt1 =0;
    var cnt2 =0;
    var rand =0; 
    //discard heart 2(21), club 2(22),diamond 2(23), spade A(10)
    while(cnt!=3)
    {
        rand = Math.floor(Math.random()*3);
        switch(rand){
            case 0:{ 
                Maingame.pile0[cnt0]=cnt+11;
                cnt++;
                cnt0++;
                break;
            }
            case 1:{
                Maingame.pile1[cnt1]=cnt+11;
                cnt++;
                cnt1++;
                break;
            }
            case 2:{
                Maingame.pile2[cnt2]=cnt+11;
                cnt++;
                cnt2++;
                break;
            }
            default: break;
        }
    }
    rand = Math.floor(Math.random()*3);
        switch(rand){
            case 0:{ 
                Maingame.pile0[cnt0]=20;
                cnt++;
                cnt0++;
                break;
            }
            case 1:{
                Maingame.pile1[cnt1]=20;
                cnt++;
                cnt1++;
                break;
            }
            case 2:{
                Maingame.pile2[cnt2]=20;
                cnt++;
                cnt2++;
                break;
            }
            default: break;
        }
    while(cnt!=48)
    {
        rand = Math.floor(Math.random()*3);
        switch(rand){
            case 0:{
                if(cnt0<16){
                    Maingame.pile0[cnt0]=(Math.floor(cnt/4)+2)*10+cnt%4;
                    cnt0++;
                    cnt++;
                    break;
                }
                else{
                    rand = Math.floor(Math.random()*2);
                    if((rand==0&&cnt1<16)||cnt2==16){
                        Maingame.pile1[cnt1]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt1++;
                        cnt++;
                        break;
                    }
                    if((rand==1&&cnt2<16)||cnt1==16){
                        Maingame.pile2[cnt2]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt2++;
                        cnt++;
                        break;
                    }
                }
            }
            case 1:{
                if(cnt1<16){
                    Maingame.pile1[cnt1]=(Math.floor(cnt/4)+2)*10+cnt%4;
                    cnt1++;
                    cnt++;
                    break;
                }
                else{
                    rand = Math.floor(Math.random()*2);
                    if((rand==0&&cnt0<16)||cnt2==16){
                        Maingame.pile0[cnt0]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt0++;
                        cnt++;
                        break;
                    }
                    if((rand==1&&cnt2<16)||cnt0==16){
                        Maingame.pile2[cnt2]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt2++;
                        cnt++;
                        break;
                    }
                }
            }
            case 2:{
                if(cnt2<16){
                    Maingame.pile2[cnt2]=(Math.floor(cnt/4)+2)*10+cnt%4;
                    cnt2++;
                    cnt++;
                    break;
                }
                else{
                    rand = Math.floor(Math.random()*2);
                    if((rand==0&&cnt0<16)||cnt1==16){
                        Maingame.pile0[cnt0]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt0++;
                        cnt++;
                        break;
                    }
                    if((rand==1&&cnt1<16)||cnt0==16){
                        Maingame.pile1[cnt1]=(Math.floor(cnt/4)+2)*10+cnt%4;
                        cnt1++;
                        cnt++;
                        break;
                    }
                }
            }
            default: break;
        }
    }
};
//show cards in three different areas(your hand\your played\op played)
Maingame.showcard = function(pile,type){
    var cnt=0;
    var i=0;
    var element=0;
    var cntplus=130;
    var flag=0;
    var pileinorder = new Array(16).fill(0);
    for(i=0;i<16;i++)
    if(pile[i]>=10&&pile[i]<=133) element++;

if(type==0){
    for(i=0;i<16;i++) {
        if(pile[i]==20){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==11){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==12){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==13){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }

while(cntplus!=20 ){
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus=cntplus-13;
}
    if(cnt>0) Maingame.card0=game.add.button(460+(16-element)*25,800,String(pileinorder[0]),Maingame.selectcard,this);
    if(cnt>1) Maingame.card1=game.add.button(510+(16-element)*25,800,String(pileinorder[1]),Maingame.selectcard,this);
    if(cnt>2) Maingame.card2=game.add.button(560+(16-element)*25,800,String(pileinorder[2]),Maingame.selectcard,this);
    if(cnt>3) Maingame.card3=game.add.button(610+(16-element)*25,800,String(pileinorder[3]),Maingame.selectcard,this);
    if(cnt>4) Maingame.card4=game.add.button(660+(16-element)*25,800,String(pileinorder[4]),Maingame.selectcard,this);
    if(cnt>5) Maingame.card5=game.add.button(710+(16-element)*25,800,String(pileinorder[5]),Maingame.selectcard,this);
    if(cnt>6) Maingame.card6=game.add.button(760+(16-element)*25,800,String(pileinorder[6]),Maingame.selectcard,this);
    if(cnt>7) Maingame.card7=game.add.button(810+(16-element)*25,800,String(pileinorder[7]),Maingame.selectcard,this);
    if(cnt>8) Maingame.card8=game.add.button(860+(16-element)*25,800,String(pileinorder[8]),Maingame.selectcard,this);
    if(cnt>9) Maingame.card9=game.add.button(910+(16-element)*25,800,String(pileinorder[9]),Maingame.selectcard,this);
    if(cnt>10) Maingame.card10=game.add.button(960+(16-element)*25,800,String(pileinorder[10]),Maingame.selectcard,this);
    if(cnt>11) Maingame.card11=game.add.button(1010+(16-element)*25,800,String(pileinorder[11]),Maingame.selectcard,this);
    if(cnt>12) Maingame.card12=game.add.button(1060+(16-element)*25,800,String(pileinorder[12]),Maingame.selectcard,this);
    if(cnt>13) Maingame.card13=game.add.button(1110+(16-element)*25,800,String(pileinorder[13]),Maingame.selectcard,this);
    if(cnt>14) Maingame.card14=game.add.button(1160+(16-element)*25,800,String(pileinorder[14]),Maingame.selectcard,this);
    if(cnt>15) Maingame.card15=game.add.button(1210+(16-element)*25,800,String(pileinorder[15]),Maingame.selectcard,this);
//add cards as buttons
}
if(type==1){
    for(i=0;i<16;i++) {
        if(pile[i]==20){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==11){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==12){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    for(i=0;i<16;i++) {
        if(pile[i]==13){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }

while(cntplus!=20 ){
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus++;
    for(i=0;i<16;i++) {
        if(pile[i]==cntplus){
            pileinorder[cnt]=pile[i];
            cnt++;
        }
    }
    cntplus=cntplus-13;
}
if(cnt>0) Maingame.playedcard0=game.add.image(460+(16-element)*25,600,String(pileinorder[0]));
if(cnt>1) Maingame.playedcard1=game.add.image(510+(16-element)*25,600,String(pileinorder[1]));
if(cnt>2) Maingame.playedcard2=game.add.image(560+(16-element)*25,600,String(pileinorder[2]));
if(cnt>3) Maingame.playedcard3=game.add.image(610+(16-element)*25,600,String(pileinorder[3]));
if(cnt>4) Maingame.playedcard4=game.add.image(660+(16-element)*25,600,String(pileinorder[4]));
if(cnt>5) Maingame.playedcard5=game.add.image(710+(16-element)*25,600,String(pileinorder[5]));
if(cnt>6) Maingame.playedcard6=game.add.image(760+(16-element)*25,600,String(pileinorder[6]));
if(cnt>7) Maingame.playedcard7=game.add.image(810+(16-element)*25,600,String(pileinorder[7]));
if(cnt>8) Maingame.playedcard8=game.add.image(860+(16-element)*25,600,String(pileinorder[8]));
if(cnt>9) Maingame.playedcard9=game.add.image(910+(16-element)*25,600,String(pileinorder[9]));
if(cnt>10) Maingame.playedcard10=game.add.image(960+(16-element)*25,600,String(pileinorder[10]));
if(cnt>11) Maingame.playedcard11=game.add.image(1010+(16-element)*25,600,String(pileinorder[11]));
if(cnt>12) Maingame.playedcard12=game.add.image(1060+(16-element)*25,600,String(pileinorder[12]));
if(cnt>13) Maingame.playedcard13=game.add.image(1110+(16-element)*25,600,String(pileinorder[13]));
if(cnt>14) Maingame.playedcard14=game.add.image(1160+(16-element)*25,600,String(pileinorder[14]));
if(cnt>15) Maingame.playedcard15=game.add.image(1210+(16-element)*25,600,String(pileinorder[15]));
Maingame.numlastturn=cnt;
//add cards as images
}
if(type==2){
if(Maingame.numopplayedcard>0) Maingame.opplayedcard0=game.add.image(460+(16-element)*25,400,String(Maingame.opplayedcard[0]));
if(Maingame.numopplayedcard>1) Maingame.opplayedcard1=game.add.image(510+(16-element)*25,400,String(Maingame.opplayedcard[1]));
if(Maingame.numopplayedcard>2) Maingame.opplayedcard2=game.add.image(560+(16-element)*25,400,String(Maingame.opplayedcard[2]));
if(Maingame.numopplayedcard>3) Maingame.opplayedcard3=game.add.image(610+(16-element)*25,400,String(Maingame.opplayedcard[3]));
if(Maingame.numopplayedcard>4) Maingame.opplayedcard4=game.add.image(660+(16-element)*25,400,String(Maingame.opplayedcard[4]));
if(Maingame.numopplayedcard>5) Maingame.opplayedcard5=game.add.image(710+(16-element)*25,400,String(Maingame.opplayedcard[5]));
if(Maingame.numopplayedcard>6) Maingame.opplayedcard6=game.add.image(760+(16-element)*25,400,String(Maingame.opplayedcard[6]));
if(Maingame.numopplayedcard>7) Maingame.opplayedcard7=game.add.image(810+(16-element)*25,400,String(Maingame.opplayedcard[7]));
if(Maingame.numopplayedcard>8) Maingame.opplayedcard8=game.add.image(860+(16-element)*25,400,String(Maingame.opplayedcard[8]));
if(Maingame.numopplayedcard>9) Maingame.opplayedcard9=game.add.image(910+(16-element)*25,400,String(Maingame.opplayedcard[9]));
if(Maingame.numopplayedcard>10) Maingame.opplayedcard10=game.add.image(960+(16-element)*25,400,String(Maingame.opplayedcard[10]));
if(Maingame.numopplayedcard>11) Maingame.opplayedcard11=game.add.image(1010+(16-element)*25,400,String(Maingame.opplayedcard[11]));
if(Maingame.numopplayedcard>12) Maingame.opplayedcard12=game.add.image(1060+(16-element)*25,400,String(Maingame.opplayedcard[12]));
if(Maingame.numopplayedcard>13) Maingame.opplayedcard13=game.add.image(1110+(16-element)*25,400,String(Maingame.opplayedcard[13]));
if(Maingame.numopplayedcard>14) Maingame.opplayedcard14=game.add.image(1160+(16-element)*25,400,String(Maingame.opplayedcard[14]));
if(Maingame.numopplayedcard>15) Maingame.opplayedcard15=game.add.image(1210+(16-element)*25,400,String(Maingame.opplayedcard[15]));

}
};
//selectcard function can determine which card is selected then store the data into selectcard array
Maingame.selectcard=function(btn){
    var i=0;
    if(btn.alive==true){
        btn.centerY-=50;
        btn.alive=false;
        for(i=0;i<16;i++){
            if(Maingame.select[i]==0) {
                Maingame.select[i]=parseInt(btn.key);
                
            

                break;
            }
        }
    }
    else{
        btn.centerY+=50;
        btn.alive=true;
        for(i=0;i<16;i++){
            if(Maingame.select[i]==parseInt(btn.key)){
                Maingame.select[i]=0;
                break;
            }
        }
    }
};
//show opcard in hand (pokerback)
Maingame.showopcard = function(num){
    var i=0;
    if(num>0) {Maingame.cardback0=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>1) {Maingame.cardback1=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>2) {Maingame.cardback2=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>3) {Maingame.cardback3=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>4) {Maingame.cardback4=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>5) {Maingame.cardback5=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>6) {Maingame.cardback6=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>7) {Maingame.cardback7=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>8) {Maingame.cardback8=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>9) {Maingame.cardback9=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>10) {Maingame.cardback10=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>11) {Maingame.cardback11=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>12) {Maingame.cardback12=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>13) {Maingame.cardback13=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>14) {Maingame.cardback14=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}
    if(num>15) {Maingame.cardback15=game.add.image(460+(16-num)*25+i*50,50,'pokerback'); i++;}

};
//to determine who is the first to play, it is determined by the initial piles
Maingame.firstround = function(){
    var i=0;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==30) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==30) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==40) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==40) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==50) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==50) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==60) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==60) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==70) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==70) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==80) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==80) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==90) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==90) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==100) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==100) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==110) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==110) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==120) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==120) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==130) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==130) return 1;
    for(i=0;i<16;i++) if(Maingame.pile0[i]==20) return 0;
    for(i=0;i<16;i++) if(Maingame.pile1[i]==20) return 1;

}; 
//endturn button function
Maingame.endturn = function(){
    var empty= new Array(16).fill(0);//to determine an empty array that convey an empty array to opplayedcard
    Maingame.playcardbtn.kill();
    Maingame.endturnbtn.kill();//delete two buttons

    if(Maingame.numopplayedcard>0)Maingame.opplayedcard0.kill();
    if(Maingame.numopplayedcard>1)Maingame.opplayedcard1.kill();
    if(Maingame.numopplayedcard>2)Maingame.opplayedcard2.kill();
    if(Maingame.numopplayedcard>3)Maingame.opplayedcard3.kill();
    if(Maingame.numopplayedcard>4)Maingame.opplayedcard4.kill();
    if(Maingame.numopplayedcard>5)Maingame.opplayedcard5.kill();
    if(Maingame.numopplayedcard>6)Maingame.opplayedcard6.kill();
    if(Maingame.numopplayedcard>7)Maingame.opplayedcard7.kill();
    if(Maingame.numopplayedcard>8)Maingame.opplayedcard8.kill();
    if(Maingame.numopplayedcard>9)Maingame.opplayedcard9.kill();
    if(Maingame.numopplayedcard>10)Maingame.opplayedcard10.kill();
    if(Maingame.numopplayedcard>11)Maingame.opplayedcard11.kill();
    if(Maingame.numopplayedcard>12)Maingame.opplayedcard12.kill();
    if(Maingame.numopplayedcard>13)Maingame.opplayedcard13.kill();
    if(Maingame.numopplayedcard>14)Maingame.opplayedcard14.kill();
    if(Maingame.numopplayedcard>15)Maingame.opplayedcard15.kill();//delete last turn op playedcard
    
    if(Client.status=='master'){
        Board.send_playedcardmessage(empty);
        Board.send_numplayedcard(0);
        Board.send_playedcardtype(0);
        Maingame.whooseturn=1;
        Board.send_turn(1);
        
    }
    if(Client.status=='guest'){
        Guestboard.send_playedcardmessage(empty);
        Guestboard.send_numplayedcard(0);
        Guestboard.send_playedcardtype(0);
        Maingame.whooseturn=0;
        Guestboard.send_turn(0);
        
    }
};
