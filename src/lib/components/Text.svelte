<script lang="ts">
  interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small';
    color?: 'primary' | 'secondary' | 'tertiary' | 'muted' | 'white' | 'accent';
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
    align?: 'left' | 'center' | 'right' | 'justify';
    gradient?: boolean;
    class?: string;
  }

  let {
    variant = 'p',
    color = 'primary',
    size = 'base',
    weight = 'normal',
    align = 'left',
    gradient = false,
    class: className = '',
    children
  }: Props = $props();

  // Color classes
  const colorClasses = {
    primary: 'text-white/95',
    secondary: 'text-white/80',
    tertiary: 'text-white/65',
    muted: 'text-white/50',
    white: 'text-white',
    accent: 'text-purple-300'
  };

  // Size classes
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  };

  // Weight classes
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  };

  // Align classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  // Default sizes for different variants
  const defaultSizes = {
    h1: '4xl',
    h2: '3xl',
    h3: '2xl',
    h4: 'xl',
    h5: 'lg',
    h6: 'base',
    p: 'base',
    span: 'base',
    small: 'sm'
  };

  // Default weights for different variants
  const defaultWeights = {
    h1: 'bold',
    h2: 'bold',
    h3: 'semibold',
    h4: 'semibold',
    h5: 'medium',
    h6: 'medium',
    p: 'normal',
    span: 'normal',
    small: 'normal'
  };

  const actualSize = $derived(size === 'base' && defaultSizes[variant] ? defaultSizes[variant] : size);
  const actualWeight = $derived(weight === 'normal' && defaultWeights[variant] ? defaultWeights[variant] : weight);

  const classes = $derived([
    sizeClasses[actualSize as keyof typeof sizeClasses],
    weightClasses[actualWeight],
    alignClasses[align],
    gradient ? 'bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent' : colorClasses[color],
    gradient ? 'drop-shadow-sm' : '',
    className
  ].filter(Boolean).join(' '));
</script>

<svelte:element
  this={variant}
  class={classes}
>
  {@render children?.()}
</svelte:element>

<style>
  /* Additional custom styles if needed */
</style>