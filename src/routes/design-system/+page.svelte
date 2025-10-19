<script lang="ts">
  import { Button, Chip, Text, Alert, Card } from '$lib/components';

  let selectedChip = 'primary';
  let showAlert = true;
</script>

<div class="min-h-screen bg-gradient-to-br from-[rgba(37,80,122,0.9)] via-[rgba(6,86,112,0.9)] via-25% via-[rgba(0,85,102,0.9)] via-50% via-[rgba(0,119,136,0.9)] via-75% to-[rgba(0,153,170,0.9)] text-white p-8">
  <div class="max-w-6xl mx-auto space-y-12">
    
    <!-- Header -->
    <div class="text-center space-y-4">
      <Text variant="h1" gradient>Color Palette & Components</Text>
      <Text variant="p" color="secondary" size="lg">
        Comprehensive design system for Rifky Landing
      </Text>
    </div>

    <!-- Buttons Section -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Buttons</Text>
      
      <div class="space-y-6">
        <!-- Primary Buttons -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Primary Variants</Text>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
            <Button variant="primary" size="xl">XLarge Primary</Button>
          </div>
        </div>

        <!-- All Variants -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">All Variants</Text>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="glass">Glass</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        <!-- States -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Button States</Text>
          <div class="flex flex-wrap gap-4">
            <Button variant="primary">Normal</Button>
            <Button variant="primary" loading>Loading</Button>
            <Button variant="primary" disabled>Disabled</Button>
            <Button variant="glass" fullWidth>Full Width</Button>
          </div>
        </div>
      </div>
    </Card>

    <!-- Chips Section -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Chips</Text>
      
      <div class="space-y-6">
        <!-- Chip Variants -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Chip Variants</Text>
          <div class="flex flex-wrap gap-3">
            <Chip variant="primary" selected={selectedChip === 'primary'} 
                  on:click={() => selectedChip = 'primary'}>Primary</Chip>
            <Chip variant="secondary" selected={selectedChip === 'secondary'}
                  on:click={() => selectedChip = 'secondary'}>Secondary</Chip>
            <Chip variant="accent" selected={selectedChip === 'accent'}
                  on:click={() => selectedChip = 'accent'}>Accent</Chip>
            <Chip variant="success">Success</Chip>
            <Chip variant="warning">Warning</Chip>
            <Chip variant="error">Error</Chip>
            <Chip variant="neutral">Neutral</Chip>
            <Chip variant="glass">Glass</Chip>
          </div>
        </div>

        <!-- Chip Sizes -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Chip Sizes</Text>
          <div class="flex flex-wrap items-center gap-3">
            <Chip variant="primary" size="sm">Small</Chip>
            <Chip variant="primary" size="md">Medium</Chip>
            <Chip variant="primary" size="lg">Large</Chip>
          </div>
        </div>

        <!-- Removable Chips -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Removable Chips</Text>
          <div class="flex flex-wrap gap-3">
            <Chip variant="primary" removable>JavaScript</Chip>
            <Chip variant="secondary" removable>TypeScript</Chip>
            <Chip variant="accent" removable>Svelte</Chip>
            <Chip variant="glass" removable>React</Chip>
          </div>
        </div>
      </div>
    </Card>

    <!-- Typography Section -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Typography</Text>
      
      <div class="space-y-6">
        <!-- Headings -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Headings</Text>
          <div class="space-y-2">
            <Text variant="h1">Heading 1 - Main Title</Text>
            <Text variant="h2">Heading 2 - Section Title</Text>
            <Text variant="h3">Heading 3 - Subsection</Text>
            <Text variant="h4">Heading 4 - Component Title</Text>
            <Text variant="h5">Heading 5 - Small Section</Text>
            <Text variant="h6">Heading 6 - Minimal Heading</Text>
          </div>
        </div>

        <!-- Text Colors -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Text Colors</Text>
          <div class="space-y-2">
            <Text color="primary">Primary text color (95% opacity)</Text>
            <Text color="secondary">Secondary text color (80% opacity)</Text>
            <Text color="tertiary">Tertiary text color (65% opacity)</Text>
            <Text color="muted">Muted text color (50% opacity)</Text>
            <Text color="white">Pure white text</Text>
            <Text color="accent">Accent colored text</Text>
          </div>
        </div>

        <!-- Gradient Text -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Special Effects</Text>
          <div class="space-y-2">
            <Text variant="h2" gradient>Beautiful Gradient Text</Text>
            <Text variant="h3" gradient>Gradient Works on Any Size</Text>
          </div>
        </div>

        <!-- Text Sizes -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Text Sizes</Text>
          <div class="space-y-2">
            <Text size="4xl">Extra Large Text (4xl)</Text>
            <Text size="3xl">Large Text (3xl)</Text>
            <Text size="2xl">Medium Large Text (2xl)</Text>
            <Text size="xl">Extra Large Text (xl)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="base">Base Text (base)</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="xs">Extra Small Text (xs)</Text>
          </div>
        </div>
      </div>
    </Card>

    <!-- Alerts Section -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Alerts & Notifications</Text>
      
      <div class="space-y-4">
        {#if showAlert}
          <Alert variant="info" dismissible on:dismiss={() => showAlert = false}>
            <Text weight="medium">Information Alert</Text>
            <Text color="secondary" size="sm">This is an informational message with glass morphism styling.</Text>
          </Alert>
        {/if}

        <Alert variant="success">
          <Text weight="medium">Success Alert</Text>
          <Text color="secondary" size="sm">Your action was completed successfully!</Text>
        </Alert>

        <Alert variant="warning" size="sm">
          <Text weight="medium" size="sm">Warning Alert</Text>
          <Text color="secondary" size="xs">Please review this information carefully.</Text>
        </Alert>

        <Alert variant="error" icon={false}>
          <Text weight="medium">Error Alert (No Icon)</Text>
          <Text color="secondary" size="sm">Something went wrong. Please try again.</Text>
        </Alert>

        <Alert variant="glass" size="lg">
          <Text weight="medium" size="lg">Glass Alert</Text>
          <Text color="secondary">This alert uses the glass morphism styling for a modern look.</Text>
        </Alert>
      </div>
    </Card>

    <!-- Color Palette Reference -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Color Palette Reference</Text>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Primary Colors -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Primary (Blue)</Text>
          <div class="space-y-2">
            <div class="h-10 bg-blue-500 rounded flex items-center px-3">
              <Text size="sm">blue-500</Text>
            </div>
            <div class="h-10 bg-blue-600 rounded flex items-center px-3">
              <Text size="sm">blue-600</Text>
            </div>
            <div class="h-10 bg-blue-700 rounded flex items-center px-3">
              <Text size="sm">blue-700</Text>
            </div>
          </div>
        </div>

        <!-- Secondary Colors -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Secondary (Teal)</Text>
          <div class="space-y-2">
            <div class="h-10 bg-teal-500 rounded flex items-center px-3">
              <Text size="sm">teal-500</Text>
            </div>
            <div class="h-10 bg-teal-600 rounded flex items-center px-3">
              <Text size="sm">teal-600</Text>
            </div>
            <div class="h-10 bg-teal-700 rounded flex items-center px-3">
              <Text size="sm">teal-700</Text>
            </div>
          </div>
        </div>

        <!-- Accent Colors -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Accent (Purple)</Text>
          <div class="space-y-2">
            <div class="h-10 bg-purple-500 rounded flex items-center px-3">
              <Text size="sm">purple-500</Text>
            </div>
            <div class="h-10 bg-purple-600 rounded flex items-center px-3">
              <Text size="sm">purple-600</Text>
            </div>
            <div class="h-10 bg-purple-700 rounded flex items-center px-3">
              <Text size="sm">purple-700</Text>
            </div>
          </div>
        </div>
      </div>

      <!-- Glass Examples -->
      <div class="mt-8">
        <Text variant="h4" color="secondary" class="mb-3">Glass Morphism Examples</Text>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-white/8 border border-white/15 rounded-xl backdrop-blur-sm">
            <Text size="sm" weight="medium">Light Glass</Text>
            <Text size="xs" color="secondary">bg-white/8</Text>
          </div>
          <div class="p-4 bg-white/12 border border-white/25 rounded-xl backdrop-blur-md">
            <Text size="sm" weight="medium">Medium Glass</Text>
            <Text size="xs" color="secondary">bg-white/12</Text>
          </div>
          <div class="p-4 bg-white/16 border border-white/35 rounded-xl backdrop-blur-lg">
            <Text size="sm" weight="medium">Strong Glass</Text>
            <Text size="xs" color="secondary">bg-white/16</Text>
          </div>
        </div>
      </div>
    </Card>

    <!-- Usage Examples -->
    <Card variant="glass" class="p-8">
      <Text variant="h2" class="mb-6">Usage Examples</Text>
      
      <div class="space-y-6">
        <!-- Navigation Example -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Navigation Bar Example</Text>
          <div class="p-4 bg-white/8 border border-white/15 rounded-xl backdrop-blur-xl flex items-center justify-between">
            <div class="flex items-center gap-4">
              <Text weight="bold">Logo</Text>
              <div class="hidden md:flex gap-4">
                <Text color="secondary">Home</Text>
                <Text color="secondary">About</Text>
                <Text color="secondary">Projects</Text>
              </div>
            </div>
            <Button variant="glass" size="sm">Contact</Button>
          </div>
        </div>

        <!-- Card Example -->
        <div>
          <Text variant="h4" color="secondary" class="mb-3">Project Card Example</Text>
          <div class="p-6 bg-white/8 border border-white/15 rounded-xl backdrop-blur-xl space-y-4">
            <div class="flex items-start justify-between">
              <div>
                <Text variant="h3">Project Name</Text>
                <Text color="secondary">Brief project description goes here</Text>
              </div>
              <Chip variant="success" size="sm">Active</Chip>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <Chip variant="primary" size="sm">React</Chip>
              <Chip variant="secondary" size="sm">TypeScript</Chip>
              <Chip variant="accent" size="sm">Tailwind</Chip>
            </div>
            
            <div class="flex gap-3">
              <Button variant="primary" size="sm">View Project</Button>
              <Button variant="outline" size="sm">Source Code</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>

  </div>
</div>