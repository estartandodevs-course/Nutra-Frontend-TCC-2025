import { useParams, useNavigate } from "react-router-dom";
import Wrapper from "../../components/general/Wrapper";
import BottomNav from "../../components/general/BottomNav";
import { recipes } from "../../mocks/recipes";


export default function RecipeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((response) => response.id === id);

  if (!recipe) {
    return (
      <Wrapper>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Receita não encontrada
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Voltar
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="flex flex-col flex-1 overflow-y-auto pb-20">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-b-3xl"
        />

        <div className="px-6 py-4 space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">{recipe.title}</h1>

          <div>
            <h2 className="text-lg font-semibold text-orange-600 mb-2">
              Ingredientes
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {recipe.instructions && (
            <div>
              <h2 className="text-lg font-semibold text-orange-600 mb-2">
                Modo de preparo
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          <button
            onClick={() => navigate(-1)}
            className="w-full mt-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Voltar
          </button>
        </div>
      </div>

      <BottomNav />
    </Wrapper>
  );
}
