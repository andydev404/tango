import { Button } from '@components/Button';
import { DashboardLayout } from '@layouts/DashboardLayout';
import { ReactElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@components/Form';

type Inputs = {
  name: string;
};

export default function CreateCategory() {
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
          <h1 className="font-serif text-3xl font-semibold">Nueva categoría</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 sm:col-span-2 sm:mt-0">
                      <Input
                        {...register('name', {
                          required: 'Este campo es requerido'
                        })}
                        error={errors.name?.message}
                      />
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

CreateCategory.getLayout = (page: ReactElement) => {
  return (
    <DashboardLayout page={{ title: 'Nueva categoría' }}>
      {page}
    </DashboardLayout>
  );
};
