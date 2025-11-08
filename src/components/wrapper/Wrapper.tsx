import type { WrapperProps } from "../../types/wrapper";

export default function MobileWrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-md flex flex-col h-auto max-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
