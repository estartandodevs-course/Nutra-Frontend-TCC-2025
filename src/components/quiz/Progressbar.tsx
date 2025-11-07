import type { ProgressBarProps } from "../../types/quiz";

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-6 px-2">
      {Array.from({ length: total }).map((_, index) => {
        const estaFeito = index < current - 1;
        const estaAtivo = index === current - 1;

        return (
          <div key={index} className="flex items-center">
            <div
              className={`flex items-center justify-center rounded-full font-bold transition-all
                text-xs sm:text-sm 
                w-6 h-6 sm:w-8 sm:h-8
                ${
                  estaFeito
                    ? "bg-orange-500 text-white"
                    : estaAtivo
                    ? "border-2 border-orange-500 text-orange-500"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
            >
              {index + 1}
            </div>

            {index < total - 1 && (
              <div
                className={`h-0.5 mx-1 sm:mx-2 transition-all 
                  ${estaFeito ? "bg-orange-500" : "bg-gray-300"} 
                  w-4 sm:w-6`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
