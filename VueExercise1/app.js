const App = Vue.createApp({
    data(){
        return{
            name:'Cong Wang',
            age:28,
            imageSrc:'https://i.ytimg.com/vi/w6fPVCdcVHk/maxresdefault.jpg'
        }
    },
    methods:{
        agePlusFive(){
            return this.age+5;
        },
        randomNumber(){
            return Math.random()
        }
    }
})

App.mount('#assignment')