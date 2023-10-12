import { twMerge } from 'tailwind-merge';

export const CommonButton = ({ buttonText, onClickAction, className }) => {
    return (
        <button
            onClick={onClickAction}
            className={twMerge(
                'bg-transparent hover:bg-purple-500 text-purple-700 hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded',
                className,
            )}
        >
            {buttonText}
        </button>
    );
};
