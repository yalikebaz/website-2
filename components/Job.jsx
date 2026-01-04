import Image from 'next/image'

const Job = ({ image, company, title, url }) => {
  return (
    <div className="w-96 hover:bg-gray-700 hover:rounded-md hover:cursor-pointer hover:transition-all duration-300">
      <a href={url} target='_blank' className="hover:no-underline p-2 flex flex-row h-100 w-100">
        <Image
          src={image}
          alt={company}
          width={50}
          height={50}
          quality={100}
          className="inline mr-3"
        />
        <div>
          <p className="text-gray-100">{title}</p>
          <p className="text-gray-400">{company}</p>
        </div>
      </a>
    </div>
  )
}

export default Job
