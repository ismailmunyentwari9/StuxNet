/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Items = [
  {
    id: 1,
    name: 'Profeus Laptop',
    price: '970',
    image: [
      { url: 'https://usercontent.one/wp/www.jenko-elektronik.com/wp-content/uploads/2022/08/shop-img-3-3-1.jpg' },
      { url: 'https://brightstarcomp.com/wp-content/uploads/2022/09/800_800_44AF3A3C3095719F7A3E1B0399C6A00Amp.jpg' },
      { url: 'https://cdn11.bigcommerce.com/s-g9br3/images/stencil/original/products/1155/4205/MECH-15_G3R_-_Front_2022__37175.1659656136.jpg?c=2' },
    ],
  },
  {
    id: 2,
    name: 'Smartphone Midnight',
    price: '770',
    image: [
      { url: 'https://alohastorage.s3.amazonaws.com/305138/6.png' },
      { url: 'https://supercells.co.za/wp-content/uploads/2023/02/y70-plus.jpg' },
      { url: 'https://m.media-amazon.com/images/I/61lDQzzlbWL.jpg' },
    ],
  },
  {
    id: 3,
    name: 'Led 4K Smart TV',
    price: '1,290',
    image: [
      { url: 'https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-6.jpg' },
      { url: 'https://sc04.alicdn.com/kf/H3515975e643d43748cb677aae9a780c2F.jpg' },
      { url: 'https://5.imimg.com/data5/SELLER/Default/2021/7/JP/FJ/ML/81588906/smart-uhd-4k-tv-500x500.png' },
    ],
  },
  {
    id: 4,
    name: 'Hybrid Drone',
    price: '1,450',
    image: [
      { url: 'https://www.test.watekinc.com/wp-content/uploads/2022/08/shop-img-8.jpg' },
      { url: 'https://www.led-servis.cz/wp-content/uploads/2022/08/shop-img-8-3-3.jpg' },
      { url: 'https://s.alicdn.com/@sc04/kf/Hcf551e0de42f478db5f173fe323afdfaJ.jpg_300x300.jpg' },
    ],
  },
  {
    id: 5,
    name: 'Business Inkjet',
    price: '500',
    image: [
      { url: 'https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-7.jpg' },
      { url: 'https://www.ricoh.com/-/Media/Ricoh/Sites/com/printers/SG/2100N/img/img_zoom1.jpg' },
      { url: 'https://powergadgetbay.com/wp-content/uploads/2022/08/shop-img-7-4.jpg' },
    ],
  },
  {
    id: 6,
    name: 'TV Keyboard and Mouse',
    price: '390',
    image: [
      { url: 'https://www.test.watekinc.com/wp-content/uploads/2022/08/shop-img-11.jpg' },
      { url: 'https://www.test.watekinc.com/wp-content/uploads/2022/08/shop-img-11-3.jpg' },
      { url: 'https://m.media-amazon.com/images/I/71gZXeUMcuL._AC_SS300_.jpg' },
    ],
  },
  {
    id: 7,
    name: 'Web Camera',
    price: '100',
    image: [
      { url: 'https://powergadgetbay.com/wp-content/uploads/2022/09/shop-img-18.jpg' },
      { url: 'https://www.test.watekinc.com/wp-content/uploads/2022/09/shop-img-18-1.jpg' },
      { url: 'https://i5.walmartimages.com/asr/5680ca7a-1f32-4eb2-a7eb-1a6807b69ef7.ca1cc3f596a507b96c879d56fcd99b99.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff' },
    ],
  },
  {
    id: 8,
    name: 'Gaming Console',
    price: '290',
    image: [
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyisRFZp-1RgVMpO2Oj5cgOrJMtvYW23MI2g&usqp=CAU' },
      { url: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/965583-Product-0-I_1672f1ab-2a51-42c8-b972-f991b5403e3d_300x300.jpg?v=1572321869' },
      { url: 'https://i.ebayimg.com/thumbs/images/g/~5EAAOSwQLZdvtjJ/s-l225.jpg' },
    ],
  },
];

const Watches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const Prev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Items[currentIndex].image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const Next = () => {
    const isLastSlide = currentIndex === Items[currentIndex].image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto w-5/6 lg:mt-10 mt-0">
      <div className="md:grid md:grid-cols-3 lg:flex gap-4 ">
        <div className="bg-gray-200 rounded lg:flex-col lg:w-2/12 md:col-span-3 md:flex md:gap-40 lg:gap-10  px-2 flex-justify-center mb-3">
          <div className=":flex flex-col items-center justify-center">
            <div className="lg:gap-10 lg:w-1/1  py-2 md:w-1/1 md:flex md:flex-col md:gap-40 md:px-4">
              <p className="lg:md:w-1/2 md:w-1/2 font-bold text-sm text-black mt-6">Smart & Fitness Watches</p>
              <p className="flex gap-3 items-center font-bold text-sm mt-5">
                Shop Now
                <i className="fa fa-times" />
              </p>
            </div>
          </div>
          <div className="w-1/2 h-auto lg:h-auto lg:w-auto md:h-auto md:w-1/3 ">
            <img src="https://www.boat-lifestyle.com/cdn/shop/products/Untitled-5.png?v=1658294451" alt="home screen" />
          </div>
        </div>
        <div className="lg:w-8/12 md:col-span-2">
          <div className="gap-4 grid grid-cols-4">
            {Items.map((data) => (
              <div
                className=" item hover:border-blue-500 group flex flex-col justify-between pt-2 border border-solid border-gray-300 bg-white rounded-lg h-auto mb-4 relative col-span-4 lg:col-span-1 md:col-span-2"
                key={data.id}
              >

                <div className=" px-3 item-header flex justify-between flex-wrap lg:col-span-1 md:col-span-2">
                  <span className="text-gray-500 text-xs leading-4 tracking-tighter">PROJECTORS</span>
                  <span className="fas flex flex-col gap-2">
                    <i className="fa fa-heart" />
                    <i className="fa fa-exchange" />
                  </span>
                </div>
                <div className="item-image px-3 flex justify-center group">
                  <span onClick={Prev} className=" hidden group-hover:block cursor-pointer fa fa-angle-left text-black text-2xl font-bold  self-center" />
                  <img className="w-216 h-216" src={data.image[currentIndex].url} alt="home screen" />
                  <i onClick={Next} className="hidden group-hover:block cursor-pointer fa fa-angle-right text-black text-2xl font-bold self-center" />
                </div>
                <div className="mt-10 px-3">
                  <span className="text-white text-xs leading-3 tracking-wider rounded bg-orange-500 px-2 py-1">
                    New
                  </span>
                  <p className="category-name mt-3 text-sm text-black font-bold leading-6 ">
                    {data.name}
                  </p>
                  <p className="flex items-center justify-between category-price mt-3">
                    <span className="price text-black text-xl font-normal leading-6">
                      $
                      {data.price}
                    </span>

                  </p>
                </div>
                <div className="hidden group-hover:block">
                  <div className="flex justify-between px-4 py-3 bg-blue-500 text-white rounded-b-lg">
                    <span>READ MORE</span>
                    <i className="fa fa-shopping-cart rounded cursor-pointer" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div className="h-auto rounded pt-4 px-4 py-4 border border-solid border-gray-300 lg:h-auto lg:w-2/12  md:col-span-1 md:h-1/3">
          <p className="computer-components font-bold text-black text-sm leading-6 w-2/4 mb-7 ">
            Computer Components
          </p>
          <div className="componets-items">
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Cables</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Data Storage</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Keyboards</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium leading-5"><p>Microphones</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Monitors</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Mice</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Printers</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Scanners</p></a>
            <a href="#link" className="componets-items text-gray-500 text-medium font-medium landing-4"><p>Web Cameras</p></a>
          </div>
          <a href="#viewall">
            <div className="view-all  flex items-center gap-10 mt-6 font-bold text-sm leading-4 text-black">
              <span>View All</span>
              <i className="fa fa-times" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Watches;
