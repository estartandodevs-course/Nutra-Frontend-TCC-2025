// src/mocks/recipes.ts
import smoothieImage from "../assets/images/recipes/receita 1.png";
import asasDeFrangoImage from "../assets/images/recipes/receita 2.png";
import saladaDeFrutaImage from "../assets/images/recipes/receita 3.png";

export const recipes = [
  {
    id: "1",
    title: "Smoothie de Morango e Banana",
    image: smoothieImage,
    ingredients: [
      "8 morangos médios",
      "1 banana madura",
      "200ml de leite integral ou vegetal",
      "1 colher de chá de mel (opcional)",
      "Gelo a gosto (opcional)",
    ],
    instructions: [
      "Lave bem os morangos em água corrente, retirando as folhas e o talo.",
      "Descasque a banana e corte em rodelas para facilitar o processamento.",
      "Coloque os morangos, a banana e o leite no liquidificador.",
      "Se quiser, adicione uma colher de chá de mel para adoçar naturalmente.",
      "Acrescente gelo a gosto para um smoothie mais refrescante.",
      "Dica: Para um smoothie mais nutritivo, você pode adicionar uma colher de sopa de aveia ou sementes de chia antes de bater.",
    ],
  },
  {
    id: "2",
    title: "Asas de Frango ao Molho Shoyu",
    image: asasDeFrangoImage,
    ingredients: [
      "10 asas de frango",
      "2 dentes de alho picados",
      "Suco de 1 limão",
      "150ml de molho shoyu",
      "1 colher de chá de pimenta-do-reino",
      "Sal a gosto",
      "1 colher de chá de óleo ou azeite (opcional)",
    ],
    instructions: [
      "Lave bem as asas de frango e seque com papel toalha para que o tempero grude melhor.",
      "Em uma tigela, misture o alho picado, o suco de limão, sal e pimenta-do-reino.",
      "Distribua as asas em uma assadeira, evitando que fiquem sobrepostas.",
      "Retire do forno e deixe descansar por 2 a 3 minutos antes de servir.",
      "Sugestão: Sirva acompanhado de arroz branco, salada fresca ou batatas assadas.",
    ],
  },
  {
    id: "3",
    title: "Salada Fresca de Frutas e Cenoura",
    image: saladaDeFrutaImage,
    ingredients: [
      "2 laranjas",
      "3 limões",
      "2 tangerinas",
      "1 cenoura média",
      "Folhas de hortelã (opcional)",
      "1 colher de chá de mel ou açúcar (opcional)",
      "Gelo ou água gelada (opcional)",
    ],
    instructions: [
      "Lave bem todas as frutas e a cenoura antes de começar o preparo.",
      "Descasque as laranjas, limões e tangerinas e corte em gomos ou cubos médios, retirando sementes e partes brancas, se necessário.",
      "Rale a cenoura em tiras finas ou em palitos, garantindo textura crocante.",
      "Adoce levemente com mel ou açúcar, ajustando ao seu gosto pessoal.",
      "Dica: Essa salada pode ser preparada algumas horas antes, mas mantenha na geladeira coberta para preservar frescor e cor das frutas.",
    ],
  },
];
