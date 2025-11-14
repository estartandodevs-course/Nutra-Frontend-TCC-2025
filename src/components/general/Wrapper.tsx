import type { WrapperProps } from "../../types/wrapper";

export default function MobileWrapper({ children }: WrapperProps) {
  return (
    <div className="min-h-[100dvh] bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-md flex flex-col min-h-[100dvh] rounded-none lg:rounded-2xl">
        {children}
      </div>
    </div>
  );
}


