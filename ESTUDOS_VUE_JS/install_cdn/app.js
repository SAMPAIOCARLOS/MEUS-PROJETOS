const { createApp, ref } = Vue

    createApp({
        setup() {
        const message = ref('Hello vue3!')
        return {
            message
        }
        }
    }).mount('#app')


// const { createApp_two, ref_two } = Vue

//     createApp_two({
//         setup() {
//         const title = ref_two('Title Main!')
//         return {
//             title
//         }
//         }
//     }).mount('#app_two')
