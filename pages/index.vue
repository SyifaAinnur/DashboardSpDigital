<script setup>
import Tables from '~/components/Tables.vue';
const { data: products } = await useFetch('/api/products')

// console.log(products)

console.log(products.value[0].user)



const tableData = ref(products)
const tableColumns = ref([
    { label: "Checkbox", type: "checkbox", className: "p-4" },
    { label: "Company", type: "text", className: "px-8 py-3" },
    { label: "License Use", type: "text", className: "px-8 py-3" },
    { label: "Status", type: "text", className: "px-8 py-3" },
    { label: "Users", type: "text", className: "px-8 py-3" },
    { label: "About", type: "text", className: "px-8 py-3" },
    { label: "", type: "text", className: "px-8 py-3" }
])


</script>



<template>
    <div>
        <h4 class="text-3xl font-semibold text-black-600 mb-4">
            Welcome Back, Administator
        </h4>
        <p class="text-gray-500">
            Here are some of the most important data for you to read today.
        </p>

        <Tables :items="tableData" :columns="tableColumns" />
        <!-- <Tables /> -->
    </div>
</template>
