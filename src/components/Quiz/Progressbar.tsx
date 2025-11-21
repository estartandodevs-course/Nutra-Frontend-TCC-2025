import type { ProgressBarProps } from "../../types/quiz";

export default function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="w-full max-w-sm mx-auto mb-3 px-[6px]">
      <div className="flex items-center justify-between mb-4 mt-4">
        {Array.from({ length: total }).map((_, index) => {
          const estaFeito = index < current - 1;
          const estaAtivo = index === current - 1;

          return (
            <div key={index} className="flex items-center flex-1 last:flex-none">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-[13px] transition-all
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
                  className={`flex-1 h-0.5 mx-[2px] ${
                    estaFeito ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
