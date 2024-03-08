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

        <div class="flex flex-wrap justify-between items-center mt-8">
            <Card label="Revenue in Percentage" url='<svg class="h-8 w-8 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="12" cy="19" r="1" /></svg>' data="40%" content="This is a 40% increase in revenue from last month." />
            <Card label="Total Users" url='~assets/svg/icon-glossary.svg' data="1,200" content="This is the total number of users in the system." />
            <Card label="Total Revenue" url='~assets/svg/icon-glossary.svg' data="$ 120,000" content="This is the total revenue generated from the system." />
            
        </div>

        <Tables :items="tableData" :columns="tableColumns" />
        <!-- <Tables /> -->
    </div>
</template>
