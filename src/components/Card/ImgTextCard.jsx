export const ImgTextCard = ({ imgLink, title, text }) => {
    return (
        <div className="w-1/4 rounded align-middle justify-center overflow-scroll shadow-md transition duration-500 hover:scale-105">
            <img
                className="align-middle justify-center"
                src={imgLink}
                alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
                <div className="text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-sm">{text}</p>
            </div>
        </div>
    );
};
