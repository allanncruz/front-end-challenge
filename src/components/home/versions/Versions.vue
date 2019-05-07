<template>
  <div>
    <div class="versions">
      <b-container>
        <b-card no-body>
          <div class="versions-list">
            <h3>Versões</h3>
          </div>
          <b-tabs pills card vertical>
            <!-- Loop listas de modelos carros-->
            <b-tab v-for="(version, index) of versions" :key="index" :title="version.title" active>
              <b-card-text>
                <div class="versions-info">
                  <img class="versions-car" :src="version.thumb" :alt="version.title">

                  <div class="versions-general right top">
                    <h3>Informações Gerais</h3>
                    <ul>
                      <li v-for="(information, index) of version.informations" :key="index">
                        <span>{{information.infoName}}</span>
                        <span>{{information.infoValue}}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="versions-items">
                    <h3>Itens de série</h3>
                    <ul>
                      <li v-for="(iten, index) of version.itens" :key="index">{{iten.infoItens}}</li>
                    </ul>
                  </div>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script src="./Versions.js"></script>

<style lang="scss" src="./Versions.scss"></style>
