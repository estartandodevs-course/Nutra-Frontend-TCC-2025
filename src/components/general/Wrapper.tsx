import type { WrapperProps } from "../../types/wrapper";

export default function MobileWrapper({ children }: WrapperProps) {
  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-md flex flex-col h-full rounded-none lg:rounded-2xl">
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
