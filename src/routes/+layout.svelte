<script>
  import 'bulma'

  let menuOpen = false
  const toggleMenu = () => {
    menuOpen = !menuOpen
    console.log(menuOpen)
  }
</script>

<div class="block">
    <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
      <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <strong>Your Meal</strong>
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
        </a>
    
        <a 
          role="button" 
          class={menuOpen?"navbar-burger is-active": "navbar-burger"}
          aria-label="menu" 
          aria-expanded="false"
          data-target="navbarBasicExample"
          on:click={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class={menuOpen?"navbar-menu is-active": "navbar-menu"}>
        <div class="navbar-start">
          <a class="navbar-item" href="/">Home</a>
          <a class="navbar-item" href="/menu">Menu</a>
          <a class="navbar-item" href="/about">About Us</a>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light" href="/auth/register">
                <strong>Sign up</strong>
              </a>
              <a class="button is-dark" href="/auth/login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
    <div class="container">
      <slot />
    </div>
</div>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  :global(html, body) {
    height: 90svh;
  }

  .block, .container {
    height: 100%;
  }
</style>