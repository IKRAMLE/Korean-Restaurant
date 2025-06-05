import Image from 'next/image'

export default function BibimpapHero() {
  return (
    <div className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 mt-12">
      {/* Background element (optional - adjust as needed) */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 -z-10"></div>

      {/* Circular Bibimpap Image - Large */}
      <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-white -mt-150 transform transition-transform duration-500 hover:scale-105 ">
        <Image
          src="/bibimpap.png"
          alt="Delicious Bibimpap"
          className="object-cover w-full h-full"
          width={500} 
          height={500} 
        />
      </div>
    </div>
  )
}
