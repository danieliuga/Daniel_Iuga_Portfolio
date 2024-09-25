interface SkillItem {
    imgSrc: string;
    title: string;
    description: string;
}

const SkillItem = ({ imgSrc, title, description }: SkillItem) => (
    <div className='flex flex-col justify-center items-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg p-4 border border-gray-300'>
        <div className='w-24 h-24 mb-4'>
            <img
                src={imgSrc}
                alt={title}
                className="rounded-full border-2 border-blue-500 shadow-lg transition-transform transform hover:scale-110"
            />
        </div>
        <p className='text-xl font-semibold mt-2 text-gray-800'>{title}</p>
        <p className='text-gray-600 text-sm mt-1 text-center'>{description}</p>
    </div>
);

export default SkillItem;
