<script>
  import { onMount, onDestroy } from 'svelte';
  import typed from 'typed.js';

  let typedEl;
  let typedText;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const options = {
        strings: ['Hi, I am Filip^6000', 'I make Web Apps^5000'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        cursorChar: ' ✍️',
      };
      typedText = new typed(typedEl, options);
      typedText.start();
    }
  });
  onDestroy(() => {
    if (typedText) {
      typedText.destroy();
    }
  });
</script>

<style>

</style>

<span bind:this={typedEl} />
