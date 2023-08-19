import React from 'react';

const ProductNews = () => (
  <div className="products-tank container mx-auto w-5/6 flex items-center mt-10 pb-20 flex-col lg:flex-row gap-7">
    {/* single product news */}

    <div className="lg:w-1/3 w-full">
      <div className="flex flex-col gap-2">
        <h3 className="leading-9 lg:text-2xl md:text-xl text-lg font-bold text-black">Featured Products</h3>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://www.jenko-elektronik.com/wp-content/uploads/2022/09/shop-img-59-5.jpg"
              alt="Retro"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Retro Gaming Console S-4001 in Dark Grey</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$290</span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://www.officechoice.sn/wp-content/uploads/2022/09/shop-img-16.jpg"
              alt="Electric"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Electric Scooter XM Prisma Light Superior</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$1,790</span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://www.jenko-elektronik.com/wp-content/uploads/2022/08/shop-img-11-5.jpg"
              alt="Smart TV"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Smart TV Keyboard and Mouse S700</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$390</span>
          </div>
        </div>
      </div>
    </div>

    {/* single product news */}

    <div className="lg:w-1/3 w-full">
      <div className="flex flex-col gap-2">
        <h3 className="leading-9 lg:text-2xl md:text-xl text-lg font-bold text-black">Top Selling Products</h3>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-6.jpg"
              alt="Led 4K"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Led 4K Smart TV Screen Vantablack D-5</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$1,290</span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-10.jpg"
              alt="Headphones"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">SM-22505 Closed-Back Wireless Headphones</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$590</span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://m.media-amazon.com/images/I/519Lr4RH61L._AC_UF1000,1000_QL80_.jpg"
              alt="Watch"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Digital Waterproof Fitness Watch G- Sport</h5>
            <span className="mt-3 flex gap-1">
              $400
              <div className="font-normal text-xs leading-5 text-gray-500">$490</div>
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* single product news */}

    <div className="lg:w-1/3 w-full">
      <div className="flex flex-col gap-2">
        <h3 className="leading-9 lg:text-2xl md:text-xl text-lg font-bold text-black">Hot New Releases</h3>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-8.jpg"
              alt="Drone"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Fixed-Wing Hybrid Surveillance Drone PW-555</h5>
            <span className="mt-3 font-normal text-lg leading-6 text-black">$1,450</span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://www.jenko-elektronik.com/wp-content/uploads/2022/09/shop-img-67-5.jpg"
              alt="Flash"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">Mini USB Flash G-10 Multiple Colors</h5>
            <span className="mt-3 flex gap-1 font-normal text-lg leading-6 text-black">
              $39
              <span className="sub-price">$59</span>
            </span>
          </div>
        </div>
        {/* single  Product details */}
        <div className="flex items-center gap-7 mt-4 pl-3">
          <div className="">
            <img
              className="w-products-tank h-products-tank"
              src="https://bestitcart.com/wp-content/uploads/2022/10/shop-img-115-300x300.png"
              alt="Web Camera"
            />
          </div>
          <div className="product-details w-2/4 flex flex-col">
            <h5 className="font-bold text-sm leading-5 text-black">
              High Definition Web Camera SPX-
              8962547
            </h5>
            <span className="mt-3 flex gap-1 font-normal text-lg leading-6 text-black">
              $100
              <div className="font-normal text-xs leading-5 text-gray-500">$140</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default ProductNews;
