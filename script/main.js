// console.log("Vue: ", Vue);


//Plugins

dayjs.extend(dayjs_plugin_customParseFormat);



const vm = new Vue({  //Vue instance
    el: "#vm",
    data: {
    contacts: [   // array of objects
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Luisa',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
    ],
    userIndex: 0, //Starting from 0, as it occurs with index
    userMessage:"",
    searchBar:"",
    
},
    methods: {
        currentUser(index){
         // console.log("Clicked here!");
         // console.log(index);
         // console.log(this.contacts[index]);  can see the entire object and its own properties
          this.userIndex= index;  // userindex = variable I've set above!
         // console.log(this.userIndex); // Clicking 'Luisa' - get 3 (her position index)
         // console.log("messages", this.contacts[this.userIndex].messages);
         // console.log("date", this.contacts[this.userIndex].date);
        },

        addConv(){
          //  console.log("New chat to be added here!");
            if(this.userMessage !== "") {
                this.contacts[this.userIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:SS'),
                    message: this.userMessage,
                    status: 'sent',
                });  
                this.userMessage="";
               setTimeout(this.addAnswer, 1000);
            }

        },
       
        addAnswer(){
            this.contacts[this.userIndex].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:SS'),
                message: 'Ok',
                status: 'received',
            });
            
        },

        userResearch() {
            console.log("text inserted");
            this.contacts.forEach((element)=>{
                if(element.name.includes(this.searchBar)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
            
        },

        
    } 
     
});