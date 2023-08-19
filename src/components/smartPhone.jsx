/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

const Items = [
  {
    id: 1,
    name: 'Smartphone  128GB',
    price: '320',
    image: [
      { url: 'https://techsgss.com/wp-content/uploads/2022/09/shop-img-32-8.jpg' },
      { url: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/fold_top.jpg' },
      { url: 'https://trak.in/wp-content/uploads/2019/10/Untitled-design-5-1280x720.jpg' },
    ],
  },
  {
    id: 2,
    name: 'Smartphone S-10',
    price: '690',
    image: [
      { url: 'https://myfon.asia/wp-content/uploads/2020/12/S10P_BL.png' },
      { url: 'https://purepng.com/public/uploads/large/samsung-galaxy-s10-ceramic-black-side-vo3.png' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk16a3YV7ZfHz5VfHhklND_5-w-uOzIweQ7H9S5jOabpa3njmTUOeMYM7xw45RiOlB6I4&usqp=CAU' },
    ],
  },
  {
    id: 3,
    name: 'HD Tablet',
    price: '690',
    image: [
      { url: 'https://www.jenko-elektronik.com/wp-content/uploads/2022/09/shop-img-34-5.jpg' },
      { url: 'https://i.otto.de/i/otto/e505618a-a262-4737-a383-bba68f841836?$responsive_ft2$' },
      { url: 'https://myfon.asia/wp-content/uploads/2021/01/S10_BK.png' },
    ],
  },
  {
    id: 4,
    name: 'Ultra HD Tablet',
    price: '1,090',
    image: [
      { url: 'https://www.officechoice.sn/wp-content/uploads/2022/09/shop-img-35.jpg' },
      { url: 'https://m.media-amazon.com/images/I/41pPsQ%2BhORL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg' },
      { url: 'https://m.media-amazon.com/images/I/71V9N-TiiTL.jpg' },
    ],
  },
  {
    id: 5,
    name: 'Tablet X-16',
    price: '990',
    image: [
      { url: 'https://powergadgetbay.com/wp-content/uploads/2022/09/shop-img-36.jpg' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91AxCkPeLc7gVsQAvpp-Xw-wdGVuDIXE0ofqGWWuqv8qaUktNDPNX6xQvh4q2PGTScc8&usqp=CAU' },
      { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-ukIPYYPr0aOLIgWjY3fM54UZ86L10HzqNJOVhvvncAiehJjvGVI1nayrB1iXOk5Ey4&usqp=CAU' },
    ],
  },
  {
    id: 6,
    name: 'Smartphone Case',
    price: '79',
    image: [
      { url: 'https://www.test.watekinc.com/wp-content/uploads/2022/09/shop-img-37.jpg' },
      { url: 'https://img.joomcdn.net/354435c5d5f2c547cdb32242f45732464bf3c1ba_original.jpeg' },
      { url: 'https://img.tvc-mall.com/uploads/details/101135614A-4.jpg' },
    ],
  },
  {
    id: 7,
    name: 'Tablet Protective Case',
    price: '59',
    image: [
      { url: 'https://asset.conrad.com/media10/isa/160267/c1/-/en/002350488PI00/image.jpg' },
      { url: 'https://www.spigen.com/cdn/shop/products/Galaxy_Tab_S8_Ultra_Case_Thin_Fit_Pro_Black_Title_1200x1200.jpg?v=1648227309' },
      { url: 'https://cdn.shopify.com/s/files/1/0193/5251/8755/products/ef-rx900cbegww.jpg?v=1644656209' },
    ],
  },
  {
    id: 8,
    name: 'Protective Glass',
    price: '99',
    image: [
      { url: 'https://rukminim2.flixcart.com/image/850/1000/l0fm07k0/screen-guard/edge-to-edge-screen-guard/g/z/2/modsa3sgls-3-s-softline-original-imagc7xfymzj4vn6.jpeg?q=90' },
      { url: 'https://www.sbsmobile.com/ned/195258-thickbox_default/4d-full-glass-screen-protector-for-oneplus-8-pro.jpg' },
      { url: 'https://www.maxbhi.com/images/thumbnails/1000/1000/detailed/7333/touch_screen_digitizer_for_realme_c33_blue_by_maxbhi_com_37262.jpg' },
    ],
  },
];

const SmartPhone = () => {
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
              <p className="lg:md:w-1/2 md:w-1/2 font-bold text-sm text-black mt-6">Smartphones & Tablets</p>
              <p className="flex gap-3 items-center font-bold text-sm mt-5">
                Shop Now
                <i className="fa fa-times" />
              </p>
            </div>
          </div>
          <div className="w-1/2 h-auto lg:h-auto lg:w-auto md:h-auto md:w-1/3 ">
            <img src="https://phonerebel.com/cdn/shop/products/14_Rebel_Flex_Series_Main_1400x.webp?v=1685166394" alt="home screen" />
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

export default SmartPhone;
