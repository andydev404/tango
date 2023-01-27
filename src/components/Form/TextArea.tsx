import { forwardRef, DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, className, inputClassName = 'bg-transparent', ...props },
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
          <textarea
            ref={ref}
            {...props}
            className={clsx(
              'block w-full max-w-lg rounded-md border-brand-900 shadow-sm focus:border-brand-900 focus:ring-brand-900 sm:text-sm',
              inputClassName,
              [error ? 'border-red-500' : 'border-brand-900']
            )}
          />
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

TextArea.displayName = 'TextArea';
export { TextArea };
