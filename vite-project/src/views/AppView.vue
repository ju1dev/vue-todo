

<template>
    <HeaderComponent />
    <!--Main Content-->
    <div class="bg-gray-100 flex flex-col justify-center min-h-screen items-center">
        <div class="bg-white shadow-md rounded-lg p-6 w-96">
            <h2 class="text-xl font-bold mb-4">Adicionar Item</h2>
            <form @submit.prevent class="mb-4">
                <input v-model="newTask" type="text" placeholder="Example Task" class="border-emerald-200 border-2 rounded-md p-3 w-full mb-2" />
                <button @click="addTask" class="bg-emerald-400 rounded-md w-full p-2 text-xl transition hover:opacity-50">Add Task</button>
            </form>
            <div class="flex flex-col">
                <ul>
                    <li v-for="(task, index) in tasks">
                        {{ task }}
                        <button @click="deleteTask(index)">Delete Task</button>
                    </li>
                    
                </ul>
            </div>
        </div>

    </div>


</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue';

    export default {
        data() {
            return{
                tasks: [],
                newTask: ''
            } 
        },
        methods: {
            addTask() {
                if (this.newTask.trim()) {
                    this.tasks.push(this.newTask.trim())
                    this.newTask = ''
                }

            },
            deleteTask(index) {
                this.tasks.splice(index, 1)
            }
        }
    }
</script>
<style scoped></style>