<template>
   <header class="bg-zinc-400">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl" font-bold>Todo App</h1>
        <nav>
            <ul class="flex space-x-4">
                <RouterLink to="/App" class="transition hover:opacity-50 cursor-pointer">App</RouterLink>
                <RouterLink to="/About" class="transition hover:opacity-50 cursor-pointer">About</RouterLink>
            </ul>
        </nav>
    </div>
   </header>

</template>
<script>
    export default {

    }
</script>
<style scoped></style>