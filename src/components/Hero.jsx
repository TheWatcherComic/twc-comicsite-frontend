import React from 'react'

const Hero = () => {
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-neutral-100 dark:bg-zinc-800">
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Civil War II</h1>
          <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Marvel</p>
        </div>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src="https://readcomicsonline.ru/uploads/manga/civil-war-ii-2016/chapters/1/01.jpg" alt="" class="w-full h-96 object-cover rounded-lg sm:h-69 sm:col-span-2 lg:col-span-full" loading="lazy" />
        </div>
        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt class="sr-only">Reviews</dt>
          <dd class="text-amber-500 flex items-center dark:text-amber-500">
            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>4.89 <span class="text-slate-400 font-normal">(1)</span></span>
          </dd>      
        </dl>
        
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-justify dark:text-slate-400 ">
        It's here! The explosive first chapter in the comic event EVERYONE will be talking about. And we come out swinging with a blistering double-sized first issue from the creative team behind last year's best-selling debut of INVINCIBLE IRON MAN and Miles Morales. A new Inhuman, with the ability to profile the future, emerges and the ramifications ripple into every corner of the Marvel Universe. Lines are drawn, bodies fall, and the Marvel Universe will be rocked to it's very core. The action starts here!
        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button type="button" class="bg-red-500 hover:bg-red-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 rounded-lg">BUY</button>
        </div>
        </p>
      </div>
</div>
  )
}

export default Hero