import type { WrapperProps } from "../../types/wrapper";

export default function MobileWrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="relative w-full max-w-md bg-white shadow-md flex flex-col h-auto max-h-screen overflow-y-auto rounded-none lg:rounded-2xl">
        {children}
      </div>
    </div>
  );
}
