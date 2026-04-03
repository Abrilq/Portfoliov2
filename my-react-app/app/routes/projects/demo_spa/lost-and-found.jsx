import { useEffect, useState } from "react";
import "./demo_styles/lost-and-found.css";

function DemoApp() {

const [isLoading, setIsLoading] = useState(true);
const [fadeOut, setFadeOut] = useState(false);

// ===== HARDCODED DATA =====
const DEMO_LOST_ITEMS = [
    {
      id: 1,
      item: "Blue Backpack",
      found_location: "Library 2nd Floor",
      returned_by: "John Smith",
      role: "faculty",
      id_type: "Employee ID",
      id_number: "EMP-2024-001",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 2,
      item: "Silver Laptop",
      found_location: "Cafeteria",
      returned_by: "Maria Garcia",
      role: "staff",
      id_type: "Staff Badge",
      id_number: "STAFF-5432",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 3,
      item: "Reading Glasses",
      found_location: "Auditorium Seat 42",
      returned_by: "James Wilson",
      role: "faculty",
      id_type: "Faculty Card",
      id_number: "FAC-1089",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 4,
      item: "Brown Leather Wallet",
      found_location: "Parking Lot A",
      returned_by: "Sarah Chen",
      role: "guard",
      id_type: "Security Pass",
      id_number: "SEC-7745",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 5,
      item: "Red USB Drive",
      found_location: "Computer Lab",
      returned_by: "Michael Johnson",
      role: "faculty",
      id_type: "Faculty Card",
      id_number: "FAC-2034",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 6,
      item: "AirPods Pro",
      found_location: "Student Lounge",
      returned_by: "Emma Davis",
      role: "staff",
      id_type: "Staff Badge",
      id_number: "STAFF-1123",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 7,
      item: "Black Umbrella",
      found_location: "Main Entrance",
      returned_by: "Robert Martinez",
      role: "guard",
      id_type: "Security Pass",
      id_number: "SEC-4421",
      status: "lost",
      image: null,
      image_name: null
    },
    {
      id: 8,
      item: "College Textbook Set",
      found_location: "Building B Conference Room",
      returned_by: "Linda Anderson",
      role: "faculty",
      id_type: "Faculty Card",
      id_number: "FAC-5678",
      status: "lost",
      image: null,
      image_name: null
    }
  ];

  const DEMO_CLAIMED_ITEMS = [
    {
      id: 101,
      item: "iPhone 14",
      found_location: "Gym Storage",
      returned_by: "Alex Thompson",
      role: "guard",
      status: "claimed",
      owner_name: "Jessica Brown",
      owner_role: "student",
      owner_id_type: "Student ID",
      owner_id_number: "STU-2024-456",
      image: null,
      image_name: null
    },
    {
      id: 102,
      item: "White Headphones",
      found_location: "Locker Room",
      returned_by: "David Lee",
      role: "staff",
      status: "claimed",
      owner_name: "Thomas Weber",
      owner_role: "faculty",
      owner_id_type: "Faculty Card",
      owner_id_number: "FAC-3021",
      image: null,
      image_name: null
    },
    {
      id: 103,
      item: "Green Water Bottle",
      found_location: "Sports Court",
      returned_by: "Patricia King",
      role: "faculty",
      status: "claimed",
      owner_name: "Rebecca Hayes",
      owner_role: "student",
      owner_id_type: "Student ID",
      owner_id_number: "STU-2024-789",
      image: null,
      image_name: null
    },
    {
      id: 104,
      item: "Gold Watch",
      found_location: "Office Building 3",
      returned_by: "Christopher Moore",
      role: "guard",
      status: "claimed",
      owner_name: "Angela White",
      owner_role: "faculty",
      owner_id_type: "Faculty Card",
      owner_id_number: "FAC-4156",
      image: null,
      image_name: null
    }
  ];

  const userDialogues = [
    "- Where Keys Vanish and Return… Eventually -",
    "- A Realm of Lost Treasures and Mildly Confused Socks -",
    "- Built on Forgotten Things and Questionable Magic -",
    "- Where the Misplaced Become Legendary -",
    "- Governed by Overlords, Powered by Sticky Notes -",
    "- A Land of Scrolls, Spells, and Sunglasses from 2008 -",
    "- United Under the Banner of 'Wait, Where'd It Go?' -",
    "- Realm of the Found, the Forgotten, and the 'Oh That's Mine!' -",
    "- The Magical Bureaucracy of Misplaced Marvels -",
    "- Where Legends Are Made of Lost ID Cards -"
  ];

  // ===== ALL STATE DECLARATIONS (BEFORE loading check) =====
  const [lostItems, setLostItems] = useState(DEMO_LOST_ITEMS);
  const [claimedItems, setClaimedItems] = useState(DEMO_CLAIMED_ITEMS);
  const [showClaimedItems, setShowClaimedItems] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  // ===== LOADING EFFECT =====
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 600);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // ===== OTHER MODALS STATE =====
  const [isViewOwnerModalOpen, setIsViewOwnerModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);
  const [isFullDetailsModalOpen, setIsFullDetailsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageItem, setSelectedImageItem] = useState(null);

  // ===== OTHER EFFECTS =====
  useEffect(() => {
    const interval = setInterval(() => {
      // ... rest of your effects
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ===== NOW CHECK LOADING STATE AFTER ALL HOOKS =====
  if (isLoading) {
    return (
      <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading Kingdom of Losttopia...</p>
        </div>
      </div>
    );
  }

  // ===== REST OF YOUR CODE =====
  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Sort functionality
  function sortData(items, key, direction) {
    return items.sort((a, b) => {
      if (!a[key] && !b[key]) return 0;
      if (!a[key]) return 1;
      if (!b[key]) return -1;

      const aVal = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const bVal = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Handle sort column click
  function handleSort(key) {
    setSortConfig(prevConfig => {
      const direction = prevConfig.key === key 
        ? (prevConfig.direction === "desc" ? "asc" : "desc") 
        : "desc";
      
      if (showClaimedItems) {
        setClaimedItems(prev => sortData([...prev], key, direction));
      } else {
        setLostItems(prev => sortData([...prev], key, direction));
      }
      
      return { key, direction };
    });
  }

  // Filter data based on search term
  function filterData(items) {
    if (!searchTerm) return items;
    
    const searchableFields = showClaimedItems 
      ? ['id', 'item', 'found_location', 'returned_by', 'owner_name', 'owner_role', 'status']
      : ['id', 'item', 'found_location', 'returned_by', 'role', 'id_type', 'id_number', 'status'];
    
    return items.filter(item => {
      return searchableFields.some(field => 
        item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  // Refresh table
  function refreshTable() {
    // In demo, this just re-renders. In real app, it would fetch from API
    if (showClaimedItems) {
      setClaimedItems([...DEMO_CLAIMED_ITEMS]);
    } else {
      setLostItems([...DEMO_LOST_ITEMS]);
    }
  }

  // Handle view owner modal
  function handleViewOwner(item) {
    setSelectedOwner({
      name: item.owner_name,
      role: item.owner_role,
      idType: item.owner_id_type,
      idNumber: item.owner_id_number
    });
    setIsViewOwnerModalOpen(true);
  }

  // Handle view full details
  function handleFullDetails(item) {
    setSelectedItem(item);
    setIsFullDetailsModalOpen(true);
  }

  // Handle view image
  const handleViewImage = (item) => {
    setSelectedImageItem(item);
    setIsImageModalOpen(true);
  };

  // Render lost items or claimed items based on tab
  const displayedItems = showClaimedItems 
    ? filterData(claimedItems).filter((item) => item.status === "claimed")
    : filterData(lostItems).filter((item) => item.status === "lost");

  return (
    <div className="container center-container">
      <h1 className="title-h1">
        Kingdom of Losttopia{" "}
        <span className={`rotating-dialogue${fade ? " fade-in" : " fade-out"}`}>
          {userDialogues[dialogueIndex]}
        </span>
      </h1>

      {/* Theme Toggle */}
      <div className="switch-div">
        <label className="switch">
          <input 
            id="input" 
            type="checkbox" 
            checked={darkTheme}
            onChange={toggleTheme}
          />
          <div className="slider round">
            <div className="sun-moon">
              <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
            </div>
            <div className="stars">
              <svg id="star-1" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-2" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-3" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
              <svg id="star-4" className="star" viewBox="0 0 20 20">
                <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
              </svg>
            </div>
          </div>
        </label>
      </div>

      <div className="p-container">
        <p>Peer into the</p>
        <span className="span-container">vault of misplacements</span>
        <p>and</p>
        <span className="span-container">heroic recoveries.</span> 
      </div>
      
      {/* Tab Buttons */}
      <div className="small-container">
        <button 
          className={`category-btn ${!showClaimedItems ? 'active' : ''}`}          
          onClick={() => setShowClaimedItems(false)}
        >
          <div className="category-text">LOST ITEMS ({lostItems.length})</div>
        </button>
        <button 
          className={`category-btn ${showClaimedItems ? 'active' : ''}`}          
          onClick={() => setShowClaimedItems(true)}
        >
          <div className="category-text">CLAIMED ITEMS ({claimedItems.length})</div>
        </button>
      </div>

      {/* Search & Clear */}
      <div className="small-container" style={{gap:'0px'}}>
        <input
          className="search"
          placeholder="Search items, locations, owners..." 
          type="text" 
          name="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSearchTerm("")} className="clear-btn">Clear</button>
      </div>
      
      {/* Refresh Button */}
      <button type="button" className="refresh-btn" onClick={refreshTable}>
        <span className="refresh-btn__text">Refresh</span>
        <span className="refresh-btn__icon">
          <svg className="svg" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"></path>
            <path d="M0 0h48v48h-48z" fill="none"></path>
          </svg>
        </span>
      </button>

      {/* Items Table */}
      <table border="1">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>
              ID {sortConfig.key === "id" && (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("item")}>
              Item {sortConfig.key === "item" && (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th>Image</th>
            <th onClick={() => handleSort("found_location")}>
              Found Location {sortConfig.key === "found_location" && (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("status")}>
              Status {sortConfig.key === "status" && (sortConfig.direction === "asc" ? "▲" : "▼")}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.item}</td>
                <td>
                  {item.image ? (
                    <button 
                      onClick={() => handleViewImage(item)}
                      className="view-image-btn"
                    >
                      View Image
                    </button>
                  ) : (
                    <span style={{ color: '#999' }}>No image</span>
                  )}
                </td>
                <td>{item.found_location}</td>
                <td>
                  <span style={item.status === 'claimed' ? { color: '#4caf50' } : { color: '#ff9800' }}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleFullDetails(item)} style={{backgroundColor:"rgb(95, 172, 255)"}}>
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                No items found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Owner Details Modal */}
      {isViewOwnerModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Owner Details</h2>
            <p><strong>Name:</strong> {selectedOwner.name}</p>
            <p><strong>Role:</strong> {selectedOwner.role}</p>
            <p><strong>ID Type:</strong> {selectedOwner.idType}</p>
            <p><strong>ID Number:</strong> {selectedOwner.idNumber}</p>
            <button onClick={() => setIsViewOwnerModalOpen(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Full Details Modal */}
      {isFullDetailsModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <h2>Item Full Details</h2>
            {selectedItem.image && (
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img 
                  src={`data:image/jpeg;base64,${selectedItem.image}`}
                  alt={selectedItem.item}
                  style={{ maxWidth: '300px', maxHeight: '300px' }}
                />
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div><strong>ID:</strong> {selectedItem.id}</div>
              <div><strong>Item:</strong> {selectedItem.item}</div>
              <div><strong>Found Location:</strong> {selectedItem.found_location}</div>
              <div><strong>Status:</strong> {selectedItem.status}</div>
              <div><strong>Returned By:</strong> {selectedItem.returned_by || '-'}</div>
              <div><strong>Role:</strong> {selectedItem.role || '-'}</div>
              <div><strong>ID Type:</strong> {selectedItem.id_type || '-'}</div>
              <div><strong>ID Number:</strong> {selectedItem.id_number || '-'}</div>
              {selectedItem.owner_name && (
                <>
                  <div><strong>Owner Name:</strong> {selectedItem.owner_name}</div>
                  <div><strong>Owner Role:</strong> {selectedItem.owner_role}</div>
                  <div><strong>Owner ID Type:</strong> {selectedItem.owner_id_type}</div>
                  <div><strong>Owner ID Number:</strong> {selectedItem.owner_id_number}</div>
                  <button 
                    onClick={() => {
                      handleViewOwner(selectedItem);
                      setIsFullDetailsModalOpen(false);
                    }} 
                    style={{marginTop: '10px', backgroundColor:"rgb(100, 200, 100)"}}
                  >
                    View Owner Details
                  </button>
                </>
              )}
            </div>
            <button onClick={() => setIsFullDetailsModalOpen(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && selectedImageItem && (
        <div className="modal">
          <div className="modal-content">
            <div style={{ marginBottom: '20px' }}>
              <h3>Item Image</h3>
              <p><strong>ID:</strong> {selectedImageItem.id}</p>
              <p><strong>Item:</strong> {selectedImageItem.item}</p>
            </div>
            <div className="image-container" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              marginBottom: '20px',
              maxHeight: '70vh',
              overflow: 'auto'
            }}>
              {selectedImageItem.image ? (
                <img 
                  src={`data:image/jpeg;base64,${selectedImageItem.image}`}
                  alt={selectedImageItem.item}
                  className="item-image"
                  style={{ maxWidth: '100%', objectFit: 'contain' }}
                />
              ) : (
                <p>No image available for this item</p>
              )}
            </div>
            <button onClick={() => setIsImageModalOpen(false)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DemoApp;