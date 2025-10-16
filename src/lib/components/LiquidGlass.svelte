<script lang="ts">
  interface Props {
    children?: any;
    width?: string;
    height?: string;
    borderRadius?: string;
    onClick?: () => void;
    class?: string;
    type?: "button" | "div";
    background?: "clear" | "black";
  }

  let {
    children,
    width = "300px",
    height = "200px",
    borderRadius = "56px",
    onClick = undefined,
    class: additionalClass = "",
    type = "div",
    background = "clear",
  }: Props = $props();

  const isBlackBackground = background === "black";

  const glassBg = `--glass-bg: ${
    isBlackBackground ? "rgba(50, 47, 47, 0.38)" : "rgba(18, 17, 17, 0.08)"
  };`;

  const glassBoxShadow = `--glass-box-shadow: ${
    isBlackBackground
      ? "inset 0 0 8px -5px #b59c9c"
      : "inset 0 0 12px -5px #b59c9c"
  };`;

  const glassBackdropBlur = `--glass-backdrop-blur: ${
    isBlackBackground ? "blur(7px)" : "blur(10px)"
  };`;

  const glassAfterBackdropBlur = `--glass-after-backdrop-blur: ${
    isBlackBackground ? "blur(10px)" : "blur(0px)"
  };`;

  const glassTextColor = `--glass-text-color: ${
    isBlackBackground ? "#ffffff" : "currentColor"
  };`;

  const glassTextSize = `--glass-text-size: ${
    isBlackBackground ? "24px" : "18px"
  };`;

  const glassTextShadow = `--glass-text-shadow: ${
    isBlackBackground
      ? "0px 2px 3px rgba(0, 0, 0, 0.22)"
      : "0px 2px 4px rgba(0, 0, 0, 0.22)"
  };`;

  const customStyles = `${glassBg} ${glassBoxShadow} ${glassBackdropBlur} ${glassAfterBackdropBlur} ${glassTextColor} ${glassTextSize} ${glassTextShadow}`;
</script>

{#if type === "button"}
  <button
    class="liquid-glass {additionalClass}"
    style="width: {width}; height: {height}; border-radius: {borderRadius}; {customStyles}"
    onclick={onClick}
  >
    <div class="glass-text">
      {@render children?.()}
    </div>
  </button>
{:else if onClick}
  <div
    class="liquid-glass {additionalClass}"
    style="width: {width}; height: {height}; border-radius: {borderRadius}; {customStyles}"
    onclick={onClick}
    role="button"
    tabindex="0"
    onkeydown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
  >
    <div class="glass-text">
      {@render children?.()}
    </div>
  </div>
{:else}
  <div
    class="liquid-glass {additionalClass}"
    style="width: {width}; height: {height}; border-radius: {borderRadius}; {customStyles}"
  >
    <div class="glass-text">
      {@render children?.()}
    </div>
  </div>
{/if}

<style>
  .liquid-glass {
    position: relative;
    isolation: isolate;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .liquid-glass:focus {
    outline: none;
  }

  .liquid-glass:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.3);
  }

  .liquid-glass::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: inherit;
    box-shadow: var(--glass-box-shadow, inset 0 0 12px -5px #b59c9c);
    background-color: var(--glass-bg, rgba(18, 17, 17, 0.08));
    backdrop-filter: var(--glass-backdrop-blur, blur(10px));
    -webkit-backdrop-filter: var(--glass-backdrop-blur, blur(10px));
  }

  .liquid-glass::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    backdrop-filter: var(--glass-after-backdrop-blur, blur(0px));
    -webkit-backdrop-filter: var(--glass-after-backdrop-blur, blur(0px));
    filter: url(#glass-distortion);
    -webkit-filter: url(#glass-distortion);
  }

  .glass-text {
    position: relative;
    color: var(--glass-text-color, currentColor);
    font-size: var(--glass-text-size, 18px);
    font-weight: 400;
    text-shadow: var(--glass-text-shadow, 0px 2px 4px rgba(0, 0, 0, 0.22));
    opacity: 1;
    transform: translate(0px, 0px);
    font-family: "Georgia", "Microsoft YaHei", "微软雅黑", serif;
    z-index: 1;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .glass-text {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .glass-text {
      font-size: 14px;
    }
  }
</style>
