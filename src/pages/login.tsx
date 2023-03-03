import { Logo } from '@components/Logo';
import { ReactElement } from 'react';
import { AuthLayout } from '@layouts/AuthLayout';
import { Button } from '@components/Button';
import { Input } from '@components/Form';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  password: string;
};
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <Logo size={200} />
      <p className="mt-2 text-sm">
        ¡Crea tu cuenta en Tango hoy mismo y comienza a vender en línea de
        manera fácil y eficiente!
      </p>
      <div className="mt-14">
        <div className="mb-8 border-b border-gray-200 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register('email', {
                  required: 'Este campo es requerido'
                })}
                error={errors.email?.message}
                inputClassName="rounded-full"
                label="Email"
              />
            </div>
            <div>
              <Input
                {...register('password', {
                  required: 'Este campo es requerido'
                })}
                error={errors.password?.message}
                type="password"
                inputClassName="rounded-full"
                label="Contraseña"
              />
            </div>
            <div className="text-right">
              <Button variant="outline" className="font-bold">
                Entrar a mi tienda
              </Button>
            </div>
          </form>
        </div>
        <Button
          href="/signup"
          color="brand"
          size="large"
          className="w-full font-bold"
        >
          Crear mi tienda
        </Button>
      </div>
    </>
  );
}

export default Login;

Login.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout page={{ title: 'Comienza a usar Tango' }}>{page}</AuthLayout>
  );
};
