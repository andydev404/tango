import { Button } from '@components/Button';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input, TextArea } from '@components/Form';
import { IShop } from '@common/types';

type Inputs = Pick<
  IShop,
  'name' | 'address' | 'description' | 'whatsappNumber'
>;

export default function CreateShop() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <>
      <div className="pt-6 pb-20">
        <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="font-serif text-3xl font-semibold">Nueva tienda</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Perfil
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Esta información se mostrará públicamente
                  </p>
                </div>

                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <Input
                        prefix="tango.com/"
                        className="w-full"
                        inputClassName="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-brand-900  focus:border-brand-900 focus:ring-brand-900 sm:text-sm"
                        {...register('name', {
                          required: 'Este campo es requerido'
                        })}
                        error={errors.name?.message}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Descripción <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <TextArea
                        {...register('description', {
                          required: 'Este campo es requerido'
                        })}
                        error={errors.description?.message}
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Escribe una breve descripción sobre tu tienda
                      </p>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Dirección <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <Input
                        {...register('address', {
                          required: 'Este campo es requerido'
                        })}
                        error={errors.address?.message}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="whatsapp-number"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Número de Whatsapp <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <Input
                        {...register('whatsappNumber', {
                          required: 'Este campo es requerido'
                        })}
                        error={errors.whatsappNumber?.message}
                      />
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Logo
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-brand-900 px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className=" text-center text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none"
                            >
                              <span>Subir archivo</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-end">
                <Button variant="outline" className="px-10">
                  Crear
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

CreateShop.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout page={{ title: 'Nueva tienda' }}>{page}</DashboardLayout>
  );
};
