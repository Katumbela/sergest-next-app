
import { users } from "../utils";

interface TDProps {
  id: number; 
  nome: string;
  pic: string;
  desc: string;
  role: string;
}

export const testimonials_dummy: TDProps[] = [
  {
    id: 1,
    nome: "Adilson Manuel",
    desc: "Desde que começamos a usar este software de faturação, nossa empresa viu uma melhoria significativa na precisão e eficiência do processo de faturamento. Altamente recomendado!",
    pic: users.user_ADILSON,
    role: 'DG, Dissabi'
  },
  {
    id: 2,
    nome: "Patrício Vieira",
    desc: "Este software de faturação simplificou nossas operações financeiras, permitindo-nos concentrar mais tempo em outras áreas do nosso negócio. Ótima solução!",
    pic: users.user_PATRICIO,
    role: 'CEO, PV Prudencia'
  },
  {
    id: 3,
    nome: "Alfredo Luemba",
    desc: "Estou impressionado com a facilidade de uso deste software de faturação. Mesmo sem experiência prévia em contabilidade, consegui dominá-lo rapidamente e agora economizo horas no faturamento mensal.",
    pic: users.user_ALFREDO,
    role: 'Founder '
  },
  {
    id: 4,
    nome: "Maria Mateus",
    desc:  "O suporte técnico deste software de faturação é excepcional. Sempre que tive alguma dúvida ou problema, a equipe de suporte foi rápida em responder e resolver qualquer questão, garantindo que nossa operação nunca fosse interrompida. Uma verdadeira parceria!",
    pic: users.user_MARIA,
    role: 'Gerente, SERMAR '
  },
  {
    id: 5,
    nome: "Inácio Félix",
    desc: "Este software de faturação mudou a forma como gerenciamos nossas finanças. A automação de tarefas repetitivas e os relatórios detalhados nos ajudaram a tomar decisões mais informadas e a impulsionar o crescimento do nosso negócio.",
    pic: users.user_INACIO,
    role: ' '
  },
  {
    id: 6,
    nome: "Armando Gomes",
    desc: "Como proprietário de uma pequena empresa, encontrar um software de faturação acessível e confiável foi crucial. Este software não só se encaixou no nosso orçamento, mas também superou nossas expectativas em termos de funcionalidade e suporte ao cliente.",
    pic: users.user_ARMANDO,
    role: 'CEO, Nandelian '
  },
];
