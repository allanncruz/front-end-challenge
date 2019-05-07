<template>
  <div>
    <div class="showcase">
      <iframe class="d-none d-md-block" :src="video.url" :allow="video.allow"></iframe>

      <img
        class="showcase-img absolute d-block d-md-none"
        src="../../../assets/banner-video.jpg"
        alt
      >

      <b-container class="h-100">
        <b-row class="h-100 align-items-end text-white">
          <b-col md="4" order="2" order-md="1">

            <!-- Formulário simulador de financiamento-->
            <div class="showcase-content-isca">
              <div class="isca-header text-center">
                <h4 class="title text-large text-uppercase m-0">Simular financiamento</h4>
                <p class="subtitle text-small">Escolha a parcela que cabe no seu bolso.</p>
              </div>

              <hr>

              <div class="isca-form">
                <b-form>
                  <b-form-group label="Escolha uma versão" label-for="versao">
                    <b-form-select
                      class="mb-2 mr-sm-2 mb-sm-0"
                      :value="null"
                      :options="{ '1.3': '1.3' }"
                      id="versao"
                    >
                      <option slot="first" :value="null">1.8</option>
                    </b-form-select>
                  </b-form-group>
                  <hr>
                  <b-form-group>
                    <b-form-input required type="text" placeholder="Nome*"></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input required type="email" placeholder="Email*"></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input required type="tel" placeholder="Telefone*"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Número de parcelas*">
                    <b-form-radio-group>
                      <b-form-radio value="12">12</b-form-radio>
                      <b-form-radio value="24">24</b-form-radio>
                      <b-form-radio value="36">36</b-form-radio>
                      <b-form-radio value="48">48</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input required type="text" placeholder="Valor da entrada*"></b-form-input>
                  </b-form-group>
                  <b-form-checkbox>Desejo receber oofertas exclusivas da PG Prime.</b-form-checkbox>

                  <button class="btn-block btn-primary-base">Simular Financiamento</button>
                  <a href="#" class="text-white text-small">Politica de privacidade</a>
                </b-form>
              </div>
            </div>
          </b-col>

          <!-- Área de conteúdo principal-->
          <b-col md="8" class="p-0" order="1" order-md="2">
            <div class="showcase-content">
              <div class="headline">
                <div class="headline-content">
                  <h1 class="headline-content-title">Etios Hatch 2017</h1>
                  <h3 class="headline-content-version">X 1.3 MANUAL</h3>
                  <p class="description text-large">Você tem mais para descobrir.</p>
                </div>
                <div class="headline-price">
                  <p class="price-old text-large m-0">
                    de
                    <s>R$ 44.120,00</s>
                  </p>
                  <h2 class="price m-0">
                    <small>por R$</small> 40.987,00
                  </h2>
                  <span class="conditions text-wee">*Consulte as Condições Comerciais.</span>
                </div>

                <!-- Botões de compartilhamento redes sociais-->
                <div class="headline-social">
                  <p class="text-share text-small text-center mb-1">Gostou? Então compartilhe.</p>
                  <div class="d-flex justify-content-center">
                    <div class="btn-share">
                      <iframe
                        src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FToyotaDoBrasil&layout=button_count&size=small&width=131&height=20&appId"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                    <div class="btn-like">
                      <iframe
                        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FToyotaDoBrasil&width=58&layout=button_count&action=like&size=small&show_faces=false&share=false&height=65&appId"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </div>
                  </div>
                  <p
                    class="text-observation text-wee"
                  >*Imagens meramente ilustrativas. Alguns itens apresentados poderão não estar disponíveis nas versoes. Preços sugeridos e válidos até 31/07/2015. Os preços poderão ser modificadas sem aviso prévio. Consulte e confirme todas as informações com um de nossos vendedores..</p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: {
        url: "https://player.vimeo.com/video/57398751?background=1",
        allow: "autoplay"
      }
    };
  }
};
</script>

<style lang="scss" src="./Showcase.scss"></style>
