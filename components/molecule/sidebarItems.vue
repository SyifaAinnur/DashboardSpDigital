<template>
    <li>
      <a :href="link" :class="linkClasses">
        <span v-html="icon" class="mr-3"></span>
        <span>{{ label }}</span>
      </a>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      link: {
        type: String, // Mengubah tipe prop link menjadi String
        required: true
      },
      icon: {
        type: String,
        required: true
      },
      darkMode: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      linkClasses() {
        return {
          'flex': true,
          'items-center': true,
          'p-2': true,
          'text-white': true,
          'rounded-lg': true,
          'dark:text-white': this.darkMode,
          'hover:bg-gray-100': !this.darkMode,
          'hover:text-black': !this.darkMode,
          'dark:hover:bg-gray-700': this.darkMode,
          'group': true
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tambahkan styling sesuai kebutuhan */
  </style>
  