/**
 * Milestone 1
 * *Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
 * *e dall’interlocutore (bianco) assegnando due classi CSS diverse
 * Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
 * visualizzare nome e immagine di ogni contatto
 * 
 * 
 * 
 */

let {createApp} = Vue;
createApp({
    data(){
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
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
                    avatar: './img/avatar_2.jpg',
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
                    avatar: './img/avatar_3.jpg',
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
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
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
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            myMessage: "my_message", 
            youMessage: "you_message",
            display: "none",//chiamo una funzione dove nella stringa richiamo la classe css Block
            pictureImg: "",
            indexElement: 0,
            namePerson: "", //QUANDO RICERCO UNA PERSONA NEL INPUT
            newMessageText: "", //NUOVO MESSAGGIO
            message: "ciao",
        }
    },
    methods:{
        getLastMessage(contactMessagesArray) {
            const last = contactMessagesArray[contactMessagesArray.length-1];
            const lastMessage = last.message;
            return lastMessage;
        },

        getDataMessage(messagesArray){
            const last = messagesArray[messagesArray.length-1];
            const lastDate = last.date;

            let date = lastDate.split(" ");

            //stringa in date today
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '/' + mm + '/' + yyyy;
            let yesteday = (dd - 1) + '/' + mm + '/' + yyyy;
            if(dd < 10){
                yesteday = "0" + yesteday;
            }
            
            //last day comparing today
            if(date[0] === formattedToday){
                let dateToday = date[1];
                dateToday = dateToday.split(":");
                dateToday.pop();
                let hour = dateToday.join(":");
                return hour;
            }
            else if(date[0] === yesteday){
                return "Ieri";
            }
            else{
                return date[0];
            }
           //return lastDate;
        },

        getArrayMessages(){
            let object = this.contacts[this.indexElement];
            //console.log(object.messages);
            let arrayMessage = object.messages;
            //in piu
            return arrayMessage;
            /*
            arrayMessaggi.forEach(element => {
                let messaggio = element.message;
                console.log(messaggio);
                //return messaggio;
            
            });
            */
            /*
            contatti.forEach((element, index) => {
                let messaggio = element.messages;
                console.log(messaggio);
                return index;
            
            });
            */
        },

        getIndex(index){
            this.indexElement = index;
            //console.log(this.indexElement);

            //getObject(this.indexElement);
            
            getImage(this.indexElement);
            getArrayMessages(this.indexElement);

            //getLastData(this.indexElement);
            return this.indexElement;
        },
        
        getName(index){
            index = this.indexElement;
            let OggettoInPosizione = this.contacts[index];
            //getName(OggettoInPosizione);
        
            let nome = OggettoInPosizione.name
            //console.log(nome);
            return nome;
            
        },

        getImage(index){
            index = this.indexElement;
            let OggettoInPosizione = this.contacts[index];
        
            let photoUser = OggettoInPosizione.avatar
            this.pictureImg = photoUser;
            //console.log(this.pictureImg);
            return this.pictureImg
        },

        getHour(elementi){
            let data = elementi.date;
            let arrayData = data.split(" ");
            let stringHour = arrayData[1];
            //console.log(stringHour);
            let arrayHour = stringHour.split(":");
            //console.log(arrayHour);
            let arrayHourMin = arrayHour.pop();
            //console.log(arrayHourMin);
            let strinHourMin = arrayHour.join(":");
            //console.log(strinHourMin);
            return strinHourMin;
        },
        
        getLastData(index){
            index = this.indexElement;
            let OggettoInPosizione = this.contacts[index];
            //console.log(OggettoInPosizione);
            let arrayMessaggi = OggettoInPosizione.messages;
            //console.log(arrayMessaggi);
            let last = arrayMessaggi[arrayMessaggi.length-1];
            //console.log(last);
            let ora = this.getLaData(last);
            //console.log(ora);
            return ora;
        },

        getLaData(elemento){
            let data = elemento.date;
            let arrayData = data.split(" ");
            let dataGiorno = arrayData[0];
            let avviso;
            //data di oggi
            let dataOggi = new Date();
            const yyyy = dataOggi.getFullYear();
            let mm = dataOggi.getMonth() + 1; // Months start at 0!
            let dd = dataOggi.getDate();
        
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
        
            dataOggi = dd + '/' + mm + '/' + yyyy;
            let yesterday = (dd - 1) + '/' + mm + '/' + yyyy;
            if(dd < 10){
                yesterday = "0" + yesterday;
            }
        
            if(dataGiorno === dataOggi){
                let stringHour = arrayData[1];
                //console.log(stringHour);
                let arrayHour = stringHour.split(":");
                //console.log(arrayHour);
                let arrayHourMin = arrayHour.pop();
                //console.log(arrayHourMin);
                let strinHourMin = arrayHour.join(":");
                //console.log(strinHourMin);
                avviso = "alle " + strinHourMin;
                return avviso;
            }
            else if(dataGiorno === yesterday){
                let stringHour = arrayData[1];
                //console.log(stringHour);
                let arrayHour = stringHour.split(":");
                //console.log(arrayHour);
                let arrayHourMin = arrayHour.pop();
                //console.log(arrayHourMin);
                let strinHourMin = arrayHour.join(":");
                //console.log(strinHourMin);
                avviso = "Ieri alle " + strinHourMin;
                return avviso;
            }
            else{
                avviso = "il " + dataGiorno;
                return avviso;
            }
        
            /*
            let data = elementi.date;
            let arrayData = data.split(" ");
            let stringHour = arrayData[1];
            //console.log(stringHour);
            let arrayHour = stringHour.split(":");
            //console.log(arrayHour);
            let arrayHourMin = arrayHour.pop();
            //console.log(arrayHourMin);
            let strinHourMin = arrayHour.join(":");
            //console.log(strinHourMin);
            return strinHourMin;
            */
        },

        newMessage(){
            let text = this.newMessageText;
            //console.log(text);
            let dataOggi = new Date();
            const yyyy = dataOggi.getFullYear();
            let mm = dataOggi.getMonth() + 1; // Months start at 0!
            let dd = dataOggi.getDate();

            let hour = dataOggi.getHours();
            let min = dataOggi.getMinutes();
            let sec = dataOggi.getSeconds();
        
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            if (hour < 10) hour = '0' + hour;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
        
            let day = dd + '/' + mm + '/' + yyyy;
            let hourMinSec =  hour + ':' + min + ':' + sec;
            dataOggi = day + " " + hourMinSec;

            let oggettoInPosizione = this.contacts[this.indexElement];
            let arrayMessaggi = oggettoInPosizione.messages;
            object = {
                date: dataOggi,
                message: text,
                status: 'sent',
            }
            arrayMessaggi.push(object);
            //console.log(arrayMessaggi);
            this.newMessageText = "";
            setTimeout(this.newMessageResponse, 1000);
        },

        newMessageResponse(){
            let text = "ok";
            //console.log(text);
            let dataOggi = new Date();
            const yyyy = dataOggi.getFullYear();
            let mm = dataOggi.getMonth() + 1; // Months start at 0!
            let dd = dataOggi.getDate();

            let hour = dataOggi.getHours();
            let min = dataOggi.getMinutes();
            let sec = dataOggi.getSeconds();
        
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            if (hour < 10) hour = '0' + hour;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
        
            let day = dd + '/' + mm + '/' + yyyy;
            let hourMinSec =  hour + ':' + min + ':' + sec;
            dataOggi = day + " " + hourMinSec;

            let oggettoInPosizione = this.contacts[this.indexElement];
            let arrayMessaggi = oggettoInPosizione.messages;
            object = {
                date: dataOggi,
                message: text,
                status: 'received',
            }
            arrayMessaggi.push(object);
            //console.log(arrayMessaggi);
        },

        searchPerson(){
            let parola = this.namePerson;
            this.contacts.forEach(element => {
                let nome = element.name;
                let nomeGrande = nome.toUpperCase();
                let parolaGrande = parola.toUpperCase();
                if(nomeGrande.includes(parolaGrande)){
                    element.visible = true;
                    //console.log(nome, element.visible);
                }
                else{
                    element.visible = false;
                    //console.log(nome, element.visible);
                }
                
            });
            //console.log();
        },

        returnType(index){
            console.log(index);
            let tipo = typeof index;
            console.log(tipo);
            return tipo;
        },

        boxFunctionMessage(index){
            let oggetto = this.contacts[this.indexElement];
            let arrayMessaggi = oggetto.messages;
            let messaggio = arrayMessaggi[index];
            console.log(messaggio);
        },

        deleteMessage(index){
            let oggetto = this.contacts[this.indexElement];
            let arrayMessage = oggetto.messages;
            arrayMessage.splice(index, 1);
            console.log(arrayMessage);
        }

    },
    mounted(){
        //newMessage();
    },
}).mount("#app"); 

/*
const today = new Date("May 05, 2023 23:10:00");
//const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '/' + mm + '/' + yyyy;
let yesterday = (dd - 01) + '/' + mm + '/' + yyyy;
if(dd < 10){
    yesterday = "0" + yesterday
}

console.log(formattedToday);
console.log(yesterday);
*/

let contatti = [
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
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
        avatar: './img/avatar_2.jpg',
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
        avatar: './img/avatar_3.jpg',
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
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
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
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ]
    }
];

function getElement(){
    contatti.forEach(element => {
        //console.log(element.name);
    });
}

function getArrayMessages(objectArray){
    let messaggi = contatti[objectArray];
    //console.log(messaggi.messages);
    let arrayMessaggi = messaggi.messages;
    //in piu
    arrayMessaggi.forEach(element => {
        let messaggio = element.message;
        //console.log(messaggio);
        return messaggio;
    });

    /*
    contatti.forEach((element, index) => {
        let messaggio = element.messages;
        console.log(messaggio);
        return index;
    
    });
    */
}

let indice = "1";

function getName(index){
    index = indice;
    let OggettoInPosizione = contatti[index];
    //getName(OggettoInPosizione);

    let nome = OggettoInPosizione.name
    //console.log(nome);
    return nome;
    
}

function getNameElement(oggetto){
    let name = oggetto.name;
    //console.log(name);
    return name;
}

getName();

/*
function getObject(){
    let object = contatti[1];
    console.log(object);
}

getArrayMessages(1);
getObject(1);

let oggetto = getObject(1);
console.log(oggetto);
*/

function getImage(index){
    index = indice;
    let OggettoInPosizione = contatti[index];

    let photoUser = OggettoInPosizione.avatar
    //console.log(photoUser);
}

getImage();
/*
function getHour(elementi){
    let data = elementi.date;
    let arrayData = data.split(" ");
    let stringHour = arrayData[1];
    //console.log(stringHour);
    let arrayHour = stringHour.split(":");
    //console.log(arrayHour);
    let arrayHourMin = arrayHour.pop();
    //console.log(arrayHourMin);
    let strinHourMin = arrayHour.join(":");
    //console.log(strinHourMin);
    return strinHourMin;
}

let messaggio = {
        date: '10/01/2020 15:30:55',
        message: 'Ciao, andiamo a mangiare la pizza stasera?',
        status: 'received'
    };

getHour(messaggio);
*/
/*
function getLastData(index){
    index = indice;
    let OggettoInPosizione = contatti[index];
    //console.log(OggettoInPosizione);
    let arrayMessaggi = OggettoInPosizione.messages;
    //console.log(arrayMessaggi);
    let last = arrayMessaggi[arrayMessaggi.length-1];
    //console.log(last);
    let ora = getLaData(last);
    console.log(ora);
}

getLastData();

function getLaData(elemento){
    let data = elemento.date;
    let arrayData = data.split(" ");
    let dataGiorno = arrayData[0];
    let avviso;
    //data di oggi
    let dataOggi = new Date();
    const yyyy = dataOggi.getFullYear();
    let mm = dataOggi.getMonth() + 1; // Months start at 0!
    let dd = dataOggi.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    dataOggi = dd + '/' + mm + '/' + yyyy;
    let yesterday = (dd - 1) + '/' + mm + '/' + yyyy;
    if(dd < 10){
        yesterday = "0" + yesterday;
    }

    if(dataGiorno === dataOggi){
        let stringHour = arrayData[1];
        //console.log(stringHour);
        let arrayHour = stringHour.split(":");
        //console.log(arrayHour);
        let arrayHourMin = arrayHour.pop();
        //console.log(arrayHourMin);
        let strinHourMin = arrayHour.join(":");
        //console.log(strinHourMin);
        avviso = "alle " + strinHourMin;
        return avviso;
    }
    else if(dataGiorno === yesterday){
        let stringHour = arrayData[1];
        //console.log(stringHour);
        let arrayHour = stringHour.split(":");
        //console.log(arrayHour);
        let arrayHourMin = arrayHour.pop();
        //console.log(arrayHourMin);
        let strinHourMin = arrayHour.join(":");
        //console.log(strinHourMin);
        avviso = "Ieri alle " + strinHourMin;
        return avviso;
    }
    else{
        avviso = "il " + dataGiorno;
        return avviso;
    }

    /*
    let data = elementi.date;
    let arrayData = data.split(" ");
    let stringHour = arrayData[1];
    //console.log(stringHour);
    let arrayHour = stringHour.split(":");
    //console.log(arrayHour);
    let arrayHourMin = arrayHour.pop();
    //console.log(arrayHourMin);
    let strinHourMin = arrayHour.join(":");
    //console.log(strinHourMin);
    return strinHourMin;
    
}
*/
/*
function newMessage(){
    let text = this.newMessageText;
    console.log(text);
    let data = new Date();
    return {
        date: data,
        message: text,
        status: 'sent'
    }
}
*/

/*
let parola = "C";

function searchPerson(){
    contatti.forEach(element => {
        let nome = element.name;
        let nomeGrande = nome.toUpperCase();
        let parolaGrande = parola.toUpperCase();
        if(nomeGrande.includes(parolaGrande)){
            console.log(nome);
        }
    });
}

searchPerson();
*/