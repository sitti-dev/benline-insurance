<template>
  <section id="home" class="bg-gradient-to-br from-brand-blue via-brand-navy to-brand-blue min-h-screen flex items-center relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-32 h-32 bg-brand-orange rounded-full"></div>
      <div class="absolute bottom-20 right-20 w-24 h-24 bg-brand-red rounded-full"></div>
      <div class="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white">
          <div class="mb-6">
            <span class="inline-block bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Trusted Insurance Partner
            </span>
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Protect Your 
              <span class="text-brand-orange">Vehicle</span>
              with Confidence
            </h1>
            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
              "Service is our passion and commitment" - Get comprehensive car insurance coverage 
              that fits your needs and budget. Fast claims, reliable service, and peace of mind.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <button class="btn-primary text-lg px-8 py-4">
              Get Free Quote
            </button>
            <button class="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-blue-400/30">
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-orange">10K+</div>
              <div class="text-blue-200">Happy Clients</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-orange">24/7</div>
              <div class="text-blue-200">Support</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-brand-orange">Fast</div>
              <div class="text-blue-200">Claims</div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 card-hover">
            <img 
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Car Insurance Protection" 
              class="w-full h-96 object-cover rounded-xl shadow-2xl"
            >
            <div class="absolute -bottom-4 -right-4 bg-brand-red text-white p-4 rounded-xl shadow-lg">
              <div class="text-2xl font-bold">Save 30%</div>
              <div class="text-sm">On Your Premium</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>