// components/Card.tsx
import React from "react";
import { IconCheck } from "@tabler/icons-react";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // می‌تونی SVG یا کامپوننت Tabler بذاری
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div
      dir="rtl"
      className="max-w-sm  rounded-xl shadow-md p-6 flex-row gap-4 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-secondary/15 to-primary/10 border border-gray-200 "
    >
      {/* آیکون */}
      <div className="flex-shrink-0  bg-secondary w-16 h-16 mb-4 text-white rounded-lg p-4 text-center flex items-center justify-center">
        {icon || <IconCheck size={40}  />}
      </div>

      {/* محتوا */}
      <div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
