import Wrapper from "../../components/general/Wrapper"
import { RecipesHeader }  from "../../components/recipes/HeaderRecipe"
import { RecipeCard } from "../../components/recipes/RecipeCard"
import  BottomNav  from "../../components/general/BottomNav"
import smoothieImage from "../../assets/images/recipes/receita 1.png";
import asasDeFrangoImage from "../../assets/images/recipes/receita 2.png";
import saladaDeFrutaImage from "../../assets/images/recipes/receita 3.png";

const recipes = [
    {
      id: "1",
      title: "Smoothie de morango e banana",
      image: smoothieImage,
      ingredients: ["8 morangos", "8 morangos", "1 banana roxa", "1 copo de leite", "200ml de leite"],
    },
    {
      id: "2",
      title: "Asas de frango com molho",
      image: asasDeFrangoImage,
      ingredients: ["8 asas", "10 asinhas de frango", "2 dentes de alho", "150ml de molho shoyu", "1 limão"],
    },
    {
      id: "3",
      title: "Salada fresca",
      image: saladaDeFrutaImage,
      ingredients: ["2 laranjas", "3 limões", "2 tangerinas", "1 cenoura"],
    },
  ];

export default function RecipesPage() {
  return (
    <Wrapper>
      <RecipesHeader />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Todas as receitas</h1>
        </div>

        <div className="px-4 pb-6 space-y-4">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </div>

      <BottomNav />
    </Wrapper>
  )
}
