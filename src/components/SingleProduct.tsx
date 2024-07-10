import Image from "next/image";
import React from "react";

import Ratings from "./shared/Rating";
import AddToCartCard from "./AddtoCartCard";

const SingleProduct = ({ singleProduct }: { singleProduct: any }) => {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex justify-between">
        {singleProduct.map((product: any) => {
          return (
            <div key={product.id} className="flex">
              <div className="flex">
                <div className="bg-gray-100">
                  <Image
                    className="mix-blend-multiply p-4"
                    src={product.image}
                    width={300}
                    height={300}
                    alt={product.title}
                  />
                </div>
                <div className="mx-4 w-[70%]">
                  <h1 className="font-bold text-lg">{product.title}</h1>
                  <p>{product.description}</p>
                  <Ratings ratings={product.rating} />
                  <h1 className="font-bold">{`$${product.price}`}</h1>
                  <div>
                    <h1 className="font-bold text-sm">About this item</h1>
                    <li>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat omnis assumenda! Delectus sit inventore unde aliquam commodi asperiores illo necessitatibus! Natus eius dolorum optio mollitia soluta ipsam, odio omnis.
                    </li>
                    <li>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt amet odio nulla! Inventore aliquam sit alias quia, debitis quam aperiam, quibusdam quaerat atque et nisi laudantium dignissimos vel maiores! Vitae!
                    </li>
                    <li>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure adipisci expedita alias molestias nobis ut accusantium! Sint cum, aliquam unde praesentium facere iusto, sequi error fuga inventore, eum non?
                    </li>
                  </div>
                </div>
              </div>
              <AddToCartCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProduct;
