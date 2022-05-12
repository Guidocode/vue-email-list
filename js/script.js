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
    limitMail: 10,
    isLoading: true,
    urlApi: 'https://flynn.boolean.careers/exercises/api/random/mail',
    errorMessage: '',
    isError: false

  },

  methods: {

    // Funzione genera mail prese da un API
    generateMail(){

      // Ciclo per ottenere le mail che mi servono es. 10
      for (let i = 0; i < this.limitMail; i++) {
        axios.get(this.urlApi)
        .then(resp => {

          // Pusho le 10 mail nell'array di mail 
          this.mail.push(resp.data.response);

          console.log(this.mail);

          // Una volta pushate il flag del caricamento diventa false
          if(this.mail.length === this.limitMail){
            this.isLoading = false;
          }

        })
        // errore
        .catch(error => {
          // gli dico che il mio error message è uguale all'errore
          this.errorMessage = error;
          // cambio il valore della booleana in true quando c'è l'errore
          this.isError = true;
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