const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: [],
            requiredMails: 10
        }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                const mail = response.data.response
                this.mailList.push(mail)
            })
        }



    }
}).mount('#app')