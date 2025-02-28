import React, { useState } from "react";

const CategoryIcons = {
  "Digital Design": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7858b8ff" d="M21.9 9.6c-.2-.5-.8-.7-1.3-.5l-2.9 1.4l-2.1-2.1l-2.1-2.1l1.4-2.9c.2-.5 0-1.1-.5-1.3s-1.1 0-1.3.5l-1.5 3.1l-6.4 1c-.4.1-.7.4-.8.8L2 19.1c-.1.3 0 .7.3.9L4 21.7c.2.2.5.3.7.3h.2l11.6-2.4c.4-.1.7-.4.8-.8l1-6.4l3.1-1.5c.5-.2.7-.8.5-1.3m-6.5 8.2l-9.8 2l3.7-3.7c1.5.7 3.3.1 4-1.4s.1-3.3-1.4-4c-1.1-.5-2.5-.3-3.4.6s-1.1 2.3-.6 3.4l-3.7 3.7l2-9.8l5.8-1l2.2 2.2l2.2 2.2zm-5.8-4.4c0-.3.1-.5.3-.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4s-1 .4-1.4 0c-.2-.2-.3-.5-.3-.7"/></svg>
  ),
  "Traditional Design": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7858b8ff" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"/></svg>
  ),
  "3D Modeling & 2D/3D Animation": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7858b8ff" d="M9 22q-1.45 0-2.725-.55t-2.225-1.5t-1.5-2.225T2 15q0-2.025 1.05-3.7T5.8 8.75q.5-.975 1.238-1.713T8.75 5.8q.825-1.7 2.525-2.75T15 2q1.45 0 2.725.55t2.225 1.5t1.5 2.225T22 9q0 2.125-1.05 3.75t-2.75 2.5q-.5.975-1.237 1.713T15.25 18.2q-.875 1.7-2.55 2.75T9 22m0-2q.825 0 1.588-.25T12 19q-1.45 0-2.725-.55t-2.225-1.5t-1.5-2.225T5 12q-.5.65-.75 1.413T4 15q0 1.05.4 1.95t1.075 1.575T7.05 19.6T9 20m3-3q.825 0 1.613-.25T15.05 16q-1.475 0-2.75-.563t-2.225-1.512T8.563 11.7T8 8.95q-.5.65-.75 1.438T7 12q0 1.05.388 1.95t1.087 1.575q.675.7 1.575 1.087T12 17m3-3q.45 0 .863-.075t.837-.225q.55-1.5.163-2.888t-1.338-2.337t-2.337-1.338T10.3 7.3q-.15.425-.225.838T10 9q0 1.05.388 1.95t1.087 1.575q.675.7 1.575 1.088T15 14m4-1.95q.5-.65.75-1.437T20 9q0-1.05-.387-1.95t-1.088-1.575q-.675-.7-1.575-1.087T15 4q-.875 0-1.638.25T11.95 5q1.475 0 2.75.563t2.225 1.512T18.438 9.3T19 12.05"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Digital Design": [
      "Illustrations",
      "Raster",
      "RAW Images",
    ],
    "Traditional Design": [
      "Drawing and Design",
      "Painting and Coloring",
    ],
    "3D Modeling & 2D/3D Animation": [
      "3D Modeling",
      "3D Animations",
      "2D Animations",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
