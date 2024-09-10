// src/components/InfoCards.jsx
import React from "react";

const cards = [
  {
    id: 1,
    imgSrc:
      "https://images.pexels.com/photos/1170184/pexels-photo-1170184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Destination 1",
    title: "Discover America 1",
    description:
      "With over 500 destinations, Amtrak takes you where you want to go. Explore the beauty of America.",
    link: "#learn-more-1",
  },
  {
    id: 2,
    imgSrc:
      "https://images.pexels.com/photos/880806/pexels-photo-880806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Destination 2",
    title: "Travel in a Private Room",
    description: "Available on many routes across the country.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.pexels.com/photos/4080644/pexels-photo-4080644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    alt: "Destination 3",
    title: "Road Trip with Your Car on Auto Train",
    description: "Coach fares as low as $95 + the cost of your vehicle.",
    link: "#learn-more-3",
  },
  {
    id: 4,
    imgSrc:
      "https://images.pexels.com/photos/21410/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Destination 4",
    title: "All Aboard with Just Your Phone",
    description:
      "Embark on an unforgettable journey across the United States with Amtrak.",
    link: "#learn-more-4",
  },
  {
    id: 5,
    imgSrc:
      "https://images.pexels.com/photos/3689276/pexels-photo-3689276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Destination 5",
    title: "Save on Group Travel with Share Fares",
    description: "Get up to 60% off.",
    link: "#learn-more-5",
  },
  {
    id: 6,
    imgSrc:
      "https://images.pexels.com/photos/11310603/pexels-photo-11310603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Destination 6",
    title: "Join Amtrak Guest Rewards",
    description:
      "Get on board with rewards. Reward travel starts at just 400 points.",
    link: "#learn-more-6",
  },
];

const InfoCards = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md pb-5 overflow-hidden group"
          >
            <img
              src={card.imgSrc}
              alt={card.alt}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:grayscale group-hover:opacity-70"
            />
            <div className="p-4 text-center pb-5">
              <h3 className="text-xl font-mono mb-2 text-gray-500">
                {card.title}
              </h3>
              <p className="text-base mb-4 text-gray-950">{card.description}</p>
              <a
                href={card.link}
                className="inline-block px-4 py-2 text-blue-600 font-semibold rounded hover:text-blue-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
