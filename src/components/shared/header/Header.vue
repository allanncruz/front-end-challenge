<template>
  <header class="header position-absolute w-100">
    <b-navbar class="p-0" toggleable="md" type variant>
      <b-container>
        <b-navbar-brand href="#">
          <img src="../../../assets/logo.png" alt="Grand Motors">
        </b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" class="border-0"></b-navbar-toggle>

        <b-collapse is-nav id="nav_collapse" class="justify-content-between text-uppercase">
          <b-navbar-nav class="align-items-center">

            <!-- Renderização listas de modelos carros-->
            <b-nav-item-dropdown text="Nossos Veículos" class="rounded-0 modelos">
              <b-dropdown-item v-for="modelo of modelos" :key="modelo" :href="modelo.link">
                {{ modelo.title }}
                <img class="modelo" :alt="modelo.title" :src="modelo.foto">
              </b-dropdown-item>
            </b-nav-item-dropdown>

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
          <b-navbar-nav class="align-items-center">
            <div class="phones">
              <b-button v-b-toggle.collapse-2 class>
                <font-awesome-icon class="fa-flip-horizontal mr-1" icon="phone"></font-awesome-icon>Telefones
                <font-awesome-icon icon="chevron-down"></font-awesome-icon>
              </b-button>
              <b-collapse id="collapse-2" class="rounded phones-box">
                <b-card class="phones-items border-0">
                  <b-collapse id="collapse-3">
                    <b-card class="border-0">
                      <small class="text-white">
                        <b>(11) 3500-7909</b> | Serviços
                      </small>
                    </b-card>
                  </b-collapse>
                  <b-button v-b-toggle.collapse-3 class="py-2 px-3 text-left">
                    Toyota Nações Unidas
                    <font-awesome-icon icon="chevron-down"></font-awesome-icon>
                  </b-button>

                  <b-collapse id="collapse-4">
                    <b-card class="border-0">
                      <small class="text-white">
                        <b>(11) 3500-7909</b> | Serviços
                      </small>
                    </b-card>
                  </b-collapse>
                  <b-button v-b-toggle.collapse-4 class="py-2 px-3 text-left">
                    Toyota Morombi
                    <font-awesome-icon icon="chevron-down"></font-awesome-icon>
                  </b-button>
                </b-card>
              </b-collapse>
            </div>
            <b-nav-item class="brand-horizontal">
              <img src="../../../assets/toyota.png" alt="Toyota">
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faPhone);

export default {
  data() {
    return {
      modelos: [
        {
          title: "Etios Hatch 2017",
          link: "#",
            foto: require('../../../assets/modelos/etios-hatch_17.png')
        },
        {
          title: "Etios Sedã 2017",
          link: "#",
          foto: require('../../../assets/modelos/etios-seda_17.png')
        },
        {
          title: "Etios Cross 2017",
          link: "#",
          foto: require('../../../assets/modelos/etios-cross_17.png')
        },
        {
          title: "Corolla 2016",
          link: "#",
          foto: require('../../../assets/modelos/corolla_16.png')
        },
        {
          title: "Hilux CD Diesel 2016",
          link: "#",
          foto: require('../../../assets/modelos/hilux-diesel_16.png')
        },
        {
          title: "Corolla 2016",
          link: "#",
          foto: require('../../../assets/modelos/corolla_16.png')
        },
        {
          title: "Hilux CD Diesel 2016",
          link: "#",
          foto: require('../../../assets/modelos/hilux-diesel_16.png')
        }
      ]
    };
  }
};
</script>

<style lang="scss" src="./Header.scss"></style>
