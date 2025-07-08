"use client"

import Link from "next/link";

const Brand = () => {
  const cards = [
    {
      id: 1,
      img: "/shop/computer-brand (1).png",
      link: "/shop1",

    },
    {
      id: 2,
      img: "/shop/camera-brand.png",
      link: "/shop1",
    },
    // {
    //   id: 3,
    //   img: "/shop/brand3.png",
    //   link: "/shop1",
    // },
    // {
    //   id: 4,
    //   img: "/shop/brand4-4.png",
    //   link: "/shop1",
    // },
    {
      id: 5,
      img: "/shop/brand5.png",
      link: "/shop1",
    },
    // {
    //   id: 6,
    //   img: "/shop/brand6.png",
    //   link: "/shop1",
    // },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-black font-bold mb-8">Shop By Brand</h2>
        <div className="grid mx-6 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-1">
          {cards.map((card) => (
            <Link href={card.link} key={card.id}>
              <div className="group w-full h-full relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <img
                  src={card.img}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
