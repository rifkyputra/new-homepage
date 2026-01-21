<script lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral' | 'glass';
    size?: 'sm' | 'md' | 'lg';
    removable?: boolean;
    disabled?: boolean;
    selected?: boolean;
    class?: string;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;
    onremove?: () => void;
    [key: string]: any;
  }

  let {
    variant = 'primary',
    size = 'md',
    removable = false,
    disabled = false,
    selected = false,
    class: className = '',
    onclick,
    onkeydown,
    onmouseenter,
    onmouseleave,
    onremove,
    children,
    ...restProps
  }: Props = $props();

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-500/20 text-blue-200 border-blue-400/30 hover:bg-blue-500/30 hover:border-blue-400/50',
    secondary: 'bg-teal-500/20 text-teal-200 border-teal-400/30 hover:bg-teal-500/30 hover:border-teal-400/50',
    accent: 'bg-purple-500/20 text-purple-200 border-purple-400/30 hover:bg-purple-500/30 hover:border-purple-400/50',
    success: 'bg-green-500/20 text-green-200 border-green-400/30 hover:bg-green-500/30 hover:border-green-400/50',
    warning: 'bg-yellow-500/20 text-yellow-200 border-yellow-400/30 hover:bg-yellow-500/30 hover:border-yellow-400/50',
    error: 'bg-red-500/20 text-red-200 border-red-400/30 hover:bg-red-500/30 hover:border-red-400/50',
    neutral: 'bg-white/10 text-white/90 border-white/20 hover:bg-white/15 hover:border-white/30',
    glass: 'bg-white/8 text-white/95 border-white/15 backdrop-blur-sm hover:bg-white/12 hover:border-white/25'
  };

  const classes = $derived([
    'inline-flex items-center gap-1.5 font-medium transition-all duration-200 rounded-full border',
    'focus:outline-none focus:ring-2 focus:ring-white/20',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    selected ? 'ring-2 ring-white/30' : '',
    disabled ? 'pointer-events-none' : '',
    className
  ].filter(Boolean).join(' '));
</script>

<div
  class={classes}
  {...restProps}
  onclick={onclick}
  onkeydown={onkeydown}
  onmouseenter={onmouseenter}
  onmouseleave={onmouseleave}
>
  {@render children?.()}
  {#if removable}
    <button
      type="button"
      class="inline-flex items-center justify-center w-4 h-4 text-current rounded-full hover:bg-white/20 transition-colors duration-150"
      onclick={(e) => {
        e.stopPropagation();
        onremove?.();
      }}
      aria-label="Remove"
    >
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  {/if}
</div>

<style>
  /* Additional custom styles if needed */
</style>