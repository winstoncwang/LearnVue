
const App = Vue.createApp({
    data(){
        return{
            userInputParagraph:'',
            userInputConfirmed:''
        }
    },

    methods:{
        userInput(event){
            this.userInputParagraph= event.target.value
        },
        userInputEnter(){
            this.userInputConfirmed= this.userInputParagraph
        },
        showAlert(){
            alert('This is an alert message!!!')
        }
    }
})

App.mount('#assignment')