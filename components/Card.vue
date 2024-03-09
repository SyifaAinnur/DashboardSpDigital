<template>
    <div class="w-full md:w-1/2 lg:w-1/3 px-2 py-2">
        <div
            class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-60 lg:h-48 p-6">
            <div class="flex flex-row justify-between">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white">{{ label }}</h4>
                <div class="flex flex-row justify-end">
                    <div class="cursor-pointer">
                        <slot name="icon" @click="handleIconClick"></slot>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-between items-center mt-8 w-full relative h-20">
                <h5
                    class="absolute sm:bottom-0 mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{ data }}
                </h5>
                <p class="absolute sm:bottom-0 mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                    {{
                    content }} </p>
                <div class="absolute -bottom-11 lg:bottom-0 right-0 h-20 sm:mt-4">
                    <slot name="chart"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        data: {
            type: String,
            required: false
        },
        content: {
            type: String,
            required: false
        },
        methods: {
            handleIconClick() {
                this.$emit('icon-click');
            }
        }



    }
}

</script>