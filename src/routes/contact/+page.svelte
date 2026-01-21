<script lang="ts">
  import { Nav, Footer, GradientBackground, ContactForm } from "$lib/components";
</script>

<GradientBackground>
  <div class="flex justify-center pt-8">
    <Nav />
  </div>

  <main class="container mx-auto px-6 py-12 text-white">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
        Contact Me
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Got a project, question, or just want to say hi? Fill out the form below
        and I'll get back to you as soon as I can.
      </p>
    </div>

    <section class="max-w-2xl mx-auto">
      <ContactForm class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" />
    </section>

    <Footer class="mt-20" />
  </main>
</GradientBackground>
