<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"
          ><router-link to="/">Gisela Debatin</router-link></a
        >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <router-link to="Literatur">Literatur</router-link>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item"> Kater Wassili und Peter der Große </a>
                <a class="dropdown-item">China?</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <router-link to="/Kunst">Kunst</router-link>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item">Ölbilder</a>
                <a class="dropdown-item">Hinterglasbilder</a>
                <a class="dropdown-item">Keramiken</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
