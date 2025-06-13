<template>
  <section class="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-brand-navy mb-4">Why Choose BL Gen Line?</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're committed to providing exceptional service and comprehensive protection for your vehicle
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Competitive Rates -->
        <div class="text-center group">
          <div class="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <svg class="w-10 h-10 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-3.84 3.11-4.1V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 4.15-3.12 4.16z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-brand-navy mb-3">Competitive Rates</h3>
          <p class="text-gray-600">Get the best value for your money with our affordable premium rates</p>
        </div>

        <!-- 24/7 Support -->
        <div class="text-center group">
          <div class="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <svg class="w-10 h-10 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-brand-navy mb-3">24/7 Support</h3>
          <p class="text-gray-600">Round-the-clock customer service and emergency assistance</p>
        </div>

        <!-- Quick Claims -->
        <div class="text-center group">
          <div class="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <svg class="w-10 h-10 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-brand-navy mb-3">Quick Claims</h3>
          <p class="text-gray-600">Fast and efficient claims processing to get you back on the road</p>
        </div>

        <!-- Trusted Partner -->
        <div class="text-center group">
          <div class="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <svg class="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-brand-navy mb-3">Trusted Partner</h3>
          <p class="text-gray-600">Years of experience serving the Filipino community with integrity</p>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="mt-16 bg-white rounded-2xl p-8 shadow-lg">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <div class="flex space-x-1">
              <svg v-for="i in 5" :key="i" class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <blockquote class="text-xl text-gray-700 mb-6 italic">
            "BL Gen Line provided excellent service when I needed to file a claim. Their team was professional, 
            responsive, and made the entire process stress-free. Highly recommended!"
          </blockquote>
          <div class="font-semibold text-brand-navy">Maria Santos</div>
          <div class="text-gray-600">Satisfied Customer</div>
        </div>
      </div>
    </div>
  </section>
</template>