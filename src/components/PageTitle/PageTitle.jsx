import { twMerge } from 'tailwind-merge';

export const PageTitle = ({ title, className }) => {
    return (
        <p className={twMerge('text-h1 font-bold leading-loose', className)}>
            {title}
        </p>
    );
};
