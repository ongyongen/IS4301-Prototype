import { twMerge } from 'tailwind-merge';

export const PageSubtitle = ({ subTitle, className }) => {
    return (
        <p className={twMerge('text-h2 leading-normal', className)}>
            {subTitle}
        </p>
    );
};
