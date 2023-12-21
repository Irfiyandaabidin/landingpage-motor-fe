import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <p>Metro Motor</p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Suprax</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vario</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Vixion</p>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Service</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Sell Motorbike</p>
              </li>
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Buy Motorbike</p>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Location</h6>
            <p className="text-sm text-gray-600 mb-4">Ngringin, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta</p>
          </div>

        </div>

      </div>
    </footer>
  )
}
