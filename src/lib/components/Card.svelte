<script lang="ts">
  interface Props {
    variant?: 'glass' | 'solid' | 'gradient';
    blur?: 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean;
    shadow?: boolean;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
    class?: string;
    [key: string]: any;
  }

  let {
    variant = 'glass',
    blur = 'md',
    border = true,
    shadow = true,
    rounded = 'xl',
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  // Blur classes
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full'
  };

  // Variant classes
  const variantClasses = {
    glass: 'bg-white/8 border-white/15',
    solid: 'bg-slate-800/90 border-slate-700/50',
    gradient: 'bg-gradient-to-br from-white/10 to-white/5 border-white/20'
  };

  const classes = [
    'relative',
    blurClasses[blur],
    roundedClasses[rounded],
    variantClasses[variant],
    border ? 'border' : '',
    shadow ? 'shadow-lg shadow-black/10' : '',
    className
  ].filter(Boolean).join(' ');
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>

<style>
  /* Additional custom styles if needed */
</style>