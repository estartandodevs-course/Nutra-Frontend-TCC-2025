import { useNavigate } from "react-router-dom";
import { recipes } from "../../mocks/recipes";

export default function RecipesSection() {
  const navigate = useNavigate();

  return (
    <div className="space-y-3 text-center">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-semibold text-gray-900">Receitas</h3>

        <button
          onClick={() => navigate("/receitas")}
          className="text-xs text-orange-500 font-medium cursor-pointer"
        >
          Ver todas as receitas →
        </button>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex justify-center sm:justify-start gap-3 min-w-max mx-auto px-2">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="w-28 flex flex-col items-center shrink-0"
            >
              <div className="relative bg-gray-200 rounded-lg overflow-hidden h-24 w-full flex items-center justify-center hover:opacity-90 transition">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">
                {recipe.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
