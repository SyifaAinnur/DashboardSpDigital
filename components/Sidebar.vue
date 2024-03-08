<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    computed: {
        sidebarClasses() {
            return [
                'fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0',
                {
                    '-translate-x-full': !this.isSidebarOpen,
                },
            ];
        },
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        closeSidebar() {
            this.isSidebarOpen = false;
        },
        handleResize() {
            if (window.innerWidth >= 640) {
                this.openSidebar();
            } else {
                this.closeSidebar();
            }
        },
        openSidebar() {
            this.isSidebarOpen = true;
        },
        handleClickOutside(event: Event) {
            const sidebar: any = this.$refs.sidebar;
            const button: any = document.querySelector('[data-drawer-toggle="logo-sidebar"]');
            const clickedElement = event.target;
            if (!sidebar.contains(clickedElement) && !button.contains(clickedElement)) {
                this.closeSidebar();
            }

        },
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('click', this.handleClickOutside);
        this.handleResize();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('click', this.handleClickOutside);
    },
});
</script>

<template>
    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        @click="toggleSidebar">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>
    </button>

    <aside ref="sidebar" id="logo-sidebar" :class="sidebarClasses" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#101828] dark:bg-gray-800">
            <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
                <h5 class="text-2xl font-bold text-white">Visa Indonesia</h5>
            </a>
            <ul class="space-y-2 font-medium">
                <MoleculeSidebarItems label="Dashboard" link="#"
                    icon='<svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"/> </svg>' />

                <MoleculeSidebarItems label="Services" link="#"
                    icon='<svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.2v.8l7 4 7-4v-.8m-14 5v.8l7 4 7-4v-1M12 3 5 7l7 4 7-4-7-4Z"/> </svg>' />

                <MoleculeSidebarItems label="Order" link="#"
                    icon='<svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M5 3.8A1 1 0 0 1 6 3h12c.5 0 .9.3 1 .8l1.8 8.2h-4.2a2 2 0 0 0-1.9 1.2 3 3 0 0 1-5.4 0A2 2 0 0 0 7.4 12H3.2L5 3.8ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.4a5 5 0 0 1-9.2 0H3Z" clip-rule="evenodd"/> </svg>' />

                <MoleculeSidebarItems label="Customers" link="#"
                    icon='<svg class="h-6 w-6 text-white-800 dark:text-whit"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="9" cy="7" r="4" />  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />  <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>' />

                <MoleculeSidebarItems label="Customers Identity" link="#"
                    icon='<svg class="h-6 w-6 text-white-800 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>' />

                <MoleculeSidebarItems label="Promo Code" link="#"
                    icon='<svg class="h-6 w-6 text-white-800 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />  <line x1="7" y1="7" x2="7.01" y2="7" /></svg>' />

                <MoleculeSidebarItems label="Admin User" link="#"
                    icon='<svg class="h-6 w-6 text-white-800 dark:text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>' />

            </ul>
        </div>
    </aside>
</template>