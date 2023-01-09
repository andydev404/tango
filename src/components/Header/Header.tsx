import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { Logo } from '@components/Logo';
import { NavLink } from '@components/NavLink';
import { MobileNavigation } from './MobileNavigation';

export function Header() {
  return (
    <header className="py-5">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <Logo />
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Iniciar sesión</NavLink>
            </div>
            <Button href="/register" color="brand" className="hidden md:block">
              Crear mi tienda
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
