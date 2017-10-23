// NAVBAR Component
Vue.component('app-nav', {
    template: `
      <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="/resources/logo.png" alt="Money Mate" width="112" height="28">
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Account
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="./pages/account.html">
            View Account
          </a>
          <a class="navbar-item">
            Add Expense
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0
          </div>
        </div>
      </div>
    </div>

          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Dropdown Two
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Account
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0
          </div>
        </div>
      </div>
    </div>

          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Dropdown Three
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Account
          </a>
          <a class="navbar-item">
            Elements
          </a>
          <a class="navbar-item">
            Components
          </a>
          <hr class="navbar-divider">
          <div class="navbar-item">
            Version 1.0
          </div>
        </div>
      </div>
    </div>
  </nav>
  `
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
