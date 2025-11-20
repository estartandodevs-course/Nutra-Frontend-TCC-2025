import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/login/Input";
import { loginSchema, type LoginFormData } from "../../schema/login.schema";
import Wrapper from "../../components/General/Wrapper";
import { useAuth } from "../../hooks/useAuth";
import Cajuzinho from "../../assets/images/login/cajuzinho.png";
import Nutra from "../../assets/images/login/logofinal1.png";
import { ChevronLeft } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);

      toast.success("Login realizado com sucesso!");
      setTimeout(() => navigate("/dashboard"), 4000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Email/Senha inválidos!";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="flex flex-col items-center justify-start w-full h-full px-6 pt-10 relative">
          <div className="w-full max-w-sm relative mb-6 mt-14 flex items-center">
            <button
              onClick={() => navigate("/choices")}
              className="absolute left-0 p-2 cursor-pointer"
            >
              <ChevronLeft size={26} className="text-gray-700" />
            </button>

            <div className="flex justify-center w-full">
              <img src={Nutra} alt="Logo" className="w-32 h-auto" />
            </div>
          </div>

          <div className="w-full max-w-sm relative mt-18">
            <div className="bg-yellow-100/50 rounded-xl shadow-md p-5 pb-7">
              <h2 className="text-xl font-bold text-gray-900 text-center mt-4">
                Login
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="seu@email.com"
                  register={register}
                  error={errors.email?.message}
                />

                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  placeholder="••••••••"
                  register={register}
                  error={errors.password?.message}
                />

                <div className="text-right -mt-1">
                  <button
                    type="button"
                    onClick={() => navigate("/esquecisenha")}
                    className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                  >
                    Esqueceu sua senha?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
                >
                  {isSubmitting ? "Entrando..." : "Entrar"}
                </button>
              </form>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-yellow-100/50 text-gray-600">
                    Ou entrar com
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => toast.info("Login com Google ainda não implementado")}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                Gmail
              </button>
            </div>

            <img
              src={Cajuzinho}
              alt="decorativa"
              className="absolute -top-[90px] right-0 w-[119px] h-[99px] z-10"
            />
          </div>
        </div>
      </Wrapper>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}
