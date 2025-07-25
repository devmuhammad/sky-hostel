import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container-cont flex-between py-2">
        <div className="w-20 aspect-video relative">
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md">Register</button>
      </div>
    </div>
  )
}

export default Navbar;
