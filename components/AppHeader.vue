<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container-custom">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="bg-gradient-to-r from-brand-orange to-brand-red p-2 rounded-lg">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-brand-navy">BL Gen Line</h1>
            <p class="text-sm text-gray-600">Vehicle Insurance Services</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Home</a>
          <a href="#services" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Services</a>
          <a href="#about" class="text-brand-navy hover:text-brand-red transition-colors font-medium">About</a>
          <a href="#contact" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Contact</a>
          <button class="btn-primary">Get Quote</button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-4">
          <a href="#home" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Home</a>
          <a href="#services" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Services</a>
          <a href="#about" class="text-brand-navy hover:text-brand-red transition-colors font-medium">About</a>
          <a href="#contact" class="text-brand-navy hover:text-brand-red transition-colors font-medium">Contact</a>
          <button class="btn-primary w-full">Get Quote</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>