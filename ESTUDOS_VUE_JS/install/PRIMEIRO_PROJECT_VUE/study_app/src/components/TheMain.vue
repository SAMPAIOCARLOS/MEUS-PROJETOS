<template>
    <main>
        <div>
            <h1 v-if="positions === 'Admin'">Seu cargo é: Admin</h1>
            <h2 v-else-if="positions === 'Marketing'">Seu cargo é: Marketing</h2>
            <h3 v-else>Seu cargo é: User</h3>
        </div>

        <div v-for="(item, index) in list_div" :key="index">
            <h2>
                {{ item }}
                <span>{{ index + 1 }}</span>
            </h2>
        </div>
    </main>
</template>

<script>
    export default {
        name: "TheMain",
        data() {
            return {
                positions: 'Admin',
                list_div: ["item", "item", "item", "item", "item", "item"],
                array_obj: [
                                {
                                    id: 1,
                                    nome: "João Silva",
                                    email: "joao.silva@example.com",
                                    idade: 28
                                },
                                {
                                    id: 2,
                                    nome: "Maria Souza",
                                    email: "maria.souza@example.com",
                                    idade: 34
                                },
                                {
                                    id: 3,
                                    nome: "Carlos Oliveira",
                                    email: "carlos.oliveira@example.com",
                                    idade: 25
                                },
                                {
                                    id: 4,
                                    nome: "Ana Pereira",
                                    email: "ana.pereira@example.com",
                                    idade: 30
                                },
                                {
                                    id: 5,
                                    nome: "Lucas Costa",
                                    email: "lucas.costa@example.com",
                                    idade: 22
                                }
                            ]
            }
        }
    }
</script>

<style>

</style>