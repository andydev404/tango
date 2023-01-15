import { Logo } from '@components/Logo';
import { ReactElement } from 'react';
import { AuthLayout } from '@layouts/AuthLayout';
import { Button } from '@components/Button';

function Login() {
  return (
    <>
      <Logo size={200} />
      <p className="mt-2 text-sm">
        ¡Crea tu cuenta en Tango hoy mismo y comienza a vender en línea de
        manera fácil y eficiente!
      </p>
      <div className="mt-14">
        <Button
          href="/login"
          color="brand"
          size="large"
          className="w-full font-bold"
        >
          Crear mi tienda
        </Button>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <Button
            href="/login"
            size="large"
            variant="outline"
            className="w-full font-bold"
          >
            Entrar a mi tienda
          </Button>
        </div>
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
