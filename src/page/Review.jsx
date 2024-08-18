import React, { useState } from "react";
import SubHeader from "../common/SubHeader";
import { ContactUS, Dilip, Gourish, Harish, Harshal, Kalpesh, Mohit, Shital, Sukhwinder, Vishal } from "../assets";

const reviews = [
  {
    name: "Vishal Garje",
    rating: 4.5,
    description:
      "Good experience, excellent team for packaging and moving. Shifted my household very carefully and time-bound.",
    date: "6 days ago",
    image: Vishal, // Replace with actual image URL
  },
  {
    name: "Shital Mane",
    rating: 4.1,
    description: "Fast packing, staff is trustworthy",
    date: "12 days ago",
    image: Shital, // Replace with actual image URL
  },
  {
    name: "Harish Patil",
    rating: 4.3,
    description:
      "Very good service, excellent staff, take care of all kind of delicate items",
    date: "28 days ago",
    image: Harish, // Replace with actual image URL
  },
  {
    name: "Sukhwinder Saini",
    rating: 4.6,
    description: "Attitude of representatives is good. Packing staff have good experience. Loading and unloading is good.",
    date: "2 months ago",
    image: Sukhwinder, // Replace with actual image URL
  },
  {
    name: "Gourish Dixit",
    rating: 4.0,
    description:
      "Professional and good service provided by D group packers and movers.",
    date: "3 months ago",
    image: Gourish, // Replace with actual image URL
  },
  {
    name: "Mohit Vyas",
    rating: 4.2,
    description: "Good service. good handling of items. good packing. fast service.",
    date: "5 months ago",
    image: Mohit, // Replace with actual image URL
  },
  {
    name: "Harshal Wagh",
    rating: 4.0,
    description: "Nice Co-operation and Nice Packing done. I had took his services from Ankleshwar to Raichur(Karnataka). All done well... Keep it up guys. God bless you all..",
    date: "8 months ago",
    image: Harshal, // Replace with actual image URL
  },
  {
    name: "Dilip dhandar",
    rating: 4.2,
    description:
      "Excellent way of packing, the team is very caring foe goods.. I have seen more than profession, its passion for them! They takes care of goods like you do by your own..! Each item handled with care. Between learn one good thing about packing, it's not what material used, its about how they handled the goods..",
    date: "9 months ago",
    image: Dilip, // Replace with actual image URL
  },
  {
    name: "Kalpesh Brahmbhatt",
    rating: 4.7,
    description: "Exallent experience with d group I hope in future we will give another contact with d group",
    date: "1 year ago",
    image: Kalpesh, // Replace with actual image URL
  },
];

const Review = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const handleReadMore = () => {
    setShowAllReviews(true);
  };

  return (
    <div>
      <div className="mt-12">
        <SubHeader img={ContactUS} text={"Review"} />
      </div>
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="md:container mx-auto">
          <div className="mx-5 xs:mx-8 sm:mx-12 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews
              .slice(0, showAllReviews ? reviews.length : 6)
              .map((review, index) => (
                <div key={index} className="bg-white p-6 shadow-2xl rounded-xl">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="text-sm font-semibold capitalize">{review.name}</h3>
                      <p className="text-xs text-gray-500">{review?.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="text-yellow-400 text-lg mr-2">⭐</div>
                    <span className="font-semibold">{review.rating}/5.0</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    {review.description}
                  </p>
                </div>
              ))}
          </div>
          {!showAllReviews && (
            <div className="text-center mt-10">
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded"
                onClick={handleReadMore}
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
