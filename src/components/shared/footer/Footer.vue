<template>
    <div>
        <div class="footer">
            <b-container>
                <b-row>
                    <b-col cols="2">
                        <img class="footer-logo" :src="GrandMotors.logo" :alt="GrandMotors.title" >
                    </b-col>
                    <b-col cols="8">
                        <div class="copyright text-small">
                            <p class="copyright-text">© Copyright 2015 - Cliente - Todos os direitos reservados.</p>
                            <a href="#">Visitar site</a>
                            <a href="#">Contato</a>
                            <a href="#">Politica de privacidade</a>
                        </div>

                        <img class="copyright-autoforce" :src="AutoForce.logo" :alt="AutoForce.title" >
                    </b-col>
                    <b-col cols="2">
                        <div class="icons">
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-google-plus-g"></i>
                            </a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script src="./Footer.js"></script>

<style lang="scss" src="./Footer.scss"></style>