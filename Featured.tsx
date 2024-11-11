import React from "react";
import Dash from "./Dash";
import Image from "next/image";
const Feature = () => {
    return (
        
            

    <div className="container pt-40">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Here, we highlight some of the best dishes from around the world, celebrating different flavors and easy recipes. Whether you’re looking for gourmet meals, healthy options, or quick snacks, our featured items are chosen to inspire your next cooking adventure. Each dish is selected for its tasty ingredients and beautiful presentation, making sure every visit to our site sparks your love for food. Come explore the tasty treats waiting for you!
      </p>
      <Dash/>
      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__1.png"
            width={300}
            height={600}
            alt="grid image"/>

<div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Shrimp Salad</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Delicious shrimp salad, made with tender shrimp and a fresh mix of crisp lettuce, juicy tomatoes, and crunchy cucumbers. Tossed in a zesty vinaigrette, it’s a light and refreshing meal perfect for any occasion. Packed with flavor and nutrition
            </p>
          </div>
            </div>

            <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__2.png"
            width={500}
            height={900}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Baked apples</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Our baked apples are a warm and comforting treat, perfect for any dessert lover! Each apple is cored and filled with a sweet mixture of cinnamon, sugar, and nuts, then baked until tender and caramelized. 
            </p>

        </div>
        </div>
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
            src="/grid__3.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Cherries chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Our cherry chicken is a deliciously unique dish that combines tender, juicy chicken with a rich cherry sauce. The chicken is seared to perfection and then simmered with sweet and tangy cherries, creating a delightful balance of flavors. 
            </p>
          </div>
        </div>

        </div>
        </div>
    );
};
export default Feature;