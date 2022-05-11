/*
  Descrizione:
  Attraverso l’apposita API di Boolean
  https://flynn.boolean.careers/exercises/api/random/mail
  Generare 10 indirizzi email e stamparli in pagina 
  all’interno di una lista.

  Bonus
  Far comparire gli indirizzi email solamente 
  quando sono stati tutti generati.
*/

const app = new Vue({

  el: '#app',

  data: {

    mail: [],
    isLoading: true
  },

  methods: {

    // Funzione genera mail prese da un API
    generateMail(){

      // Ciclo per ottenere le mail che mi servono es. 10
      for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(resp => {
          // console.log(resp.data);

          // Pusho le 10 mail nell'array di mail 
          this.mail.push(resp.data);

          console.log(this.mail);

          // Una volta pushate il flag del caricamento diventa false
          this.isLoading = false;

        })
        
      };

      
    }
    
  },

  // La funzione che genera le mail viene 
  // eseguita al caricamento della pagina
  mounted(){
    this.generateMail()
  }
})