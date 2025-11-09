import { useNavigate } from "react-router-dom"
import type { RecipeCardProps } from "../../types/recipescard"

export function RecipeCard({ id, title, image, ingredients }: RecipeCardProps) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative w-full h-40">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-3">{title}</h3>

        <div className="mb-4">
          <p className="text-sm text-gray-600 font-medium mb-2">Ingredientes:</p>
          <ul className="space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start">
                <span className="mr-2">•</span>
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => navigate(`/recipes/${id}`)}
          className="text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
        >
          Ver receita completa 
        </button>
      </div>
    </div>
  )
}