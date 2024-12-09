import React, { useState } from "react";
import Img from "../../../assets/pic.avif";

interface ProfileProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ name, role, image, bio }) => {
  return (
    <div className="max-w-xs mt-20 rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
     
      <img
        className="w-full h-48 object-cover"
        src={Img}
        alt={name}
      />
      
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-gray-500 mt-2">{bio}</p>
      </div>
    </div>
  );
};

const PeopleProfileCarousel: React.FC = () => {
  const profiles = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://via.placeholder.com/300",
      bio: "John is a passionate software engineer with 5 years of experience in full-stack development.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      image: "https://via.placeholder.com/300",
      bio: "Jane is an experienced product manager who specializes in creating user-centered designs.",
    },
    {
      name: "Alice Johnson",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/300",
      bio: "Alice loves designing clean, intuitive, and user-friendly interfaces.",
    },
    {
      name: "Bob Brown",
      role: "Data Scientist",
      image: "https://via.placeholder.com/300",
      bio: "Bob is a data scientist with expertise in machine learning and AI.",
    },
    {
      name: "Charlie Davis",
      role: "Web Developer",
      image: "https://via.placeholder.com/300",
      bio: "Charlie is a web developer who builds fast, responsive websites.",
    },
    {
      name: "Diana Green",
      role: "Digital Marketer",
      image: "https://via.placeholder.com/300",
      bio: "Diana is a digital marketing expert focusing on SEO and social media strategies.",
    },

  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextProfileSet = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % profiles.length);
  };

  const prevProfileSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 2 ? profiles.length - (profiles.length % 3) : prevIndex - 3
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Team Profiles</h1>

      <div className="relative">
        <div className="flex justify-center overflow-hidden">
          {/* Display 3 profiles at a time */}
          {profiles.slice(currentIndex, currentIndex + 3).map((profile, index) => (
            <div className="mx-2" key={index}>
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProfileSet}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          &#8249;
        </button>
        <button
          onClick={nextProfileSet}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          &#8250;
        </button>
      </div>

    
      <div className="flex justify-center items-center mt-4">
        {profiles.length > 3 &&
          Array.from({ length: Math.ceil(profiles.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-2 cursor-pointer ${
                currentIndex / 3 === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * 3)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default PeopleProfileCarousel;
