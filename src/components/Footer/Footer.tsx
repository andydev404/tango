import { Container } from '@components/Container';
import { Logo } from '@components/Logo';
import { Button } from '@components/Button';

export function Footer() {
  return (
    <footer className="bg-brand-400">
      <Container>
        <div className="py-16">
          <div className="flex justify-center">
            <Logo />
          </div>
          <nav className="mt-6 text-sm" aria-label="quick links">
            <div className="flex justify-center gap-x-6">
              <Button href="/login" color="brand">
                Iniciar sesión
              </Button>
              <Button href="/register" color="brand">
                Crear mi tienda
              </Button>
            </div>
          </nav>
        </div>
        <div className="border-t border-brand-500 py-10">
          <p className="mt-6 text-center text-sm sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Tango. Todos los
            derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
