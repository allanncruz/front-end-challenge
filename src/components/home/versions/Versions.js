//Importar imagens usadas
import gla032 from "@/assets/versoes/gla_vus_bc.png";
import glc250 from "@/assets/versoes/GLC_250.png";
import a200 from "@/assets/versoes/a-200.png";

export default {
    data() {
        return {

            // Renderização versões de carros
            versions: [
                {
                    title: "A 200",
                    thumb: a200,


                    // Lista de informação gerais
                    informations: [
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Potência Máxima EEC - Cv',           infoValue: '240'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'em rev/min',                         infoValue: '2,000-4000'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                    ],

                    //Lista itens de série
                    itens: [
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'},
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'}
                    ],
                },
                {
                    title: "A 250 turbo sport",
                    thumb: glc250,


                    // Lista de informação gerais
                    informations: [
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Potência Máxima EEC - Cv',           infoValue: '240'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'em rev/min',                         infoValue: '2,000-4000'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                    ],

                    //Lista itens de série
                    itens: [
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'},
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'}
                    ],
                },
                {
                    title: "A 45 amg 4matic",
                    thumb: gla032,


                    // Lista de informação gerais
                    informations: [
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Potência Máxima EEC - Cv',           infoValue: '240'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'em rev/min',                         infoValue: '2,000-4000'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                        { infoName: 'Cilindros/vávulas por cilindros',    infoValue: '4/4'},
                        { infoName: 'Em rev/min',                         infoValue: '5,500'},
                        { infoName: 'Cilindrada(cc)',                     infoValue: '1,999'},
                        { infoName: 'Torque máximo EEC - Nm(libra-pé)',   infoValue: '340'},
                        { infoName: 'Diâmetro/curso(mm)',                 infoValue: '87.5/8.31'},
                    ],

                    //Lista itens de série
                    itens: [
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'},
                        { infoItens: 'Ar condicionado'},
                        { infoItens: 'AirBag'},
                        { infoItens: 'Desenbaçador traseiro'},
                        { infoItens: 'Ar quente'},
                        { infoItens: 'Freios ABS'},
                        { infoItens: 'Teto solar'}
                    ],
                },
            ]
        };
    }
};