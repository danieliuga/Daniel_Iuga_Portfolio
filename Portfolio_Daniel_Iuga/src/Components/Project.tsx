
interface ProjectType {
    image: string;
    title: string;
    description: string;
    link: string;
}

const Project = ({ image, title, description, link }: ProjectType) => (
    <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_1fr] justify-center items-center mt-10'>
      <div className='flex justify-center md:justify-end'>
        <div className='w-2/3 md:mr-10'>
          <img src={image} alt={title} className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className='flex flex-col justify-center md:justify-start items-center md:items-start md:ml-5'>
        <div className='bg-blue-500 text-white font-semibold py-2 w-40'>PROJECT</div>
        <p className='py-2 mt-2 text-2xl font-bold'>{title}</p>
        <p className='py-2 flex text-center md:text-left'>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className='border mt-2 px-4 py-2 border-black font-semibold bg-white text-blue-600'
        >
          See More
        </a>
      </div>
    </div>
  );

export default Project
