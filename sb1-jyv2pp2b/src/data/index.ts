import { Facility, GalleryImage, NavItem, OpeningHours, Testimonial } from '../types';

export const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Facilities', href: '/facilities' },
  { title: 'Visit', href: '/visit' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Contact', href: '/contact' },
  { title: 'Donate', href: '/donate' },
];

export const facilities: Facility[] = [
  {
    id: '1',
    name: 'Adventure Playground',
    description: 'A multi-level wooden structure with slides, climbing walls, and bridges for endless exploration.',
    imageUrl: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: '5-12 years',
  },
  {
    id: '2',
    name: 'Toddler Area',
    description: 'A safe, enclosed space designed for our youngest visitors with soft surfaces and age-appropriate play equipment.',
    imageUrl: 'https://images.pexels.com/photos/3933022/pexels-photo-3933022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: '0-4 years',
  },
  {
    id: '3',
    name: 'Nature Trail',
    description: 'A winding path through native plants and trees with educational signs about local wildlife and ecology.',
    imageUrl: 'https://images.pexels.com/photos/3876417/pexels-photo-3876417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: 'All ages',
  },
  {
    id: '4',
    name: 'Water Play Zone',
    description: 'Interactive water features and splash pads for cooling off on warm days (seasonal operation).',
    imageUrl: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: '3+ years',
  },
  {
    id: '5',
    name: 'Picnic Area',
    description: 'Shaded tables and benches perfect for family gatherings, birthday parties, and outdoor meals.',
    imageUrl: 'https://images.pexels.com/photos/7407333/pexels-photo-7407333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: 'All ages',
  },
  {
    id: '6',
    name: 'Sports Field',
    description: 'Open grassy area for ball games, frisbee, and other active play with friends and family.',
    imageUrl: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ageRange: '6+ years',
  },
];

export const openingHours: OpeningHours[] = [
  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Public Holidays', hours: '10:00 AM - 5:00 PM' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/2168174/pexels-photo-2168174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Children playing on swings in the playground',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Colorful playground slide',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/156348/pexels-photo-156348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Family picnic near playground',
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Children playing in sandbox',
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/191034/pexels-photo-191034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Playground equipment at sunset',
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/729679/pexels-photo-729679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Adventure playground climbing structure',
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/5693658/pexels-photo-5693658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Child going down a slide',
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/8090458/pexels-photo-8090458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Children playing in nature area',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    text: 'My kids absolutely love this playground! The different areas cater to both my toddler and older child, keeping them engaged for hours. The nature trail is our favorite spot.',
    role: 'Parent of two',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    text: 'As a teacher, I appreciate how the playground incorporates educational elements into the fun. We bring our school groups here regularly, and the staff is always helpful.',
    role: 'Local educator',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    text: 'The inclusive design of this playground means my child with mobility challenges can play alongside friends. The accessible pathways and adaptive equipment make all the difference.',
    role: 'Community advocate',
  },
];