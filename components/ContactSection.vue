<template>
  <section id="contact" class="section-padding bg-brand-navy">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="text-white">
          <h2 class="text-4xl font-bold mb-6">Get in Touch</h2>
          <p class="text-xl text-blue-100 mb-8">
            Ready to protect your vehicle? Contact us today for a personalized quote or any questions about our services.
          </p>

          <!-- Contact Details -->
          <div class="space-y-6 mb-8">
            <div class="flex items-start space-x-4">
              <div class="bg-brand-orange p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Office Address</h4>
                <p class="text-blue-100">FSD (Main) Unit 411a Wack Wack Twin Towers<br>Brgy. Wack Wack, Mandaluyong City</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-brand-red p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Phone Numbers</h4>
                <p class="text-blue-100">+63963-743-5102 (Viber)<br>+63991-307-6736 (SMS)</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-brand-blue p-3 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold mb-1">Email Address</h4>
                <p class="text-blue-100">bl.vehicleinsuranceservices@gmail.com</p>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h4 class="font-semibold mb-4 text-brand-orange">Business Hours</h4>
            <div class="space-y-2 text-blue-100">
              <div class="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-8 shadow-xl">
          <h3 class="text-2xl font-bold text-brand-navy mb-6">Request a Quote</h3>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  v-model="form.firstName"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  v-model="form.lastName"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                v-model="form.email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
              <select 
                v-model="form.vehicleType"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="hatchback">Hatchback</option>
                <option value="pickup">Pickup Truck</option>
                <option value="van">Van</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Tell us about your insurance needs..."
              ></textarea>
            </div>

            <button type="submit" class="w-full btn-primary text-lg py-4">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  vehicleType: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  alert('Thank you for your inquiry! We will contact you soon.')
  // Reset form
  Object.keys(form).forEach(key => form[key] = '')
}
</script>