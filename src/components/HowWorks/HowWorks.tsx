import Image from 'next/image';
import { Tab } from '@headlessui/react';
import { Container } from '@components/Container';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { steps } from './data';

export function HowWorks() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery: MediaQueryList = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({
      matches
    }: MediaQueryListEvent | MediaQueryList) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);
  return (
    <div className="relative overflow-hidden bg-brand-400 pt-20 pb-28 sm:py-32">
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-6xl">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="mt-6 text-lg tracking-tight text-black">
            ¡Descubre cómo hacer crecer tu negocio con Tango!
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {steps.map((step, stepIndex) => (
                    <div
                      key={step.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 transition lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === stepIndex
                          ? 'bg-brand-900'
                          : 'hover:bg-brand-300'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-serif text-3xl [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === stepIndex
                              ? 'text-white'
                              : 'text-brand-900 '
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {step.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden  lg:block',
                          selectedIndex === stepIndex
                            ? 'text-white'
                            : 'text-brand-900'
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {steps.map(step => (
                  <Tab.Panel key={step.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-brand-300 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-brand-900 sm:text-center">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={step.image}
                        alt=""
                        priority
                        width={100}
                        height={100}
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </div>
  );
}
