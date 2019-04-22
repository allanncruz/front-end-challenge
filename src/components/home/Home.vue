<template>
    <div>

        <Showcase></Showcase>
        <Advantage></Advantage>

        <div class="versions">
            <b-container>
                <b-card no-body>
                    <div class="versions-list absolute">
                        <h3>Versões</h3>
                    </div>
                    <b-tabs pills card vertical>
                        <b-tab title="A 200" active>
                            <b-card-text>
                                <div class="info-cars">
                                    <img src="../../assets/versoes/a-200.png" alt="">

                                    <h3>Itens de série</h3>
                                    <ul>
                                        <li>Ar condicionado</li>
                                    </ul>
                                    <div class="info-general absolute right top">
                                        <h3>Informações Gerais</h3>
                                        <ul>
                                            <li>Cilindros/válvulas por cilindro</li>
                                            <li>Diâmetro/curso (mm):</li>
                                            <li>Cilindrada (cc):</li>
                                            <li>Potência máxima EEC - Cv:</li>
                                            <li>em rev/min:</li>
                                            <li>Torque máximo EEC - Nm (libra-pé):</li>
                                        </ul>




                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="A 250 turbo sport">
                            <b-card-text>
                                <div class="info-cars">
                                    <h3>Itens de série</h3>
                                    <ul>
                                        <li>Ar condicionado</li>
                                    </ul>
                                    <div class="info-general absolute right top">
                                        <h3>Informações Gerais</h3>
                                        <ul>
                                            <li>Cilindros/válvulas por cilindro</li>
                                            <li>Diâmetro/curso (mm):</li>
                                            <li>Cilindrada (cc):</li>
                                            <li>Potência máxima EEC - Cv:</li>
                                            <li>em rev/min:</li>
                                            <li>Torque máximo EEC - Nm (libra-pé):</li>
                                        </ul>




                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="A 45 amg 4matic">
                            <b-card-text>
                                <div class="info-cars">
                                    <h3>Itens de série</h3>
                                    <ul>
                                        <li>Ar condicionado</li>
                                    </ul>
                                    <div class="info-general absolute right top">
                                        <h3>Informações Gerais</h3>
                                        <ul>
                                            <li>Cilindros/válvulas por cilindro</li>
                                            <li>Diâmetro/curso (mm):</li>
                                            <li>Cilindrada (cc):</li>
                                            <li>Potência máxima EEC - Cv:</li>
                                            <li>em rev/min:</li>
                                            <li>Torque máximo EEC - Nm (libra-pé):</li>
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

<script>
    import Showcase from './showcase/Showcase.vue';
    import Advantage from './advantage/Advantage.vue';
    export default {
        components: {
            'Showcase' : Showcase,
            'Advantage' : Advantage,
        },
    }
</script>

<style lang="scss" src="./Home.scss"></style>
