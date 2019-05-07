<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant>
      <b-container>
        <b-navbar-brand href="#">
          <img :src="GrandMotors.logo" :alt="GrandMotors.title">
        </b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <!-- Renderização listas de modelos carros-->
          <b-navbar-nav>
            <b-nav-item-dropdown text="Nossos Veículos" class="rounded-0 modelos">
              <div class="scrollbox">
                <b-dropdown-item v-for="(model, index) of models" :key="index" :href="model.link">
                  {{ model.title }}
                  <img class="modelo" :alt="model.title" :src="model.thumb">
                </b-dropdown-item>
              </div>
            </b-nav-item-dropdown>

            <!-- Listas de serviços -->
            <b-nav-item href="#">Serviços</b-nav-item>
            <b-nav-item-dropdown text="Vendas Diretas">
              <b-dropdown-item href="#">Empresas</b-dropdown-item>
              <b-dropdown-item href="#">Frotistas</b-dropdown-item>
              <b-dropdown-item href="#">Governo</b-dropdown-item>
              <b-dropdown-item href="#">PCD</b-dropdown-item>
              <b-dropdown-item href="#">Produtor RuralS</b-dropdown-item>
              <b-dropdown-item href="#">Taxista</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <b-navbar-nav>
            <div class="phones">
              <b-button v-b-toggle.2>
                <i class="fas fa-flip-horizontal fa-phone"></i>
                Telefones
                <i class="fas fa-chevron-down"></i>
              </b-button>
              <b-collapse id="2" class="phones-box">
                <b-card class="phones-items">
                  <!-- Renderização listas de contatos-->
                  <div v-for="(contact, index) of contacts" :key="index">
                    <b-collapse :id="contact.id">
                      <b-card>
                        <small>
                          <b>{{contact.tel}}</b>
                          |
                          {{contact.service}}
                        </small>
                      </b-card>
                    </b-collapse>
                    <b-button v-b-toggle="contact.id">
                      {{contact.title}}
                      <i class="fas fa-chevron-down"></i>
                    </b-button>
                  </div>
                </b-card>
              </b-collapse>
            </div>
            <b-nav-item class="brand-horizontal">
              <img :src="ToyotaMotors.logo" :alt="ToyotaMotors.title">
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script src="./Header.js"></script>

<style lang="scss" src="./Header.scss"></style>
