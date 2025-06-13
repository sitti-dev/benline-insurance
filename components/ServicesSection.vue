<template>
  <section id="services" class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-brand-navy mb-4">Our Insurance Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive vehicle insurance solutions tailored to protect you and your investment
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Comprehensive Coverage -->
        <div class="bg-white rounded-xl p-8 shadow-lg card-hover border-t-4 border-brand-blue">
          <div class="bg-brand-blue/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-brand-navy mb-4">Comprehensive Coverage</h3>
          <p class="text-gray-600 mb-6">Complete protection against theft, accidents, natural disasters, and third-party damages.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Collision Coverage</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Theft Protection</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Natural Disasters</li>
          </ul>
        </div>

        <!-- Third Party Liability -->
        <div class="bg-white rounded-xl p-8 shadow-lg card-hover border-t-4 border-brand-red">
          <div class="bg-brand-red/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-brand-navy mb-4">Third Party Liability</h3>
          <p class="text-gray-600 mb-6">Mandatory coverage protecting you from legal liabilities to third parties.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Legal Compliance</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Property Damage</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Bodily Injury</li>
          </ul>
        </div>

        <!-- Personal Accident -->
        <div class="bg-white rounded-xl p-8 shadow-lg card-hover border-t-4 border-brand-orange">
          <div class="bg-brand-orange/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-brand-navy mb-4">Personal Accident</h3>
          <p class="text-gray-600 mb-6">Additional protection for you and your passengers in case of accidents.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Medical Expenses</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Disability Benefits</li>
            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Death Benefits</li>
          </ul>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-gradient-to-r from-brand-blue to-brand-navy rounded-2xl p-8 text-center text-white">
        <h3 class="text-3xl font-bold mb-4">Ready to Get Protected?</h3>
        <p class="text-xl mb-8 text-blue-100">Get a personalized quote in minutes</p>
        <button class="btn-secondary text-lg px-8 py-4">
          Calculate Premium
        </button>
      </div>
    </div>
  </section>
</template>