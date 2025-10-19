<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    class?: string;
    sizes?: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    };
    defaultSize?: string;
  }

  let {
    src,
    alt,
    class: className = "",
    sizes = { mobile: "24px", tablet: "28px", desktop: "32px" },
    defaultSize = "32px",
  }: Props = $props();
</script>

<img
  {src}
  {alt}
  class="responsive-image {className}"
  style="
    width: {sizes.mobile ?? defaultSize}; 
    height: {sizes.mobile ?? defaultSize};
    --tablet-size: {sizes.tablet ?? defaultSize};
    --desktop-size: {sizes.desktop ?? defaultSize};
  "
/>

<style>
  .responsive-image {
    object-fit: contain;
    transition: all 0.3s ease;
  }

  @media (min-width: 640px) {
    .responsive-image {
      width: var(--tablet-size);
      height: var(--tablet-size);
    }
  }

  @media (min-width: 1024px) {
    .responsive-image {
      width: var(--desktop-size);
      height: var(--desktop-size);
    }
  }
</style>
