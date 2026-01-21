<script lang="ts">
  interface Props {
    variant?: 'info' | 'success' | 'warning' | 'error' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    icon?: boolean;
    class?: string;
    [key: string]: any;
  }

  let {
    variant = 'info',
    size = 'md',
    dismissible = false,
    icon = true,
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  // Variant classes with glass morphism
  const variantClasses = {
    info: 'bg-blue-500/15 border-blue-400/30 text-blue-100',
    success: 'bg-green-500/15 border-green-400/30 text-green-100',
    warning: 'bg-yellow-500/15 border-yellow-400/30 text-yellow-100',
    error: 'bg-red-500/15 border-red-400/30 text-red-100',
    glass: 'bg-white/10 border-white/20 text-white/90'
  };

  // Icons for each variant
  const icons = {
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.732 18.5c-.77.833.192 2.5 1.732 2.5z',
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    glass: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  };

  const classes = $derived([
    'flex items-start gap-3 rounded-xl border backdrop-blur-sm',
    sizeClasses[size],
    variantClasses[variant],
    className
  ].filter(Boolean).join(' '));

  function dismiss() {
    // Dispatch dismiss event
    const event = new CustomEvent('dismiss');
    dispatchEvent(event);
  }
</script>

<div class={classes} {...restProps}>
  {#if icon}
    <div class="flex-shrink-0 mt-0.5">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icons[variant]} />
      </svg>
    </div>
  {/if}
  
  <div class="flex-1 min-w-0">
    {@render children?.()}
  </div>

  {#if dismissible}
    <button
      type="button"
      class="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 text-current rounded-full hover:bg-white/20 transition-colors duration-150 mt-0.5"
      onclick={dismiss}
      aria-label="Dismiss"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  {/if}
</div>

<style>
  /* Additional custom styles if needed */
</style>