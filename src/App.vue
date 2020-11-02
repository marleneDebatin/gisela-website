<template>
  <div id="app">
    <!-- <b-navbar type="light" variant="light">
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
  </b-navbar> -->
  <div class="vertical-nav" id="sidebar">
  <div class="py-4 px-3 mb-4 head">
    <div class="media d-flex align-items-center">
		<!-- <img src="./assets/Wassili favicon.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"> -->
      <div class="media-body">
        <router-link to="/" class="link"><h4 class="m-0 title">Gisela Debatin</h4></router-link>
		<p class="font-weight-light text-muted mb-0">Kunst und Literatur</p>
      </div>
    </div>
  </div>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
	  <router-link to="/Literatur" class="link nav-header">Literatur</router-link>
	</p>

  <ul class="nav flex-column mb-0">
    <li class="nav-item">
      <!-- <a href="#" class="nav-link text-dark bg-light">
                Kater Wassili und Peter der Große
    	</a> -->
    </li>
	<li class="nav-item">
		<router-link to="/Literatur" class= nav-link text-dark>Kater Wassili und Peter der Große</router-link>
    </li>
  </ul>

  <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
	  <router-link to="/Kunst" class="link nav-header">Kunst</router-link>
	  </p>

  <ul class="nav flex-column mb-0">
    <li class="nav-item">
		<router-link to="/Kunst" class= nav-link text-dark>Ölbilder</router-link>
    </li>
    <li class="nav-item">
		<router-link to="/Kunst" class= nav-link text-dark>Keramiken</router-link>
    </li>
    <li class="nav-item">
		<router-link to="/Kunst" class= nav-link text-dark>Hinterglasbilder</router-link>
    </li>
  </ul>

  <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0 bottom-item">
	  <router-link to="/Kontakt" class="link nav-header">Kontakt und Impressum</router-link>
	</p>
</div>
	<div class="page-content" id="content">
    <router-view />

	</div>
  </div>
</template>

<style lang="scss">

.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  background-color: #f8f8f8;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

.nav-link, .link {
	color: #343a40;
}
.nav-link:hover, .link:hover {
	text-decoration: none;
	color: #343a40;

}
.bottom-item {
	position: absolute;
	bottom: 0px;
}

.title {
	font-family: 'Playfair Display';
	font-weight: 700;
}
li {
	padding-left: 5px;
}
li:hover {
	background-color: #EEEEEE;
}
.nav-header {
	font-weight: 800;
	color: #757575;
}
.head {
	background-color: #EEEEEE;
}
// General Styling

h1 {
	font-family: 'Playfair Display', Serif;
	padding-top: 10px;
	padding-bottom: 20px;
}
p,li {
	color: #616161;
    font-family: 'Open Sans';
}

button {
    width: 100%;
    margin: 0px 5px;
    font-weight: 600;
    color: #494949 !important;
    border-radius: 0px;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 15px;
    border: 3px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
}
button:hover {
    color: #ffffff !important;
    background: #212121;
    border-color: #212121 !important;
    transition: all 0.4s ease 0s;
}

</style>
