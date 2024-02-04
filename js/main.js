const { createApp } = Vue;
const zapp = createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "01/02/2024 10:30",
              message: "Hai stampato un esercito di Johnny?",
              status: "sent",
            },
            {
              date: "01/02/2024 10:31",
              message: "Ricordati di farli arrabbiati",
              status: "sent",
            },
            {
              date: "01/02/2024 10:32",
              message: "Conquisteranno il mondo!!!!",
              status: "received",
            },
          ],
        },
        {
          name: "Adriatik",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "02/02/2024 14:10",
              message: "Sta sera andiamo a mangiare una pizza? E poi cinema?",
              status: "sent",
            },
            {
              date: "02/02/2024 14:11",
              message:
                "Non lo so, ho mangiato troppo a pranzo ti faccio sapere, però per il cinema ci sono",
              status: "received",
            },
            {
              date: "02/02/2024 14:15",
              message: "Allora andiamo solo al cinema",
              status: "sent",
            },
          ],
        },
        {
          name: "Vincenzo",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "02/02/2024 17:40",
              message: "Ricordati il vino",
              status: "received",
            },
            {
              date: "02/02/2024 17:41",
              message: "Tranquillo ho preso 8 bottiglie 😎",
              status: "sent",
            },
            {
              date: "02/02/2024 17:50",
              message: "Perfect! 😍",
              status: "received",
            },
          ],
        },
        {
          name: "Simone P.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "03/02/2024 21:30",
              message: "Stasera partitina online?",
              status: "sent",
            },
            {
              date: "03/02/2024 21:31",
              message: "Forse sul tardi, sto studiando JavaScript",
              status: "received",
            },
          ],
        },
        {
          name: "Mattia V.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "03/02/2024 22:30",
              message: "Java Java Java sempre a parlare di Java",
              status: "sent",
            },
            {
              date: "03/02/2024 22:31",
              message: "SI SCRIVE JAVASCRIPT IGNORANTE 😤",
              status: "received",
            },
          ],
        },
        {
          name: "Sissi",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "02/02/2024 23:30",
              message: "Ciao Sissi, ti è piaciuto il film alla fine?",
              status: "sent",
            },
            {
              date: "02/02/2024 23:31",
              message: "Moltissimo",
              status: "received",
            },
            {
              date: "02/02/2024 23:32",
              message: "Ottimo",
              status: "sent",
            },
          ],
        },
        {
          name: "Andrea",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "03/02/2024 9:30",
              message: "Vieni in campagna questo fine settimana?",
              status: "sent",
            },
            {
              date: "03/02/2024 9:31",
              message: "Certo, io porto la carne e le birre per la grigliata!!",
              status: "received",
            },
          ],
        },
        {
          name: "Serena",
          avatar: "_io",
          visible: true,
          messages: [
            {
              date: "04/02/2024 14:10",
              message: "Hey, hai sentito che notizia al tg?",
              status: "received",
            },
            {
              date: "04/02/2024 14:11",
              message: "No, cosa hanno detto?",
              status: "sent",
            },
            {
              date: "04/02/2024 14:12",
              message: "Da oggi sarà possibile dormire a testa in giù",
              status: "received",
            },
          ],
        },
      ],
      activeChat: 0,
      selectedElement: null,
      newMessage: "",
      searchChat: "",
    };
  },
  methods: {
    changeChat(index) {
      this.activeChat = index;
      this.selectedElement = index;
    },

    getLastMessageDate() {
      const activeChat = this.contacts[this.activeChat];
      const lastMessage = activeChat.messages[activeChat.messages.length - 1];
      if (lastMessage) {
        return lastMessage.date;
      }
    },
    randomMsgGenerator() {
      const randMsg = ["Ok"];
      const randomIndex = Math.floor(Math.random() * randMsg.length);
      return randMsg[randomIndex];
    },
    deleteMsg(index) {
      const activeChat = this.contacts[this.activeChat];
      activeChat.messages.splice(index, 1);
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        const activeChat = this.contacts[this.activeChat];
        const currentDateTime = new Date();
        const currentDate = currentDateTime.toLocaleDateString("it-IT");
        const currentTime = currentDateTime.toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
        });

        activeChat.messages.push({
          date: `${currentDate}  ${currentTime}`,
          message: this.newMessage,
          status: "sent",
        });

        const randomMsgGenerator = this.randomMsgGenerator();

        setTimeout(() => {
          activeChat.messages.push({
            date: `${currentDate} ${currentTime}`,
            message: randomMsgGenerator,
            status: "recived",
          });
        }, 1000);
        this.newMessage = "";
      }
    },
  },
  computed: {
    filteredContacts() {
      return this.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(this.searchChat.toLowerCase())
      );
    },
  },
}).mount("#zapp");
