<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <div class="mb-8">
            <span class="inline-block bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About BL Gen Line
            </span>
            <h2 class="text-4xl font-bold text-brand-navy mb-6">
              Your Trusted Insurance Partner in the Philippines
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Located in the heart of Mandaluyong City, BL Gen Line Vehicle Insurance Services has been 
              providing reliable and comprehensive car insurance solutions to Filipino drivers.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Our motto "Service is our passion and commitment" reflects our dedication to delivering 
              exceptional customer service and ensuring your peace of mind on the road.
            </p>
          </div>

          <!-- Features -->
          <div class="grid sm:grid-cols-2 gap-6 mb-8">
            <div class="flex items-start space-x-3">
              <div class="bg-brand-blue/10 p-2 rounded-lg">
                <svg class="w-6 h-6 text-brand-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy mb-1">Licensed & Regulated</h4>
                <p class="text-gray-600 text-sm">Fully licensed insurance provider</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="bg-brand-red/10 p-2 rounded-lg">
                <svg class="w-6 h-6 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy mb-1">Expert Team</h4>
                <p class="text-gray-600 text-sm">Experienced insurance professionals</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="bg-brand-orange/10 p-2 rounded-lg">
                <svg class="w-6 h-6 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy mb-1">Local Presence</h4>
                <p class="text-gray-600 text-sm">Based in Mandaluyong City</p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div class="bg-green-100 p-2 rounded-lg">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-brand-navy mb-1">Fast Claims</h4>
                <p class="text-gray-600 text-sm">Quick and hassle-free processing</p>
              </div>
            </div>
          </div>

          <button class="btn-primary">
            Learn More About Us
          </button>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="bg-gradient-to-br from-brand-blue/10 to-brand-orange/10 rounded-2xl p-8">
            <img 
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Insurance Team" 
              class="w-full h-96 object-cover rounded-xl shadow-lg"
            >
          </div>
          <!-- Floating Card -->
          <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-l-4 border-brand-orange">
            <div class="text-2xl font-bold text-brand-navy">15+</div>
            <div class="text-gray-600">Years of Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>