<script>
  import TypedTitle from '../../components/TypedTitle/TypedTitle.svelte';
</script>

<style>
  .projects {
    position: absolute;
    bottom: 16px;
    left: 0;
    right: 0;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    flex-direction: column;
  }

  .projects a {
    line-height: 1.42;
    font-size: 14px;
  }
  .intro {
    margin-top: 100px;
    font-size: 48px;
    font-weight: 700;
    padding-bottom: 8px;
  }

  h1.tagLine {
    font-size: 18px;
    font-weight: 400;
    margin: 18px;
  }

  div.linkedBar {
    font-size: 34px;
    padding: 4px 0;
  }

  div.linkedBar i {
    padding: 0 10px;
  }

  a.link {
    display: inline-block;
    box-shadow: 0 0 1px transparent;
    transform: perspective(1px) translateZ(0);
  }
  a.link:hover,
  a.link:focus,
  a.link:active {
    animation: icon-wobble 0.75s ease-in-out;
    transform: translate3d(0, 0, 0);
  }

  h3 {
    font-size: 18px;
    margin-block-start: 0;
    margin-block-end: 12px;
  }

  @media (min-width: 400px) {
    .intro {
      margin-top: 150px;
      font-size: 58px;
      padding-bottom: 10px;
    }
    h1.tagLine {
      font-size: 20px;
      margin: 20px;
    }
    div.linkedBar {
      font-size: 38px;
    }
  }

  @media (min-width: 600px) {
    .intro {
      margin-top: 200px;
      font-size: 68px;
      padding-bottom: 12px;
    }
    h1.tagLine {
      font-size: 22px;
      margin: 24px;
    }
    div.linkedBar {
      font-size: 44px;
    }
  }

  @media (min-width: 1250px) {
    .intro {
      margin-top: 250px;
      font-size: 78px;
      padding-bottom: 16px;
      padding-left: 97px;
    }
    h1.tagLine {
      font-size: 24px;
      margin: 24px;
    }
    div.linkedBar {
      font-size: 48px;
    }
  }

  @keyframes icon-wobble {
    25% {
      transform: translateY(-8px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-4px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</style>

<div class="intro">
  <TypedTitle hydrate-client={{}} />
</div>
<h1 class="tagLine">Full-Stack Web Developer (React, Node)</h1>
<div class="linkedBar">
  <a class="link" target="_blank" rel="noopener noreferrer nofollow" href="https://github.com/halafi">
    <i class="fab fa-github" />
  </a>
  <a class="link" target="_blank" rel="noopener noreferrer nofollow" href="https://gitlab.com/halafi">
    <i class="fab fa-gitlab" />
  </a>
  <a
    class="link"
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://stackoverflow.com/users/4227313/halafi">
    <i class="fab fa-stack-overflow" />
  </a>
  <a
    class="link"
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://www.linkedin.com/in/filip-halas-a7928476/">
    <i class="fab fa-linkedin" />
  </a>
</div>
<div class="projects">
  <h3>See my latest side projects</h3>
  <a target="_blank" rel="noopener noreferrer" href="https://minesweeper2k20.web.app">Minesweeper PWA</a>
  <!-- <a target="_blank" rel="noopener noreferrer" href="https://pfolio.cz">Investment and Fintech blog</a> -->
</div>
