<script setup>
import Tables from '~/components/Tables.vue';
const { data: products } = await useFetch('/api/products')

// console.log(products.value[0].user)

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

        <div class="flex flex-wrap justify-between items-center mt-8 w-full">

            <Card label="Revenue in Percentage" content="40 % vs last month">
                <template v-slot:icon>
                    <Icon name="iconoir:more-vert" size="32" color="#AAB8C2" />
                </template>

                <template v-slot:chart>
                    <ChartLineChart />
                </template>
            </Card>
            <Card label="Total Order" data="400 Orders">
                <template v-slot:icon>
                    <Icon name="twemoji:bookmark" size="32" color="#AAB8C2" />
                </template>
            </Card>
            <Card label="Pending Customer" data="20 Customer">
                <template v-slot:icon>
                    <Icon name="noto-v1:envelope-with-arrow" size="32" color="#AAB8C2" />
                </template>
            </Card>
        </div>

        <Tables :items="tableData" :columns="tableColumns" />

    </div>
</template>
