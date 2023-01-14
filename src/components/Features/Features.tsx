import { Container } from '@components/Container';
import { features } from './data';

export function Features() {
  return (
    <section className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-6xl">
            Beneficios de usar Tango
          </h2>
          <p className="mt-4 text-lg tracking-tight">
            Conoce las ventajas que ofrecemos para ayudarte a crecer tu negocio
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-700">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
