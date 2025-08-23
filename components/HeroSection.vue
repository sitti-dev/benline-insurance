<template>
    <section
        id="home"
        class="bg-gradient-to-br from-brand-blue via-brand-navy to-brand-blue min-h-[700px] lg:min-h-screen flex items-center relative overflow-hidden"
    >
        <img
            src="/images/banner.jpg"
            alt="banner"
            class="absolute h-full w-full opacity-5 object-cover"
        />
        <img
            src="/images/car.png"
            alt="banner"
            class="absolute w-[95%] md:w-[84%] lg:w-[65%] bottom-0 -right-20 z-1"
        />

        <div
            class="absolute z-60 w-[90%] left-1/2 -translate-x-1/2 h-full flex flex-col justify-center"
        >
            <h1
                class="text-5xl lg:text-7xl text-brand-orange font-extrabold mb-6"
            >
                Drive with Confidence. <br />
                Insure with us!
            </h1>
            <p class="text-xl w-full lg:w-4/12 text-gray-100 mb-8">
                You've got places to be, people to see, and zero time for car
                trouble.
            </p>
            <a
                href="tel:09356435901"
                class="btn-primary w-fit"
            >
                Inquire Now
            </a>
        </div>
    </section>
</template>
