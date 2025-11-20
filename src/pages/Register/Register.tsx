import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { InputRegister } from "../../components/register/Input";
import Wrapper from "../../components/general/Wrapper";
import Cajuzinho from "../../assets/images/login/cajuzinho.png";
import Nutra from "../../assets/images/login/logofinal1.png";
import { registerSchema, type RegisterFormData } from "../../schema/register.schema";
import { useRegister } from "../../hooks/useRegister"; 

export default function RegisterPage() {
  const navigate = useNavigate();
  const { registerUser, loading } = useRegister(); 

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      alert("Conta criada com sucesso!");
      navigate("/login");

    } catch (error: unknown) {
      if (error instanceof Error) {
      alert(error.message);
    } else {
      alert("Erro inesperado ao registrar.");
  }
 }
  };

  return (
    <Wrapper>
      <div className="flex flex-col justify-center items-center w-full h-full px-4 sm:px-6 py-8 relative">
        <img src={Nutra} alt="Logo Nutra" className="w-32 h-auto z-20 mb-25" />

        <div className="w-full max-w-sm relative mb-16">
          <div className="bg-yellow-100/50 rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold text-gray-900 text-center mt-10 mb-4">
              Criar Conta
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <InputRegister
                name="name"
                type="text"
                label="Nome completo"
                placeholder="Seu nome"
                register={register}
                error={errors.name?.message}
              />

              <InputRegister
                name="email"
                type="email"
                label="E-mail"
                placeholder="seu@email.com"
                register={register}
                error={errors.email?.message}
              />

              <InputRegister
                name="password"
                type="password"
                label="Senha"
                placeholder="••••••••"
                register={register}
                error={errors.password?.message}
              />

              <InputRegister
                name="confirmPassword"
                type="password"
                label="Confirmar senha"
                placeholder="••••••••"
                register={register}
                error={errors.confirmPassword?.message}
              />

              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
              >
                {isSubmitting || loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-700 mt-4">
              Já tem uma conta?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-orange-600 font-semibold hover:underline cursor-pointer"
              >
                Entrar
              </button>
            </p>
          </div>

          <img
            src={Cajuzinho}
            alt="Cajuzinho decorativo"
            className="absolute -top-[90px] right-0 w-[119px] h-[99px] z-10"
          />
        </div>
      </div>
    </Wrapper>
  );
}
