import { cn } from '@common/utils';
import { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  prefix?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = 'text',
      className,
      inputClassName = 'bg-transparent',
      prefix,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className}>
        <label className="text-13px block">
          {label && (
            <span className="block pb-2 text-sm font-medium text-gray-700">
              {label}
            </span>
          )}
          {!prefix && (
            <input
              type={type}
              ref={ref}
              {...props}
              className={cn(
                'block w-full max-w-lg appearance-none rounded-md border-brand-900 shadow-sm focus:border-brand-900 focus:ring-brand-900 sm:text-sm',
                inputClassName,
                [error ? 'border-red-500' : 'border-brand-900']
              )}
            />
          )}
          {prefix && (
            <div className="flex max-w-lg rounded-md shadow-sm">
              <span className="inline-flex items-center rounded-l-md border border-r-0 border-brand-900  bg-brand-900 px-3 text-white sm:text-sm">
                {prefix}
              </span>
              <input
                type={type}
                ref={ref}
                {...props}
                className={cn(
                  'block w-full max-w-lg appearance-none rounded-md border-brand-900 shadow-sm focus:border-brand-900 focus:ring-brand-900 sm:text-sm',
                  inputClassName,
                  [error ? 'border-red-500' : 'border-brand-900']
                )}
              />
            </div>
          )}
        </label>
        {error && (
          <span role="alert" className="text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export { Input };
