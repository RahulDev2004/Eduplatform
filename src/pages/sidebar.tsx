  import React, { useState } from "react";

  export function Sidebar() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const dummyData = [
      { name: "File 1" },
      { name: "File 2" },
      { name: "File 3" },
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] ?? null;
      setSelectedFile(file);
      console.log(selectedFile?.name);
    };

    return (
      <div className="bg-gray-500 h-screen w-64 p-4">
        <div>
          <input type="file" className="mb-4 border-black border-1" onChange={handleFileChange} />
          <ul className="space-y-2">
            {dummyData.map((data, index) => (
              <li className="flex items-center" key={index}>
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white font-bold">{data.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
