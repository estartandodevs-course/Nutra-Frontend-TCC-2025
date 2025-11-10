// src/mocks/recipes.ts
import smoothieImage from "../assets/images/recipes/receita 1.png";
import asasDeFrangoImage from "../assets/images/recipes/receita 2.png";
import saladaDeFrutaImage from "../assets/images/recipes/receita 3.png";

export const recipes = [
  {
    id: "1",
    title: "Smoothie de morango e banana",
    image: smoothieImage,
    ingredients: [
      "8 morangos",
      "8 morangos",
      "1 banana roxa",
      "1 copo de leite",
      "200ml de leite",
    ],
    instructions: [
      "Bata todos os ingredientes no liquidificador.",
      "Sirva gelado em um copo alto.",
    ],
  },
  {
    id: "2",
    title: "Asas de frango com molho",
    image: asasDeFrangoImage,
    ingredients: [
      "8 asas",
      "10 asinhas de frango",
      "2 dentes de alho",
      "150ml de molho shoyu",
      "1 limão",
    ],
    instructions: [
      "Tempere as asinhas com alho e limão.",
      "Asse no forno e adicione o molho shoyu no final.",
      "Nos últimos 5 minutos, pincele o molho shoyu sobre as asinhas para caramelizar.",
    ],
  },
  {
    id: "3",
    title: "Salada fresca",
    image: saladaDeFrutaImage,
    ingredients: ["2 laranjas", "3 limões", "2 tangerinas", "1 cenoura"],
    instructions: [
      "Descasque e corte com cuidado as frutas.",
      "Separe elas em um pote ou recipiente higienizado.",
      "Rale a cenoura e adicione por cima das frutas.",  
      "Misture tudo em uma tigela e sirva gelado.",
    ],
  },
];
