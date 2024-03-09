<template>
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-3 items-center justify-end pb-4">
        <!-- Search input -->
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input type="text" id="table-search"
                class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items" v-model="searchQuery">
        </div>
    </div>
    <div class="relative overflow-x-auto shadow-xl sm:rounded-lg">
        <!-- Table -->
        <table
            class="w-max md:w-max lg:w-max xl:w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <!-- Table header -->
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th v-for="(column, index) in columns" :key="index" :class="column.className">
                        <div v-if="column.type === 'checkbox'" class="flex items-center">
                            <input :id="'checkbox-all-' + index" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                @click="selectAll($event)">
                            <label :for="'checkbox-all-' + index" class="sr-only">checkbox</label>
                        </div>
                        <div v-else class="flex">{{ column.label }}
                            <!-- Sort icon -->
                            <a href="#" @click.prevent="toggleSort(column.type)">
                                <Icon name="iconoir:data-transfer-both" size="20" color="#AAB8C2" />
                            </a>

                        </div>
                    </th>
                </tr>
            </thead>
            <!-- Table body -->
            <tbody>
                <tr v-for="(item, index) in displayedItems" :key="index"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input :id="'checkbox-table-search-' + index" type="checkbox"
                                class="w-4 h-4 text-black-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                @click="toggleItemSelection(item)">
                            <label :for="'checkbox-table-search-' + index" class="sr-only">checkbox</label>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                                <img class="w-10 h-10 rounded-full" :src="item.imageURL" alt="">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900 dark:text-white">{{ item.name }}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">{{ item.brand }}</div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div :style="{ width: `${item.usage}%` }" class="bg-black h-2.5 rounded-full"> </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <span v-if="item.status === 'Customers'"
                            class="bg-success-100 text-success-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">{{
                    item.status }}</span>
                        <span v-else
                            class="bg-shades-100 text-shades-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">{{
                    item.status }}</span>

                    </td>
                    <td class="px-6 py-4">
                        <div class="flex -space-x-2 rtl:space-x-reverse">
                            <img v-for="(user, index) in item.user" :key="index" :src="user.avatar" :alt="user.name"
                                class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                                :class="{ '-ml-8': index > 0 }">
                            <a class="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                                href="#">+{{ item.usage }}</a>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <p class="text-shades-800">{{ item.departement }}, {{ item.adjective }}</p>
                        <p class="text-wrap line-clamp-3  max-w-xs md:max-w-md">{{ item.description }}</p>
                    </td>
                    <td class="px-6 py-4 text-right whitespace-nowrap">
                        <div class="flex">
                            <!-- Delete -->
                            <Icon name="ic:outline-delete" size="32" color="#000" />
                            <!-- Edit -->
                            <Icon name="material-symbols-light:edit-outline" size="32" color="#000" />

                        </div>
                    </td>

                </tr>
            </tbody>
        </table>
        <!-- Pagination navigation -->
    </div>
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 pb-4"
        aria-label="Table navigation">
        <span
            class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing
            <span class="font-semibold text-gray-900 dark:text-white">{{ startIndex + 1 }}-{{ endIndex }} of <span
                    class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span></span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" @click.prevent="previousPage"
                    class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li v-for="page in totalPages" :key="page">
                <a href="#" @click.prevent="gotoPage(page)"
                    :class="{ 'text-blue-600 bg-blue-50': currentPage === page, 'text-gray-500 bg-white': currentPage !== page }"
                    class="flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{
                    page }}</a>
            </li>
            <li>
                <a href="#" @click.prevent="nextPage"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>

import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const toast = useToast();
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 5,
            searchQuery: '',
            sortColumn: '',
            sortDirection: 'asc',
            selectedCount: 0
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item =>
                item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        totalItems() {
            return this.filteredItems.length;
        },
        totalPages() {
            return Math.ceil(this.totalItems / this.itemsPerPage);
        },
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage;
        },
        endIndex() {
            return Math.min(this.startIndex + this.itemsPerPage, this.totalItems);
        },
        // displayedItems() {
        //     return this.filteredItems.slice(this.startIndex, this.endIndex);
        // }

        displayedItems() {
            return this.sortedItems.slice(this.startIndex, this.endIndex);
        },
        sortedItems() {
            if (!this.sortColumn || this.sortColumn === 'checkbox') return this.filteredItems;

            return this.filteredItems.slice().sort((a, b) => {
                const aValue = this.getColumnValue(a, this.sortColumn);
                const bValue = this.getColumnValue(b, this.sortColumn);

                if (this.sortDirection === 'asc') {
                    return aValue.localeCompare(bValue, undefined, { numeric: true });
                } else {
                    return bValue.localeCompare(aValue, undefined, { numeric: true });
                }
            });
        }
    },
    methods: {
        gotoPage(page) {
            this.currentPage = page;
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        toggleSort(type) {
            if (this.sortColumn === type) {
                this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortColumn = type;
                this.sortDirection = 'asc';
            }
        },
        getColumnValue(item, type) {
            switch (type) {
                case 'text':
                    return item.name;
                case 'checkbox':
                    return '';
                default:
                    return '';
            }
        },
        toggleItemSelection(item) {
            item.isSelected = !item.isSelected;
            this.updateSelectedCount();
            this.showToast();
        },
        selectAll(event) {
            const allSelected = event.target.checked;
            this.filteredItems.forEach(item => {
                item.isSelected = allSelected;
            });
            this.updateSelectedCount();
        },
        updateSelectedCount() {
            this.selectedCount = this.filteredItems.reduce((acc, item) => {
                return item.isSelected ? acc + 1 : acc;
            }, 0);
        },
        showToast() {
            toast.success(`Item selected ${this.selectedCount}`);
        }
    }
};

</script>
