<script lang="ts">
    import { page } from '$app/stores';  

    $: currentPage = $page.url.pathname;
    
    let menuActive = false;

</script>

<nav class="bg-gradient-to-r from-pink-600 via-pink-600 to-pink-300">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-[8vh] items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" on:click={() => menuActive = !menuActive}
          class="relative inline-flex items-center justify-center rounded-md p-2 text-slate-900
          {menuActive ? "ring-2 outline-none ring-inset ring-slate-900" : ""}">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex flex-shrink-0 items-center sm:mr-10">
            <a href="/">
                <img class="h-10 w-auto transform hover:scale-110 transition-all duration-300" src="https://i.imgur.com/yTXcKrj.png" alt="bento bliss logo">
            </a>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
                <button class="bg-slate-900 text-pink-200 rounded border-2 border-slate-900 shadow-xl px-3 py-2 my-3 text-xs transform hover:scale-110 transition-all duration-300 font-medium uppercase tracking-widest">
                    Send us a message!
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden {menuActive ? "" : "hidden"}" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <button on:click={() => menuActive = !menuActive}
        class="bg-slate-900 text-pink-200 rounded border-2 border-slate-900 shadow hover:shadow-lg px-3 py-2 my-3 text-xs font-medium uppercase tracking-widest">
            Send us a message!
        </button>
      </div>
    </div>
  </nav>
  