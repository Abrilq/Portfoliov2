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
        text: "Logo",
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
        text: "DYC-GUIDE",
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
        text: "Logo",
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
      "/images/mobile/dycguide.PNG",
      "/images/heroes/pre-advising/adminhomepage.png",
      "/images/heroes/pre-advising/login.png",
      "/images/heroes/pre-advising/signup.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/dycguide.PNG",
        text: "DYC-GUIDE",
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
  evoar: {
    cardImages: [
      "/images/mobile/dycguide.PNG",
      "/images/heroes/pre-advising/adminhomepage.png",
      "/images/heroes/pre-advising/login.png",
      "/images/heroes/pre-advising/signup.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/dycguide.PNG",
        text: "DYC-GUIDE",
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
  orderingsystem: {
    cardImages: [
      "/images/mobile/dycguide.PNG",
      "/images/heroes/pre-advising/adminhomepage.png",
      "/images/heroes/pre-advising/login.png",
      "/images/heroes/pre-advising/signup.png",
    ],
    galleryImages: [
      {
        image: "/images/mobile/dycguide.PNG",
        text: "DYC-GUIDE",
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