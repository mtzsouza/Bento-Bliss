<script>
  // make dynamic date to be added to footer
  let date = new Date().getFullYear();
</script>

<!-- Divider -->
<div class="relative h-50 -mt-24 sm:h-65 sm:-mt-80">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9d174d" fill-opacity="1" d="M0,288L1440,256L1440,320L0,320Z"></path></svg>
</div>

<!-- Footer -->
<footer class="relative pt-8 pb-6 bg-pink-800 border-t-4 border-pink-800 lg:px-48 text-black">
  <div class="relative container mx-auto px-4">
    <div class="flex flex-wrap-reverse lg:flex-nowrap text-center lg:text-left">
      <div class="w-full lg:w-[80%] px-4 rounded-xl py-2">
        <h4 class="text-3xl font-semibold font-serif py-2">In need of a more personalized cake?</h4>
        <h5 class="text-lg mt-0 mb-2 font-semibold">
          Find us on any of these platforms, we respond in 1-2 business days.
        </h5>
        <div class="mt-6 lg:mb-0 mb-6 flex justify-center">
          <a
            href="/"
            class="text-orange-500 mr-2"
          >
            <i class="fab fa-instagram-square fa-3x transform hover:scale-125 transition-all duration-300"></i>
          </a>
          <a
          href="/"
          class="text-emerald-500 mr-2"
        >
          <i class="fab fa-whatsapp-square fa-3x transform hover:scale-125 transition-all duration-300"></i>
        </a>
        <a
        href="/"
        class="text-lightBlue-600 mr-2"
      >
        <i class="fab fa-facebook-square fa-3x transform hover:scale-125 transition-all duration-300"></i>
      </a>
        </div>
      </div>
      <div class="w-full lg:w-[60%] pt-4">
        <div class="flex justify-center mb-6">
          <div class="w-[50%] sm:w-[30%] px-1">
            <img src="https://i.imgur.com/toZ4MEi.png" alt="bento cake">
          </div>
        </div>
      </div>
    </div>
    <hr class="mt-10 mb-2 border-slate-900" />
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm font-semibold">
          Copyright © {date} by
          <a
            href="https://mattsouza.dev/"
            class="underline hover:text-lg transition-all duration-300"
          >
            Matheus Souza
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
