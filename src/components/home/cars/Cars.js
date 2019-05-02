import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import carousel from 'vue-owl-carousel'

//Importar imagens usadas
import classicA from "../../../assets/carros/ca.jpg";
import classicC from "../../../assets/carros/cc.jpg";
import classicLA from "../../../assets/carros/cla.jpg";

library.add(faChevronLeft, faChevronRight)
export default {
    components: { carousel },
    data() {
        return {

            //Lista de carros
            cars: [
                {
                    title: "Classic A",
                    thunb: classicA,
                },
                {
                    title: "Classic C",
                    thunb: classicC,
                },
                {
                    title: "Classic CLA",
                    thunb: classicLA,
                },
                {
                    title: "Classic A",
                    thunb: classicA,
                },
                {
                    title: "Classic C",
                    thunb: classicC,
                },
                {
                    title: "Classic CLA",
                    thunb: classicLA,
                },
            ],
        };
    }
}