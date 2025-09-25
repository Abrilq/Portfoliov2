interface GalleryImage {
  image: string;
  text: string;
}

interface ProjectConfig {
  cardImages: string[];
  galleryImages?: GalleryImage[]; // Optional gallery images
  // You can add more project-specific configuration here later
}

interface ProjectsConfig {
  [key: string]: ProjectConfig;
}

export const projectsConfig: ProjectsConfig = {
  lostAndFound: {
    cardImages: [
      "/images/heroes/admin.png",
      "/images/heroes/lnf.PNG",
      "/images/heroes/faculty.png",
      "/images/heroes/student.png",
      "/images/mobile/lnf.PNG"
    ],
    galleryImages: [
      {
        image: "/images/heroes/admin.png",
        text: "Admin Dashboard",
      },
      {
        image: "/images/heroes/lnf.PNG",
        text: "Login Page",
      },
      {
        image: "/images/heroes/faculty.png",
        text: "Faculty Interface",
      },
      {
        image: "/images/heroes/student.png",
        text: "Student Portal",
      },
      {
        image: "/images/mobile/lnf.PNG",
        text: "Lost and Found Webapp Logo",
      }
    ],
  },
  preAdvising: {
    cardImages: [
      "/images/mobile/dycguide.PNG",
      "/images/heroes/pre-advising/adminhomepage.png",
      "/images/heroes/pre-advising/login.png",
      "/images/heroes/pre-advising/signup.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/dycguide.PNG",
        text: "DYC-GUIDE Logo",
      },
      {
        image: "/images/heroes/pre-advising/adminhomepage.png",
        text: "Admin Homepage",
      },
      {
        image: "/images/heroes/pre-advising/login.png",
        text: "Login Page",
      },
      {
        image: "/images/heroes/pre-advising/signup.png",
        text: "Sign Up Page",
      }
    ],
  },
  catpeas: {
    cardImages: [
      "/images/heroes/catpeas/homepage.png",
      "/images/mobile/catpeas.PNG",
      "/images/heroes/catpeas/login.png",
      "/images/heroes/catpeas/products1.png",
      "/images/heroes/catpeas/sunglasses.png",
      "/images/heroes/catpeas/footers.png",
    ],
    galleryImages: [
      {
        image: "/images/heroes/catpeas/homepage2.png",
        text: "Hero Section",
      },
      {
        image: "/images/heroes/catpeas/homepage1.png",
        text: "Hero Section",
      },
      {
        image: "/images/mobile/catpeas.PNG",
        text: "Cat'Peas Logo",
      },
      {
        image: "/images/heroes/catpeas/login.png",
        text: "Login Page",
      },
      {
        image: "/images/heroes/catpeas/products2.png",
        text: "Home Page",
      },
      {
        image: "/images/heroes/catpeas/map1.png",
        text: "Contact Page",
      },
      {
        image: "/images/heroes/catpeas/map2.png",
        text: "Contact Page",
      },
      {
        image: "/images/heroes/catpeas/footers1.png",
        text: "Footers",
      },
      {
        image: "/images/heroes/catpeas/footers2.png",
        text: "Footers",
      }
    ],
  },
  damath: {
    cardImages: [
      "/images/mobile/damath.PNG",
      "/images/heroes/damath/home.jpg",
      "/images/heroes/damath/rules.jpg",
      "/images/heroes/damath/normal.jpg",
      "/images/heroes/damath/halloween.jpg",
      "/images/heroes/damath/christmas.jpg",
    ],
    galleryImages: [
      {
        image: "/images/mobile/damath.PNG",
        text: "Damath Logo",
      },
      {
        image: "/images/heroes/damath/home.jpg",
        text: "Main Menu",
      },
      {
        image: "/images/heroes/damath/rules.jpg",
        text: "Rules",
      },
      {
        image: "/images/heroes/damath/normal.jpg",
        text: "Normal Theme",
      },
      {
        image: "/images/heroes/damath/halloween.jpg",
        text: "Halloween Theme",
      },
      {
        image: "/images/heroes/damath/christmas.jpg",
        text: "Christmas Theme",
      }
    ],
  },
  evoar: {
    cardImages: [
      "/images/mobile/evoar.PNG",
      "/images/heroes/evoar/intro.jpg",
      "/images/heroes/evoar/abacus.jpg",
      "/images/heroes/evoar/bones.jpg",
      "/images/heroes/evoar/calc.jpg",
      "/images/heroes/evoar/computer.jpg",
      "/images/heroes/evoar/pascal.jpg",
      "/images/heroes/evoar/tube.jpg",
    ],
    galleryImages: [
      {
        image: "/images/mobile/evoar.PNG",
        text: "Computer Evolution Logo",
      },
      {
        image: "/images/heroes/evoar/intro.jpg",
        text: "Unity",
      },
      {
        image: "/images/heroes/evoar/abacus.jpg",
        text: "Abacus",
      },
      {
        image: "/images/heroes/evoar/bones.jpg",
        text: "Napier's Bones",
      },
      {
        image: "/images/heroes/evoar/calc.jpg",
        text: "Leibniz Calculator",
      },
      {
        image: "/images/heroes/evoar/computer.jpg",
        text: "5th Gen Computer",
      },
      {
        image: "/images/heroes/evoar/pascal.jpg",
        text: "Pascal's Calculator",
      },
      {
        image: "/images/heroes/evoar/tube.jpg",
        text: "Vacuum Tube",
      },
    ],
  },
  orderingsystem: {
    cardImages: [
      "/images/mobile/orderingsystem.PNG",
      "/images/ordering/hk_delete_food_stocks.png",
      "/images/ordering/hk_stocks_main_form.png",
      "/images/ordering/user_bev_order_history.png",
      "/images/ordering/user_food_stalls.png",
      "/images/ordering/user_food_stalls2.png",
      "/images/ordering/vendor_user_change_pass.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/orderingsystem.PNG",
        text: "Ordering System Logo",
      },
      {
        image: "/images/ordering/hk_delete_food_stocks.png",
        text: "Food Stocks Page",
      },
      {
        image: "/images/ordering/hk_stocks_main_form.png",
        text: "Main Form Page",
      },
      {
        image: "/images/ordering/user_bev_order_history.png",
        text: "Order History Page",
      },
      {
        image: "/images/ordering/user_food_stalls.png",
        text: "Food Stalls Page",
      },
      {
        image: "/images/ordering/user_food_stalls2.png",
        text: "Food Stalls Page",
      },
      {
        image: "/images/ordering/vendor_user_change_pass.png",
        text: "Vendor Change Password Page",
      },
    ],
  },
  drinkingsession: {
    cardImages: [
      "/images/mobile/drinking.PNG",
      "/images/heroes/drinking/homepage.png",
      "/images/heroes/drinking/homepage1.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/drinking.PNG",
        text: "Logo",
      },
      {
        image: "/images/heroes/drinking/homepage.png",
        text: "Main Page",
      },
      {
        image: "/images/heroes/drinking/homepage1.png",
        text: "Main Page",
      }
    ],
  },
  srt: {
    cardImages: [
      "/images/mobile/srt.PNG",
      "/images/heroes/srt/main.png",
      "/images/heroes/srt/main1.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/srt.PNG",
        text: "Logo",
      },
      {
        image: "/images/heroes/srt/main.png",
        text: "Main Page",
      },
      {
        image: "/images/heroes/srt/main1.png",
        text: "Main Page",
      },
    ],
  }, 
  // Add more projects as needed
};