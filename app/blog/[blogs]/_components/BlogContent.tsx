import React from "react";

export default function BlogContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <div className="bg-white p-8 rounded-lg shadow">
        {content.split("\n\n").map((paragraph, index) => (
          <div key={index} className="mb-6">
            {paragraph.startsWith("-") || paragraph.startsWith("1.") ? (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {paragraph.split("\n").map((line, lineIndex) => (
                  <li key={lineIndex} className="text-gray-700">
                    {line.replace(/^[-1-4.]\s*\*\*/, "").replace(/\*\*/g, "")}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
