<!DOCTYPE html>
<html>
<head>
    <title>Monster Slayer</title>
    <script src="vue.js"></script>
     <link rel="stylesheet" href="foundation.min.css">
    <link rel="stylesheet" href="app.css">
</head>
<body>
<div id="app">
    <section class="row">
        <div class="small-6 columns">
            <h1 class="text-center">YOU</h1>
            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: playerHealth + '%'}">
                 
                    {{playerHealth}}
                </div>
            </div>
        </div>
        <div class="small-6 columns">
            <h1 class="text-center">MONSTER</h1>
            <div class="healthbar">
                <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;" :style="{width: monsterHealth + '%'}">
{{monsterHealth}}
                </div>
            </div>
        </div>
    </section>
    <section class="row controls" v-if="!gameIsRunning">
        <div class="small-12 columns">
            <button id="start-game" @click="startGame">START NEW GAME</button>
        </div>
    </section>
    <section class="row controls" v-else>
        <div class="small-12 columns">
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="specialAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
    </section>
    <section class="row log">
        <div class="small-12 columns">
            <ul>
                <li>

                </li>
            </ul>
        </div>
    </section>
</div>
<script src="app.js"></script>
</body>
</html>




-------------


    new Vue({
    el:'#app',
    
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false
    },
    methods: {
        startGame: function(){
            this.gameIsRunning=true
            this.playerHealth=100
            this.monsterHealth=100
        },
        attack:function(){
           this.monsterHealth -=this.calculateDamage(3,10)
           if(this.checkWin()){
            return
           }
           this.playerHealth -=this.calculateDamage(5,12)
           this.checkWin() 
           
          
        },
        specialAttack:function(){
            this.monsterHealth -=this.calculateDamage(10,20)
            if(this.checkWin()){
             return
            }
           this.monsterAttack()
            
        },
        monsterAttack:function(){
            this.playerHealth -=this.calculateDamage(5,12)
            this.checkWin()
        },
        heal:function(){
            if(this.playerHealth <=90) {
                this.playerHealth +=10
            }else {
                this.playerHealth=100
            }
            this.monsterAttack()

        },
        giveUp:function(){
            this.gameIsRunning=false
            this.playerHealth=100
            this.monsterHealth=100
        },
        calculateDamage:function(min,max){
            return Math.max(Math.floor(Math.random() * max) +1,min)
        },
        checkWin: function(){
            if(this.monsterHealth <=0){
                if(confirm('You won the game ! wana play again?')){
                 this.startGame()
                }else {
                this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <=0) {
                if(confirm('You Lost the game ! wana play again?')){
                    this.startGame()
                   }else {
                   this.gameIsRunning = false
                   }
                   return true
            }
            return false
        }
    },
    
})
