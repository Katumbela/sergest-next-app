import { logos } from "../utils";

interface PProps {
  id: number; // Adicionando a propriedade id
  plan: string;
  logo: string;
  desc: string;
  benefits: string;
  btn: string;
  price: string;
  invest: string;
}

export const plans_dummies: PProps[] = [
  {
    id: 1,
    plan: "Essencial",
    desc: "Ideal para quem está a começar o seu negocio e precisa gerar suas faturas.",
    logo: logos.logo_essencial,
    price: "4.000 AOA",
    benefits:
      "Exportação de ficheiro SAFT-AO | Mapa de vendas | API para Integração | Suporte Técnico | Envio de factura por e-mail | Mapa de vendas  | Apenas 1 utilizador | Conversão de proforma e orçamento em factura | Documentos ilimitados ( Factura, Factura-Recibo, Orçamento, Proforma, Recibo e Guia de Remessa) Nota de Crédito",
    btn: "Subscrever agora",
    invest: " Investimento | 1 MÊS",
  },
  {
    id: 2,
    plan: "Avançado",
    desc: "Ideal para quem já possui um grande volume de transações e clientes.",
    logo: logos.logo_avancado,
    price: "24.000 AOA",
    btn: "Subscrever agora",
    invest: "Investimento | 6 MÊS",
    benefits:
      "Exportação de ficheiro SAFT-AO | Mapa de vendas | API para Integração | Suporte Técnico | Envio de factura por e-mail | Mapa de vendas  | Até 2 utilizadores | Conversão de proforma e orçamento em factura | Documentos ilimitados ( Factura, Factura-Recibo, Orçamento, Proforma, Recibo e Guia de Remessa) Nota de Crédito",
  },
  {
    id: 3,
    plan: "Expert",
    logo: logos.logo_expert,
    price: "48.000 AOA",
    btn: "Subscrever agora",
    invest: "Investimento | 1 ANO",
    desc: "Ideal para quem já possui um negócio com grandes volumes de transições e muito ativo.",
    benefits:
      "Exportação de ficheiro SAFT-AO | Mapa de vendas | API para Integração | Suporte Técnico | Envio de factura por e-mail | Mapa de vendas  | Até 3 utilizadores | Conversão de proforma e orçamento em factura | Documentos ilimitados ( Factura, Factura-Recibo, Orçamento, Proforma, Recibo e Guia de Remessa) Nota de Crédito",
  },
];
