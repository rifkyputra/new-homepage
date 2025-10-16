<script lang="ts">
  interface Props {
    code: string;
    language?: string;
    title?: string;
  }

  let { code, language = "text", title }: Props = $props();
</script>

<div class="code-block">
  {#if title}
    <div class="code-header">
      <span class="code-title">{title}</span>
      <span class="code-language">{language}</span>
    </div>
  {/if}
  <pre class="code-content"><code class="language-{language}">{code}</code
    ></pre>
</div>

<style>
  .code-block {
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(51, 65, 85, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .code-title {
    color: white;
    font-weight: 600;
  }

  .code-language {
    color: #9ca3af;
    font-size: 0.875rem;
  }

  .code-content {
    padding: 1rem;
    overflow-x: auto;
    color: #d1d5db;
    background: transparent;
    margin: 0;
  }

  .code-content code {
    background: transparent;
  }
</style>
