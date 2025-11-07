import type { WrapperProps } from "../../types/wrapper";

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div
      className={`
        mx-auto
        w-full max-w-full
        sm:w-[375px] sm:h-[667px]    
        min-h-screen
        bg-gray-50
        p-4
        rounded-none sm:rounded-3xl
        shadow-none sm:shadow-xl
        overflow-hidden
        flex flex-col
        ${className}
      `}
    >
      {children}
    </div>
  );
}
