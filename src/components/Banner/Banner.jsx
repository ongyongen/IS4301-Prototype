import { twMerge } from 'tailwind-merge';

export const Banner = ({ message, bannerType, className }) => {
    return (
        <>
            <div
                className={twMerge(
                    'flex flex-wrap container mx-auto flex-row px-4 py-3 rounded relative',
                    bannerType,
                    className,
                )}
                role="alert"
            >
                <p>{message}</p>
            </div>
        </>
    );
};
