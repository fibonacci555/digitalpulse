import React from "react";
import Navbar from "@/components/nav";
import { BackgroundBeams } from "@/components/ui/bg";
import { motion } from "framer-motion";
import { LampComponent } from "@/components/ui/lamp";
import { ButtonsCard } from '@/components/ui/buttons';
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@/components/ui/btns"



export default function Home() {
  const products = [
    {
      title: "Track Limits",
      link: "https://tracklimitswear.com/",
      thumbnail:
        "/sites/track-pc.png",
    },
    {
      title: "Sicryp",
      link: "https://sicryp.com/",
      thumbnail:
        "/sites/sicryp-pc.png",
    },
    {
      title: "Sicryp",
      link: "https://sicryp.com/",
      thumbnail:
        "/sites/sicryp-mb.png",
    },
    {
      title: "Track Limits",
      link: "https://tracklimitswear.com/",
      thumbnail:
        "/sites/tracklimits-mb.png",
    },
    {
      title: "iBoda",
      link: "https:/iboda.pythonanywhere.com/",
      thumbnail:
        "/sites/iboda2-pc.png",
    },
    {
      title: "iBoda",
      link: "https:/iboda.pythonanywhere.com/",
      thumbnail:
        "/sites/iboda1-pc.png",
    },
    {
      title: "iBoda",
      link: "https:/iboda.pythonanywhere.com/",
      thumbnail:
        "/sites/iboda-mb.png",
    },
    {
      title: "iBoda",
      link: "https:/iboda.pythonanywhere.com/",
      thumbnail:
        "/sites/iboda2-mb.png",
    },
    {
      title: "Pepe Lore",
      link: "https:/pepelore.pythonanywhere.com/",
      thumbnail:
        "/sites/pepelore-pc.png",
    },
    {
      title: "Pepe Lore",
      link: "https:/pepelore.pythonanywhere.com/",
      thumbnail:
        "/sites/pepelore-mb.png",
    },
    {
      title: "Portfolio",
      link: "https:/pepelore.pythonanywhere.com/",
      thumbnail:
        "/sites/portjoao-pc.png",
    },
    {
      title: "Portfolio",
      link: "https:/pepelore.pythonanywhere.com/",
      thumbnail:
        "/sites/portjoao-mb.png",
    },
    {
      title: "Shopify Store",
      link: "#",
      thumbnail:
        "/sites/shopify1.png",
    },
    {
      title: "Shopify Store",
      link: "#",
      thumbnail:
        "/sites/shopify2.png",
    },
    {
      title: "Shopify Store",
      link: "#",
      thumbnail:
        "/sites/shopify3.png",
    }

    
    
  ];


  const tools =[
    {
      href : '/shopify.png'
    },
    {
      href : '/python.png'
    },
    {
      href : '/stripe.png'
    },
    {
      href : '/github.webp'
    },
  ]


  const words = [
    {
      text: "Elevate",
    },
    {
      text: "Your",
    },
    {
      text: "Business",
    },
    {
      text: "with",
    },
    {
      text: "Digital Pulse.",
      className: "text-blue-500 dark:text-blue-500 animation-pulse",
    },
  ];
  
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  


  return (
    <body>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <section>
      
      <Navbar />
    </section>
    <section id="initial h-fit">
      <div className="flex flex-col bg-red min-w-screen min-h-screen items-center justify-center">
      <TypewriterEffectSmooth words={words} className="md:text-2x" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button
                className="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900"><span
                    className="absolute inset-0 overflow-hidden rounded-xl"><span
                        className="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    </span>
                </span>
                <div
                    className="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
                    <span>Lets get started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                        data-slot="icon" className="w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <span
                    className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
        
      </div>
      </div>
      
    </section>
    <section id="services" className="h-fit">
    <div className="mb-[100px] text-transparent"><h1>o</h1></div>
    
    <div className="mt-[20px] max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    <div className=" rounded-md flex flex-col antialiased transparent dark:transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={tools}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
    <section id="clients" className="h-fit">
      <HeroParallax products={products} />
    </section>
    <section id="pricing" className="h-fit min-h-screen">
      <LampComponent />
      
    </section>




    </body>
    

    
  );
}
