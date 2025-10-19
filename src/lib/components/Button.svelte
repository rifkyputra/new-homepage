<script lang="ts">
  interface Props {
    variant?: 'primary' | 'secondary' | 'accent' | 'glass' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onmouseenter?: (event: MouseEvent) => void;
    onmouseleave?: (event: MouseEvent) => void;
    onfocus?: (event: FocusEvent) => void;
    onblur?: (event: FocusEvent) => void;
    [key: string]: any;
  }

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    fullWidth = false,
    href = undefined,
    type = 'button',
    class: className = '',
    onclick,
    onkeydown,
    onmouseenter,
    onmouseleave,
    onfocus,
    onblur,
    ...restProps
  }: Props = $props();

  const isLink = $derived(href !== undefined);
  const tag = $derived(isLink ? 'a' : 'button');
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40',
    secondary: 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-500/25 hover:from-teal-700 hover:to-teal-800 hover:shadow-teal-500/40',
    accent: 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 hover:from-purple-700 hover:to-purple-800 hover:shadow-purple-500/40',
    glass: 'bg-white/10 border border-white/25 text-white backdrop-blur-xl hover:bg-white/15 hover:border-white/35',
    outline: 'border-2 border-white/50 text-white bg-transparent hover:bg-white/10 hover:border-white/70',
    ghost: 'text-white bg-transparent hover:bg-white/10'
  };

  const classes = $derived([
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg',
    'focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
    'transform hover:scale-105 active:scale-95',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    disabled ? 'pointer-events-none' : '',
    className
  ].filter(Boolean).join(' '));
</script>

<svelte:element
  this={tag}
  {href}
  {type}
  {disabled}
  class={classes}
  {...restProps}
  onclick={onclick}
  onkeydown={onkeydown}
  onmouseenter={onmouseenter}
  onmouseleave={onmouseleave}
  onfocus={onfocus}
  onblur={onblur}
>
  {#if loading}
    <svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  {/if}
  <slot />
</svelte:element>

<style>
  /* Additional custom styles if needed */
</style>