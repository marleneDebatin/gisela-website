<template>
  <div id="app">
    <b-navbar type="light" variant="light">
    <b-navbar-nav>
      <b-nav-item><router-link to="/">Gisela Debatin</router-link></b-nav-item>

      <b-nav-item-dropdown text="Literatur" right>
        <b-dropdown-item><router-link to="/Literatur">Wassili und Peter der Große</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Kunst" right>
        <b-dropdown-item><router-link to="/Kunst#Ölbilder">Ölbilder</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/Kunst#Keramiken">Keramiken</router-link></b-dropdown-item>
		<b-dropdown-item><router-link to="/Kunst#Hinterglasbilder">Hinterglasbilder</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
