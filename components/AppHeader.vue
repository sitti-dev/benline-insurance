<template>
    <header 
        class="fixed w-full text-white top-0 z-40 transition-all duration-300"
        :class="{ 'bg-white !text-brand-navy shadow-lg': isScrolled }"
    >
        <nav class="w-[90%] mx-auto py-6">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <img src="/images/logo.jpg" alt="BEN LINE Logo" class="h-8 sm:h-10 md:h-12 w-auto">
                    <div class="min-w-0 flex-1">
                        <p class="text-base sm:text-lg md:text-xl font-bold leading-tight">
                            BEN LINE
                        </p>
                        <p class="text-xs sm:text-sm opacity-70 leading-tight">
                            Vehicle Insurance Services
                        </p>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    <a
                        href="#home"
                        class="hover:text-brand-red transition-colors font-medium text-sm xl:text-base"
                        @click="closeMenu"
                        >Home</a
                    >
                    <a
                        href="#services"
                        class="hover:text-brand-red transition-colors font-medium text-sm xl:text-base"
                        @click="closeMenu"
                        >Services</a
                    >
                    <a
                        href="#about"
                        class="hover:text-brand-red transition-colors font-medium text-sm xl:text-base"
                        @click="closeMenu"
                        >About</a
                    >
                    <a
                        href="#contact"
                        class="hover:text-brand-red transition-colors font-medium text-sm xl:text-base"
                        @click="closeMenu"
                        >Contact</a
                    >
                </div>

                <!-- Mobile Menu Button -->
                <button
                    @click="toggleMenu"
                    class="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                    :class="{ 'bg-white/10': mobileMenuOpen, 'text-brand-blue': !isScrolled && mobileMenuOpen }"
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        class="w-6 h-6 transform transition-transform duration-200"
                        :class="{ 'rotate-90': mobileMenuOpen }"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            v-if="!mobileMenuOpen"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                        <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>

        </nav>
    </header>
    <!-- Mobile Menu -->
    <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
    >
        <div
            v-if="mobileMenuOpen"
            class="fixed top-0 right-0 z-30 w-5/12 h-full lg:hidden bg-white shadow pt-32 py-4 px-4 sm:px-6"
        >
            <div class="flex flex-col space-y-4">
                <a
                    href="#home"
                    class="text-brand-navy hover:text-brand-red transition-colors font-medium py-2 px-3 rounded-md hover:bg-white/5"
                    @click="closeMenu"
                    >Home</a
                >
                <a
                    href="#services"
                    class="text-brand-navy hover:text-brand-red transition-colors font-medium py-2 px-3 rounded-md hover:bg-white/5"
                    @click="closeMenu"
                    >Services</a
                >
                <a
                    href="#about"
                    class="text-brand-navy hover:text-brand-red transition-colors font-medium py-2 px-3 rounded-md hover:bg-white/5"
                    @click="closeMenu"
                    >About</a
                >
                <a
                    href="#contact"
                    class="text-brand-navy hover:text-brand-red transition-colors font-medium py-2 px-3 rounded-md hover:bg-white/5"
                    @click="closeMenu"
                    >Contact</a
                >
            </div>
        </div>
    </transition>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const mobileMenuOpen = ref(false);
    const isScrolled = ref(false);

    const toggleMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const closeMenu = () => {
        mobileMenuOpen.value = false;
    };

    // Handle scroll to show/hide background
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 100;
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
        if (mobileMenuOpen.value && !event.target.closest('header')) {
            closeMenu();
        }
    };

    // Close menu on escape key
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape' && mobileMenuOpen.value) {
            closeMenu();
        }
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
    });
</script>