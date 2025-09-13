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
      "/images/heroes/lnf.png",
      "/images/heroes/faculty.png",
      "/images/heroes/student.png",
    ],
    galleryImages: [
      {
        image: "/images/heroes/admin.png",
        text: "Admin Dashboard",
      },
      {
        image: "/images/heroes/lnf.png",
        text: "Lost & Found System",
      },
      {
        image: "/images/heroes/faculty.png",
        text: "Faculty Interface",
      },
      {
        image: "/images/heroes/student.png",
        text: "Student Portal",
      },
    ],
  },
  // You can add more projects here
  // example: {
  //   cardImages: [
  //     "/images/heroes/example1.png",
  //     "/images/heroes/example2.png",
  //   ],
  // },
};