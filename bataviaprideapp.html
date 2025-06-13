import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State for the currently selected tab (Vendor Directory, Schedule, or Links)
  const [activeTab, setActiveTab] = useState('vendors'); // Default to vendor directory
  // State for the schedule search query (still applies to schedule and vendors)
  const [searchQuery, setSearchQuery] = useState('');

  // Define the schedule data based on the provided text
  const schedule = [
    {
      time: '3:00 PM',
      event: 'Kick-off / Read the Proclamation from NYS/ Drag Storytime',
      plainText: 'Kick-off / Read the Proclamation from NYS/ Drag Storytime'
    },
    {
      time: '4:00 PM - 4:30 PM',
      event: (
        <>
          <a href="https://www.thebgmc.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
            Buffalo Gay Men's Chorus \ Nickel City Treble Makers
          </a>
        </>
      ),
      plainText: 'Buffalo Gay Men\'s Chorus \\ Nickel City Treble Makers'
    },
    {
      time: '4:30 PM - 5:00 PM',
      event: (
        <>
          Parade Line Up (300 east main, Batavia) /{' '}
          <a href="https://www.thergmc.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
            Rochester Gay Men's Chorus
          </a>
        </>
      ),
      plainText: 'Parade Line Up (300 east main, Batavia) / Rochester Gay Men\'s Chorus'
    },
    {
      time: '5:00 PM - 6:00 PM',
      event: 'Parade',
      plainText: 'Parade'
    },
    {
      time: '6:00 PM - 6:30 PM',
      event: 'GLOW OUT Welcome, Announcements, Awards/Recognitions, Festival Start, Flower City Marching band Performance',
      plainText: 'GLOW OUT Welcome, Announcements, Awards/Recognitions, Festival Start, Flower City Marching band Performance'
    },
    {
      time: '6:30 PM',
      event: 'Drag Set #1:',
      plainText: 'Drag Set #1:'
    },
    {
      time: '8:00 PM - 8:30 PM',
      event: 'Intermission / Meet and Greet',
      plainText: 'Intermission / Meet and Greet'
    },
    {
      time: '8:30 PM - 10:00 PM',
      event: 'Drag Set #2:',
      plainText: 'Drag Set #2:'
    },
  ];

  // Filtered schedule based on search query
  const filteredSchedule = schedule.filter(item =>
    item.plainText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.time.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Categorized list of vendors with links
  const vendorCategories = [
    {
      category: 'Food Trucks',
      items: [
        { name: 'Sun Roll Food Truck', plainText: 'Sun Roll Food Truck', link: 'https://www.instagram.com/sunroll716/?hl=en' },
        { name: 'House of Munch', plainText: 'House of Munch', link: 'https://www.instagram.com/houseofmunch/' },
        { name: 'Ice Cream & Chill', plainText: 'Ice Cream & Chill', link: 'https://www.instagram.com/icecreamandchilltruck/?hl=en' },
      ],
    },
    {
      category: 'Community & Information Booths',
      items: [
        { name: 'Fidelis Care (Mobile Unit)', plainText: 'Fidelis Care (Mobile Unit)', link: 'https://www.instagram.com/fideliscare/?hl=en' },
        { name: 'UConnect Behavioral Health', plainText: 'UConnect Behavioral Health', link: 'https://www.facebook.com/uconnectcare' },
        { name: 'Regional Health & Batavia Primary Care', plainText: 'Regional Health & Batavia Primary Care', link: 'https://www.instagram.com/rocregional/' },
        { name: 'PPCWNY', plainText: 'PPCWNY', link: 'https://www.instagram.com/ppcwny/?hl=en' },
        { name: 'RESTORE', plainText: 'RESTORE', link: 'https://www.instagram.com/restoresas' },
        { name: 'YWCA Genesee County', plainText: 'YWCA Genesee County', link: 'https://www.instagram.com/ywcagenesee/' },
        { name: 'Horizon Health Services', plainText: 'Horizon Health Services', link: 'https://www.instagram.com/horizon_health' },
        { name: 'Cancer Services Program', plainText: 'Cancer Services Program', link: 'https://www.rochesterregional.org/services/healthy-living-programs/cancer-services-program' },
        { name: 'Alzheimer\'s Association', plainText: 'Alzheimer\'s Association', link: 'https://www.instagram.com/alzassociation/' },
        { name: 'SUNY Genesee Women & Gender Studies', plainText: 'SUNY Genesee Women & Gender Studies', link: 'https://www.geneseo.edu/wgst' },
      ],
    },
    {
      category: 'Other Vendors / Attractions',
      items: [
        { name: 'Aryya\'s Tavern Yakisobas', plainText: 'Aryya\'s Tavern Yakisobas' },
        { name: 'All Thumbs Plant Nursery', plainText: 'All Thumbs Plant Nursery', link: 'https://www.facebook.com/profile.php?id=61564945813142#' },
        { name: 'It\'s a Bee\'s Knees', plainText: 'It\'s a Bee\'s Knees' },
        { name: 'Culinary Creations', plainText: 'Culinary Creations' },
        { name: 'Pixel Perfect', plainText: 'Pixel Perfect' },
        { name: 'DivasWho Entertainment', plainText: 'DivasWho Entertainment', link: 'https://www.instagram.com/divaswho/' },
        // CORRECTED LINK: Livin W Lyss link was malformed. Removed extra text.
        { name: 'Livin W Lyss', plainText: 'Livin W Lyss', link: 'https://www.instagram.com/livin.w.lyss/' },
        { name: 'Little Red House', plainText: 'Little Red House' },
        { name: 'Pretty Little Edges', plainText: 'Pretty Little Edges', link: 'https://www.instagram.com/pretty_little_edges/?hl=en' },
        { name: 'Sweet Crumbly Chaos', plainText: 'Sweet Crumbly Chaos', link: 'https://www.facebook.com/profile.php?id=61576671210808#' },
        { name: 'Burning Buffalo CO', plainText: 'Burning Buffalo CO' },
        { name: 'Shed for Farmers Market', plainText: 'Shed for Farmers Market' }, // Separate entry as it was on the map, no link provided in doc.
      ],
    },
    {
      category: 'Facilities & Key Locations',
      items: [
        { name: 'Parade Line Up (300 East Main, Batavia)', plainText: 'Parade Line Up (300 East Main, Batavia)' },
        { name: 'Bathroom Station (2)', plainText: 'Bathroom Station (2)', link: 'https://creeksiderentals.com/' },
        { name: 'Glowing Station, First Aid', plainText: 'Glowing Station, First Aid' },
        { name: 'Picnic Table (multiple locations)', plainText: 'Picnic Table (multiple locations)' },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 font-inter text-gray-800"
      style={{
        backgroundImage: 'url(https://i.imgur.com/8bTVLRf.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-4xl bg-opacity-90 backdrop-blur-sm">
        {/* App Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-6 drop-shadow-md">Batavia Pride App</h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6 flex-wrap">
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out m-1 ${
              activeTab === 'vendors'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg border-2 border-yellow-300'
                : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 hover:text-purple-700'
            }`}
            onClick={() => setActiveTab('vendors')}
          >
            Vendor Directory
          </button>
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out m-1 ${
              activeTab === 'schedule'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg border-2 border-yellow-300'
                : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 hover:text-purple-700'
            }`}
            onClick={() => setActiveTab('schedule')}
          >
            Event Schedule
          </button>
          <button
            className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out m-1 ${
              activeTab === 'links'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg border-2 border-yellow-300'
                : 'bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-red-100 hover:via-yellow-100 hover:to-green-100 hover:text-purple-700'
            }`}
            onClick={() => setActiveTab('links')}
          >
            Important Links
          </button>
        </div>

        {/* Vendor Directory Section */}
        {activeTab === 'vendors' && (
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-inner max-h-[70vh] overflow-y-auto border-4 border-yellow-300">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-4 text-center">Vendor Directory</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full p-3 rounded-full border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700 shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {vendorCategories.map((cat, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-purple-700 mb-3 border-b-2 border-pink-300 pb-1">{cat.category}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {cat.items.filter(item => item.plainText.toLowerCase().includes(searchQuery.toLowerCase())).map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-800 bg-white p-2 rounded-lg shadow-sm hover:bg-yellow-50 transition-colors">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                          {item.name}
                        </a>
                      ) : (
                        item.name
                      )}
                    </li>
                  ))}
                  {cat.items.filter(item => item.plainText.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                    <li className="text-center text-gray-600 italic">No vendors found in this category matching your search.</li>
                  )}
                </ul>
              </div>
            ))}
            {vendorCategories.every(cat => cat.items.filter(item => item.plainText.toLowerCase().includes(searchQuery.toLowerCase())).length === 0) && (
              <p className="text-center text-gray-600 italic">No vendors found matching your search across all categories.</p>
            )}
          </div>
        )}


        {/* Schedule Section */}
        {activeTab === 'schedule' && (
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-inner max-h-[70vh] overflow-y-auto border-4 border-yellow-300">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-4 text-center">Event Schedule</h2>
            {/* Search Input for Schedule */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full p-3 rounded-full border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700 shadow-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Display Filtered Schedule */}
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start mb-3 p-3 rounded-xl transition-all duration-200 ease-in-out ${
                    item.time ? 'bg-white shadow-md hover:bg-yellow-50' : 'ml-8 text-gray-600'
                  }`}
                >
                  {item.time && (
                    <div className="min-w-[100px] text-purple-600 font-semibold text-right pr-4 border-r-2 border-pink-300">
                      {item.time}
                    </div>
                  )}
                  <div className="flex-1 pl-4 text-gray-800">
                    {item.event}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 italic">No events match your search.</p>
            )}
          </div>
        )}

        {/* Links Section */}
        {activeTab === 'links' && (
          <div className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-inner max-h-[70vh] overflow-y-auto border-4 border-yellow-300 flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-6 text-center">Important Links</h2>
            <a
              href="https://linktr.ee/GenLivOrlWyoOUT"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-700 to-blue-700 text-white text-xl font-bold rounded-full shadow-lg hover:from-pink-600 hover:via-purple-800 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101M5.07 10.172a4 4 0 115.656 5.656L10.93 16.5M16.93 10.172a4 4 0 11-5.656 5.656L13.07 16.5" />
              </svg>
              Visit Our Linktree
            </a>
            <p className="mt-4 text-gray-600 text-center">Click the button above for more information about Batavia Pride and our community partners!</p>
          </div>
        )}
      </div>

      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Inter font from Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
      {/* Custom styles for animations if needed */}
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default App;
