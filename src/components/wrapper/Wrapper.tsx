import type { WrapperProps } from "../../types/wrapper";

export default function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div
      className={`mx-auto max-w-lg min-h-screen bg-gray-50 p-4 shadow-xl md:max-w-xl lg:max-w-2xl ${className}`}
    >
      {children}
    </div>
  );
}
