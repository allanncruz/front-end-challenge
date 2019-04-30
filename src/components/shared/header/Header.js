import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown, faPhone);

export default {
    data() {
        return {
            title: "Grand Motors",

            //Logomarcas usadas
            logoGrandMotors: {
                url: require('../../../assets/logo.png'),
                title: 'Grand Motors'
            },
            logoGrandToyota: {
                url: require('../../../assets/toyota.png'),
                title: 'Grand Motors'
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
                    thumb: require('../../../assets/modelos/etios-hatch_17.png')
                },
                {
                    title: "Etios Sedã 2017",
                    link: "#",
                    thumb: require('../../../assets/modelos/etios-seda_17.png')
                },
                {
                    title: "Etios Cross 2017",
                    link: "#",
                    thumb: require('../../../assets/modelos/etios-cross_17.png')
                },
                {
                    title: "Corolla 2016",
                    link: "#",
                    thumb: require('../../../assets/modelos/corolla_16.png')
                },
                {
                    title: "Hilux CD Diesel 2016",
                    link: "#",
                    thumb: require('../../../assets/modelos/hilux-diesel_16.png')
                },
                {
                    title: "Corolla 2016",
                    link: "#",
                    thumb: require('../../../assets/modelos/corolla_16.png')
                },
                {
                    title: "Hilux CD Diesel 2016",
                    link: "#",
                    thumb: require('../../../assets/modelos/hilux-diesel_16.png')
                }
            ]
        };
    }
};