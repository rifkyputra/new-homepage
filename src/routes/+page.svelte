<script lang="ts">
  import { fade } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ChevronRight, Linkedin, Github, Twitter } from "@lucide/svelte";
  import {
    Nav,
    Footer,
    ContactForm,
  } from "$lib/components";
  import hero from "$lib/assets/photo.png";
  import tracehub from "$lib/assets/tracehub.png";
  import placeholder from "$lib/assets/placeholder.jpg";
  import { projects } from "$lib/data/projects";
  import { services } from "$lib/data/services";

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    // Hero section animations
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    // Animate sections on scroll
    const sections = [".case-studies-section", ".services-section", ".recent-work-section", ".contact-section"];
    sections.forEach(selector => {
      gsap.from(selector, {
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
      });
    });

    // Cycle through "Worked with" logos
    const logoElements = gsap.utils.toArray<HTMLElement>('.worked-with-logo');
    if (logoElements.length > 0) {
      gsap.to(logoElements, {
        opacity: 0.5,
        duration: 0.5,
        stagger: {
          each: 0.4,
          repeat: -1,
          yoyo: false,
          repeatDelay: 1.4
        },
        keyframes: {
          "0%": { opacity: 0.9, scale: 1 },
          "100%": { opacity: 0.6, scale: 1 }
        }
      });
    }
  });

  onDestroy(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  });

  // Get latest 2 projects for recent work
  const recentWork = projects.slice(0, 2);

  // Dummy case studies data
  const caseStudies = [
    {
      title: "TraceHub",
      description: "warehouse management platform increasing traceability from raw materials to end products, enhancing transparency and efficiency in supply chain operations.",
      tag: "Supply Chain",
      tagColor: "#ffa217",
      tagBg: "#fff6e9",
      buttonColor: "#ffa217",
      image: tracehub
    },
    {
      title: "LearnCopilot",
      description: "Interactive learning platform with live classes, progress tracking, and AI-powered personalized learning paths for students.",
      tag: "EdTech",
      tagColor: "#000aff",
      tagBg: "#d0e6ff",
      buttonColor: "#000aff",
      image: placeholder
    },
    {
      title: "Medical AI ",
      description: "AI-driven diagnostic tool assisting healthcare professionals in analyzing medical images for faster and more accurate diagnoses.",
      tag: "Healthcare",
      tagColor: "#2ab090",
      tagBg: "#e0fff8",
      buttonColor: "#2ab090",
      image: placeholder
    }
  ];

  const companyLogos = [
    { name: "Jira", opacity: 1 },
    { name: "Convex", opacity: 0.5 },
    { name: "OpenCode", opacity: 0.5 },
    { name: "Claude", opacity: 0.5 },
    { name: "GitHub Copilot", opacity: 0.5 },
    { name: "Notion", opacity: 0.5 },
    { name: "Chrome DevTools", opacity: 0.5 },
    { name: "Bun", opacity: 0.5 },
    { name: "Jupyter Notebook", opacity: 0.5 },
    { name: "Visual Studio Code", opacity: 0.5 }

  ];
</script>

<div class="relative bg-white">
  <!-- Navigation -->
  <div class="w-full sticky top-0 z-[99]">
    <Nav />
  </div>

  <!-- Hero Section -->
  <section class="relative bg-[#080808] min-h-[700px] overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="relative pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="hero-content space-y-8 text-white">
            <div class="space-y-4">
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Raleway'] leading-tight">
                Rifky Adni Putra
              </h1>
              <p class="text-[#9c9c9c] text-sm sm:text-base leading-relaxed max-w-lg font-['IBM_Plex_Mono']">
                Intro text: Full-stack developer passionate about creating beautiful, functional web applications. Specializing in modern web technologies and always eager to tackle new challenges.
              </p>
            </div>
            
            <a 
              href="#contact"
              class="inline-flex items-center gap-2 px-12 py-4 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded text-white font-bold font-['IBM_Plex_Mono'] text-base shadow-[0px_8px_30px_0px_rgba(63,142,0,0.5)] transition-all duration-300"
            >
              Let's get started
              <ChevronRight class="w-4 h-4" />
            </a>
          </div>

          <!-- Right content - Hero image -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden">
              <img src={hero} alt="Profile" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Worked with section -->
        <div class="mt-16 sm:mt-20">
          <p class="text-white text-sm font-['IBM_Plex_Mono'] mb-6">Dev Toolbox</p>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {#each companyLogos as logo}
              <div 
                class="worked-with-logo border border-[#1b1b1b] rounded-lg h-[50px] flex items-center justify-center px-2"
              >
                <span class="text-white text-sm font-['IBM_Plex_Mono']">{logo.name}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
    </section>

  <!-- Case Studies Section -->
  <section class="case-studies-section py-20 lg:py-32 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Raleway'] text-[#080808] mb-4">
          Case Studies
        </h2>
        <p class="text-[#9c9c9c] text-sm sm:text-base max-w-2xl mx-auto font-['IBM_Plex_Mono']">
          Solving real problems with innovative solutions.<br />
          Each project represents a unique challenge overcome through careful planning and execution.
        </p>
      </div>

      <div class="space-y-20">
        {#each caseStudies as study, index}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" class:md:flex-row-reverse={index % 2 === 1}>
            <div class={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div class="aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
                <img src={study.image} alt={study.title} class="w-full h-full object-cover" />
              </div>
            </div>
            
            <div class={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <span 
                class="inline-block px-4 py-1 rounded-full text-xs font-bold font-['IBM_Plex_Mono']"
                style="color: {study.tagColor}; background: {study.tagBg}"
              >
                {study.tag}
              </span>
              <h3 class="text-2xl lg:text-3xl font-extrabold font-['Raleway'] text-[#080808]">
                {study.title}
              </h3>
              <p class="text-[#9c9c9c] text-sm leading-relaxed font-['IBM_Plex_Mono']">
                {study.description}
              </p>
              <button 
                class="inline-flex items-center gap-2 px-6 py-2 rounded text-white font-bold font-['IBM_Plex_Mono'] text-sm shadow-lg transition-all duration-300 hover:shadow-xl"
                style="background: {study.buttonColor}; box-shadow: 0px 8px 30px 0px {study.buttonColor}1a"
              >
                View case study
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        {/each}
      </div>
      </div>
    </section>

  <!-- Services Section -->
  <section class="services-section py-20 lg:py-32 bg-[#080808]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Raleway'] text-white mb-4">
          Services
        </h2>
        <p class="text-[#9c9c9c] text-sm sm:text-base max-w-2xl mx-auto font-['IBM_Plex_Mono']">
          Professional development services tailored to your needs.<br />
          Let's build something amazing together.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {#each services as service, index}
          <div 
            class="relative border border-[#484848] rounded-lg p-8 hover:border-[#3f8e00] transition-all duration-300"
            in:fade={{ duration: 600, delay: index * 100 }}
          >
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 bg-[#3f8e00]/20 rounded-lg">
                <svelte:component this={service.icon} class="w-6 h-6 text-[#3f8e00]" />
              </div>
              <h3 class="text-xl font-bold font-['Raleway'] text-white">{service.title}</h3>
            </div>
            
            <p class="text-[#9c9c9c] text-sm font-['IBM_Plex_Mono'] leading-relaxed mb-4">
              {service.description}
            </p>

            <div class="flex flex-wrap gap-2">
              {#each service.technologies.slice(0, 4) as tech}
                <span class="px-2 py-1 bg-white/10 rounded text-xs font-['IBM_Plex_Mono'] text-white/70">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Recent Work Section -->
  <section class="recent-work-section py-20 lg:py-32 bg-[#f0f0f0]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Raleway'] text-[#080808] mb-4">
          Recent Work
        </h2>
        <p class="text-[#9c9c9c] text-sm sm:text-base max-w-2xl mx-auto font-['IBM_Plex_Mono']">
          Latest projects showcasing my expertise in full-stack development.<br />
          Check out my projects page for more.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {#each recentWork as work, index}
          <div class="space-y-6" in:fade={{ duration: 600, delay: index * 100 }}>
            <div class="aspect-[3/2] rounded-xl overflow-hidden shadow-lg bg-[#f8f8f8] flex items-center justify-center">
              <span class="text-[#9c9c9c] font-['IBM_Plex_Mono'] text-sm">Project Preview</span>
            </div>
            <div class="space-y-3">
              <h3 class="text-2xl font-extrabold font-['Raleway'] text-[#080808]">
                {work.title}
              </h3>
              <p class="text-[#9c9c9c] text-sm font-['IBM_Plex_Mono'] leading-relaxed">
                {work.description}
              </p>
              <div class="flex flex-wrap gap-2">
                {#each work.technologies.slice(0, 4) as tech}
                  <span class="px-2 py-1 bg-[#f1f5f9] rounded text-xs font-['IBM_Plex_Mono'] text-[#64748b]">
                    {tech}
                  </span>
                {/each}
              </div>
              <button class="inline-flex items-center gap-2 px-6 py-2 bg-[#3f8e00] hover:bg-[#2d6600] border border-[#62ba1b] rounded text-white font-bold font-['IBM_Plex_Mono'] text-sm shadow-[0px_8px_30px_0px_rgba(63,142,0,0.3)] transition-all duration-300">
                Know more
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Get In Touch Section -->
  <section id="contact" class="contact-section py-20 lg:py-32 bg-[#080808]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Raleway'] text-white mb-4">
          Get In Touch
        </h2>
        <p class="text-[#9c9c9c] text-sm sm:text-base max-w-xl mx-auto font-['IBM_Plex_Mono']">
          Have a project in mind? Let's discuss how I can help bring your ideas to life.
        </p>
      </div>

      <ContactForm class="max-w-md mx-auto" />
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#1b1b1b] py-6">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-[#9c9c9c] text-sm font-['IBM_Plex_Mono']">
        &copy; {new Date().getFullYear()} Rifky Adni Putra. All rights reserved.
      </p>
    </div>
  </footer>
</div>
