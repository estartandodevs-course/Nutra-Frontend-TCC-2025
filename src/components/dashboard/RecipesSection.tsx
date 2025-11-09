import smoothieImage from "../../assets/images/recipes/receita 1.png";
import asasDeFrangoImage from "../../assets/images/recipes/receita 2.png";
import saladaDeFrutaImage from "../../assets/images/recipes/receita 3.png";

export default function RecipesSection() {
  const recipes = [
    {
      id: 1,
      title: "Smoothie de morango e banana",
      image: smoothieImage,
    },
    {
      id: 2,
      title: "Asas de frango com molho",
      image: asasDeFrangoImage,
    },
    {
      id: 3,
      title: "Salada fresca",
      image: saladaDeFrutaImage,
    },
  ]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-900">Receitas</h3>
        <a href="#" className="text-xs text-orange-500 font-medium">
          Ver todos as receitas →
        </a>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="flex-shrink-0 w-28">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-24">
              <img src={recipe.image || "/"} alt={recipe.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}