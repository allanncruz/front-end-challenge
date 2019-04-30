//Importar imagens usadas
import logoGrandMotors from "../../../assets/logo.png";
import logoToyotaMotors from "../../../assets/toyota.png";

import etiosHatch from "../../../assets/modelos/etios-hatch_17.png";
import etiosSeda from "../../../assets/modelos/etios-seda_17.png";
import etiosCross from "../../../assets/modelos/etios-cross_17.png";
import corolla from "../../../assets/modelos/corolla_16.png";
import hiluxDiesel from "../../../assets/modelos/hilux-diesel_16.png";


export default {
    data() {
        return {

            //Logomarcas
            GrandMotors: {
                logo: logoGrandMotors,
                title: 'Grand Motors'
            },
            ToyotaMotors: {
                logo: logoToyotaMotors,
                title: 'Toyta Motors'
            },

            //Lista de contatos
            contacts: [
                {
                    title: "Toyota Nações Unidas",
                    tel: "(11) 3500-7909",
                    service: "Serviço",
                    id: "3"
                },
                {
                    title: "Toyota Morombi",
                    tel: "(11) 3500-7909",
                    service: "Serviço",
                    id: "4"
                },
            ],

            // Lista modelos de carros
            models: [
                {
                    title: "Etios Hatch 2017",
                    link: "#",
                    thumb: etiosHatch
                },
                {
                    title: "Etios Sedã 2017",
                    link: "#",
                    thumb: etiosSeda
                },
                {
                    title: "Etios Cross 2017",
                    link: "#",
                    thumb: etiosCross
                },
                {
                    title: "Corolla 2016",
                    link: "#",
                    thumb: corolla
                },
                {
                    title: "Hilux CD Diesel 2016",
                    link: "#",
                    thumb: hiluxDiesel
                },
            ]
        };
    }
};