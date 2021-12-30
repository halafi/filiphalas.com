<script>
  export let templateHtml;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    min-height: 100vh;
    padding: 0 8px;
  }
  :global(.container a) {
    color: inherit;
  }

  :global(body) {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: #ffdc00;
    background-color: #001f3f;
    margin: 0;
    padding: 0;
  }
  :global(::-webkit-scrollbar) {
    display: none;
  }
</style>

<svelte:head>
  <title>Filip Halas - JavaScript Developer (React, Node)</title>
  <meta
    name="description"
    content="Hi 👋, I am a freelance software developer focused on state of the art web apps and static sites, working mainly with React and Svelte. Available remotely." />
  <link rel="icon" href="./favicon.png" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    crossorigin="anonymous" />
  <!-- disabled for now as these styles are not included in pre-rendered html -->
  <!-- <link rel="stylesheet" href="{settings.locations.assets.replace('./public', '')}style.css" /> -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136091005-1">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-136091005-1');
  </script>
</svelte:head>

<div class="container">
  {@html templateHtml}
</div>
