<script lang="ts">
    import { fade } from "svelte/transition";

    export let cakeSize = "";
    export let showBuilder = true;

    let phase = 5;
    let maxFillings = (cakeSize == "Medium") ? 2 : 4;

    const toggleBuilder = (size: string) => {
        showBuilder = !showBuilder;
    };

    const previous = () => {
        phase--;
    };

    const next = () => {
        phase++;
    };
    
    // Prepare for if-multiverse
    const toggleFilling = (filling: string) => {
        if (filling == "chocolate") {
            if (!fillings.chocolate) {
                if (fillingCount > 0) {
                    fillingCount--;
                    fillings.chocolate = true;
                } else {
                    console.log("MAX REACHED")
                }
            } else {
                fillingCount++;
                fillings.chocolate = false;
            }
        }
        else if (filling == "vanilla") {
            if (!fillings.vanilla) {
                if (fillingCount > 0) {
                    fillingCount--;
                    fillings.vanilla = true;
                } else {
                    console.log("MAX REACHED")
                }
            } else {
                fillingCount++;
                fillings.vanilla = false;
            }
        }
        else if (filling == "coconut") {
            if (!fillings.coconut) {
                if (fillingCount > 0) {
                    fillingCount--;
                    fillings.coconut = true;
                } else {
                    console.log("MAX REACHED")
                }
            } else {
                fillingCount++;
                fillings.coconut = false;
            }
        }
    };

    // Cake settings
    let dough = "";
    let fillingCount = maxFillings;
    let fillings = {
        "chocolate": false,
        "vanilla": false,
        "coconut": false,
    };
    let coating = "";
    let celebration = "";
    let comment = "";

</script>

<div class="relative z-100 max-h-[800px] max-w-[600px] h-[70%] w-[90%] bg-pink-200 rounded-lg bg-opacity-80 m-2 py-4 px-8
flex flex-col items-center gap-2 font-medium tracking-widest">

    <!-- Previous button -->
    {#if phase > 1}
    <button on:click={() => previous()}
        class="absolute top-3 left-4 py-2
        text-xs font-medium uppercase tracking-widest">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            Previous
    </button>
    {/if}

    <!-- Close button -->
    <button on:click={() => {toggleBuilder("")}} class="absolute top-2 right-4 opacity-50 hover:opacity-100 
    transition-opacity duration-200">
        <i class="fa fa-times fa-lg" aria-hidden="true"></i>
    </button>

    <!-- Body -->
    {#key phase}
        <div id="cake" class="absolute mt-6 w-full h-full px-4 flex flex-col gap-6 text-sm"
        in:fade={{ duration: 700, delay: 350}} out:fade={{ duration: 350 }}>

            <!-- Labels -->
            <h1 class="mx-auto text-2xl text-center mt-4">
                {#if phase == 1}
                    Choose your dough:
                {:else if phase == 2}
                    Choose up to {maxFillings} filling flavors:
                {:else if phase == 3}
                    How would you like the coating?
                {:else if phase == 4}
                    Is this for a celebration?
                {:else if phase == 5}
                    Leave us additional instructions.
                {:else if phase == 6}
                    How can we reach you?
                {/if}
            </h1>
            
            <!-- Selections -->
            {#if phase == 1}
                <!-- Dough -->
                <div class="relative w-full h-fit mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                    <!-- Chocolate -->
                    <button on:click={() => {dough = "chocolate"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw]  md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Chocolate</h1>
                    </button>

                    <!-- Vanilla -->
                    <button on:click={() => {dough = "vanilla"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Vanilla</h1>
                    </button>

                    <!-- Coconut -->
                    <button on:click={() => {dough = "coconut"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Coconut</h1>
                    </button>
                </div>
    
            {:else if phase == 2}
                <!-- Fillings -->   
                <div class="relative w-full h-fit mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                    <!-- Chocolate -->
                    <button on:click={() => {toggleFilling("chocolate")}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw]  md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300 {fillings.chocolate ? "opacity-100" : "opacity-40"}"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Chocolate</h1>
                    </button>

                    <!-- Vanilla -->
                    <button on:click={() => {toggleFilling("vanilla")}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300 {fillings.vanilla ? "opacity-100" : "opacity-40"}"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Vanilla</h1>
                    </button>

                    <!-- Coconut -->
                    <button on:click={() => {toggleFilling("coconut")}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300 {fillings.coconut ? "opacity-100" : "opacity-40"}"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Coconut</h1>
                    </button>
                </div>

                <!-- Next button -->
                <button on:click={() => {next()}}
                class="{fillingCount == maxFillings ? "hidden" : ""}
                w-24 h-8 mx-auto bg-slate-900 text-pink-200 rounded border-2 border-slate-900 shadow-xl 
                text-xs font-medium uppercase tracking-widest">
                    Next
                </button>
 
            {:else if phase == 3}
                <!-- Coating -->
                <div class="relative w-full h-fit mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                    <!-- Chocolate -->
                    <button on:click={() => {coating = "chocolate"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw]  md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Chocolate</h1>
                    </button>

                    <!-- Vanilla -->
                    <button on:click={() => {coating = "vanilla"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Vanilla</h1>
                    </button>

                    <!-- Coconut -->
                    <button on:click={() => {coating = "coconut"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Coconut</h1>
                    </button>
                </div>

                <!-- Next button -->
                <button on:click={() => {next()}}
                class="w-24 h-8 mx-auto bg-slate-900 text-pink-200 rounded border-2 border-slate-900 shadow-xl 
                text-xs font-medium uppercase tracking-widest">
                    Next
                </button>

            {:else if phase == 4}
                <!-- Celebration -->
                <div class="relative w-full h-fit mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                    <!-- No Celebration -->
                    <button on:click={() => {celebration = "no"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">No Celebration</h1>
                    </button>

                    <!-- Birthday -->
                    <button on:click={() => {celebration = "birthday"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw]  md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Birthday</h1>
                    </button>

                    <!-- Anniversary -->
                    <button on:click={() => {celebration = "anniversary"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Anniversary</h1>
                    </button>

                    <!-- Other -->
                    <button on:click={() => {celebration = "other"; next();}} 
                    class="w-[36vw] h-[36vw] sm:w-[10vw] sm:h-[10vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw]
                    border border-black rounded-lg overflow-hidden bg-center bg-cover flex items-end
                    transform hover:scale-110 transition-all duration-300"
                    style="background-image: url(https://images.unsplash.com/photo-1594341715655-c695ba36ccd9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)">
                        <h1 class="w-full text-center bg-slate-900 bg-opacity-90 text-white text-sm uppercase select-none">Other</h1>
                    </button>
                </div>

            {:else if phase == 5}  
                <!-- Comment Area -->
                <textarea id="comment" name="comment" 
                class="block w-full rounded-md shadow-sm p-2" rows="8" placeholder="Leave a message"></textarea>

                <!-- Next button -->
                <button on:click={() => {comment = document.getElementById("comment")?.textContent || ""; next();}}
                    class="w-24 h-8 mx-auto bg-slate-900 text-pink-200 rounded border-2 border-slate-900 shadow-xl 
                    text-xs font-medium uppercase tracking-widest">
                        Next
                </button>

                {:else if phase == 6}  

            {/if}
        </div>
    {/key}
</div>