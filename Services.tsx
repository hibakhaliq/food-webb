import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";


const servicesData = [
    {
      img:"/services__1.png",
      title: "Professonal Kitchen",
      desc: "Welcome to our kitchen, where passion meets creativity",
    },
    {
      img: "/services__2.png",
      title: "Delivery",
      desc: "Enjoy the convenience of our speedy delivery service! We ensure your favorite dishes arrive fresh and delicious right to your doorstep,",
    },
    {
      img: "/services__3.png",
      title: "Wine List",
      desc: "Explore our curated wine list, featuring a delightful selection of red, white, and sparkling wines from renowned vineyards.",
    },
    {
      img: "/services__4.png",
      title: "Free Wifi",
      desc: "Stay connected with our complimentary Wi-Fi! ",
    },
  ];

const Services =() => {
    return (
        <div className="container pt-40">
          <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
              Choose Best <span className="text-accent">Service</span>
            </h2>
            <p className="text-gray-700">
            Exceptional Services Tailored Just for You
              <br />
              What are you waiting for??
            </p>
            <div className="w-fit mx-auto">
              <Dash />
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
          {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
          
    
export default Services;