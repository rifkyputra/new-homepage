<script lang="ts">
  interface Props {
    class?: string;
    children?: any;
    columns?: {
      mobile?: number;
      tablet?: number;
      desktop?: number;
    };
    gap?: "none" | "sm" | "md" | "lg" | "xl";
    minItemWidth?: string;
  }

  let {
    class: className = "",
    children,
    columns = { mobile: 1, tablet: 2, desktop: 3 },
    gap = "md",
    minItemWidth = "250px",
  }: Props = $props();

  const gapClasses = {
    none: "gap-0",
    sm: "gap-2 sm:gap-3",
    md: "gap-4 sm:gap-6",
    lg: "gap-6 sm:gap-8",
    xl: "gap-8 sm:gap-10",
  };
</script>

<div
  class="responsive-grid {className} {gapClasses[gap]}"
  style="
    --columns-mobile: {columns.mobile};
    --columns-tablet: {columns.tablet};
    --columns-desktop: {columns.desktop};
    --min-item-width: {minItemWidth};
  "
>
  {@render children?.()}
</div>

<style>
  .responsive-grid {
    display: grid;
    width: 100%;
  }

  /* Mobile first approach */
  .responsive-grid {
    grid-template-columns: repeat(var(--columns-mobile, 1), 1fr);
  }

  /* Tablet */
  @media (min-width: 640px) {
    .responsive-grid {
      grid-template-columns: repeat(var(--columns-tablet, 2), 1fr);
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .responsive-grid {
      grid-template-columns: repeat(var(--columns-desktop, 3), 1fr);
    }
  }

  /* Auto-fit based on minimum width */
  .responsive-grid.auto-fit {
    grid-template-columns: repeat(
      auto-fit,
      minmax(var(--min-item-width, 250px), 1fr)
    );
  }

  /* Responsive grid items */
  .responsive-grid > :global(*) {
    min-width: 0; /* Prevent overflow */
  }
</style>
