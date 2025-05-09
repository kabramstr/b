export type NavItem = {
  title: string;
  href: string;
};

export type Facility = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ageRange: string;
};

export type OpeningHours = {
  day: string;
  hours: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  alt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  role: string;
};