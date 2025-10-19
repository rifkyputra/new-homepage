<script lang="ts">
  interface Props {
    class?: string;
    children?: any;
    maxWidth?: string;
    padding?: "none" | "sm" | "md" | "lg";
    center?: boolean;
  }

  let {
    class: className = "",
    children,
    maxWidth = "800px",
    padding = "md",
    center = true,
  }: Props = $props();

  const paddingClasses = {
    none: "",
    sm: "px-2 sm:px-4",
    md: "px-4 sm:px-6 lg:px-8",
    lg: "px-6 sm:px-8 lg:px-12",
  };
</script>

<div
  class="responsive-container {className} {paddingClasses[padding]}"
  class:center
  style="max-width: {maxWidth};"
>
  {@render children?.()}
</div>

<style>
  .responsive-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    .responsive-container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  @media (max-width: 480px) {
    .responsive-container {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
</style>
