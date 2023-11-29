<script lang="ts">
    // Libs
    import { onMount } from 'svelte';
    import { fade } from "svelte/transition";

    // Components
    import CakeBuilder from '$lib/components/CakeBuilder.svelte';

    let slogans = ["Indulge in Sweet Perfection.",
                    "Elevate Your Celebrations with Our Cakes.",
                    "Taste the Love in Every Bite.",
                    "Every Occasion, Every Cake.",
                    "Savor the Sweetness, Experience the Bliss.",
                    "Inspiring Sweet Tooth Moments."];
    let count = 0;

    $: slogan = slogans[count];
    $: showBuilder = false;
    $: cakeSize = "Medium";
    
    onMount(() => {
        const changeSlogan = setInterval(() => {
			if (count < slogans.length - 1) {
                count ++
            } else {
                count = 0
            }
		}, 10000);
    });

    const toggleBuilder = (size: string) => {
        showBuilder = !showBuilder;
        cakeSize = size;
    };

</script>

<main>
    <!-- First Screen -->
    <div class="relative w-full min-h-[72vh] bg-background bg-center bg-cover flex items-center justify-center">
        <span class="w-full h-full absolute bg-black bg-opacity-50"/>
        {#key slogan}
            <div class="absolute" in:fade={{ duration: 700, delay: 350}} out:fade={{ duration: 350 }}>
                <p class="z-10 relative bottom-12 pl-6 mr-12 sm:px-24 font-serif text-5xl text-lightPink font-semibold select-none">
                    {slogan}
                </p>
            </div>
        {/key}
    </div>

    <!-- Divider -->
    <div class="relative -mt-36 sm:-mt-60 lg:-mt-[310px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#db2777" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,256C640,245,800,235,960,234.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>

    <!-- Second Screen -->
    <div class="relative w-full min-h-[100vh] sm:min-h-[75vh] lg:min-h-[25vh] bg-pink-600 border-pink-600 flex flex-col items-center gap-8 lg:gap-24">
        <div class="flex flex-col place-items-center w-full sm:flex-row sm  sm:justify-center gap-6 lg:gap-12 px-2">
            <!-- Card 1 -->        
            <div class="overflow-hidden z-10 relative bottom-20 lg:top-5 lg:-mt-48 w-full max-w-xs lg:max-w-md lg:flex bg-lightPink border-2 border-slate-800 rounded-lg shadow transform hover:scale-110 transition-all duration-300">
                <div class="h-48 bg-mediumCake bg-cover bg-center lg:h-60 lg:w-[50%] lg:mr-4">

                </div>
                <div class="p-2 lg:mt-1">
                    <h5 class="mb-2 px-2 text-xl font-medium text-slate-800">Medium Cake</h5>
                    <div class="flex items-baseline text-slate-800 px-2 space-x-1">
                        <span class="text-xl font-semibold">$</span>
                        <span class="text-2xl font-bold tracking-tight">39</span>
                    </div>
                    <ul role="list" class="space-y-5 my-3 px-2">
                        <li class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-pink-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-slate-700">Attribute 1</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-pink-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-slate-700">Attribute 2</span>
                        </li>
                    </ul>
                    <button type="button" on:click={() => toggleBuilder("Medium")} class="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg my-1 px-5 py-2.5 inline-flex justify-center w-full text-center">
                        Start Building
                    </button>
                </div>
            </div>
            <!-- Card 2 -->        
            <div class="overflow-hidden z-10 relative bottom-20 lg:top-5 lg:-mt-48 w-full max-w-xs lg:max-w-md lg:flex bg-lightPink border-2 border-slate-800 rounded-lg shadow transform hover:scale-110 transition-all duration-300">
                <div class="h-48 bg-largeCake bg-cover bg-center lg:h-60 lg:w-[50%] lg:mr-4">

                </div>
                <div class="p-2 lg:mt-1">
                    <h5 class="mb-2 px-2 text-xl font-medium text-slate-800">Large Cake</h5>
                    <div class="flex items-baseline text-slate-800 px-2 space-x-1">
                        <span class="text-xl font-semibold">$</span>
                        <span class="text-2xl font-bold tracking-tight">59</span>
                    </div>
                    <ul role="list" class="space-y-5 my-3 px-2">
                        <li class="flex space-x-3 items-center">
                            <svg class="flex-shrink-0 w-4 h-4 text-pink-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-slate-700">Attribute 1</span>
                        </li>
                        <li class="flex space-x-3">
                            <svg class="flex-shrink-0 w-4 h-4 text-pink-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span class="text-base font-normal leading-tight text-slate-700">Attribute 2</span>
                        </li>
                    </ul>
                    <button type="button" on:click={() => toggleBuilder("Large")} class="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg my-1 px-5 py-2.5 inline-flex justify-center w-full text-center">
                        Start Building
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Cake Builder -->
    {#if showBuilder}
        <div class="fixed top-0 z-50 h-screen w-full backdrop-blur-sm bg-black bg-opacity-75
        flex justify-center items-center">
            <CakeBuilder {cakeSize} bind:showBuilder={showBuilder} />
        </div>
    {/if}
</main>
