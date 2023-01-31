import { Button } from '@components/Button';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FileUploader, Input, TextArea } from '@components/Form';
import { IShop } from '@common/types';

type Inputs = Pick<
  IShop,
  'name' | 'address' | 'description' | 'whatsappNumber'
> & {
  logo: File | File[];
};

export default function CreateShop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const handledOnDropFile = (acceptedFiles: File | File[]) => {
    setValue('logo', acceptedFiles as File, {
      shouldValidate: true
    });
  };
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
                      <FileUploader onDropFile={handledOnDropFile} />
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
