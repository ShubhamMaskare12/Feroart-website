export interface Project {
  id: string
  name: string
  category: string
  image: string
  description: string
  location: string
  year: string
}

export const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'We Turn Spaces Into Homes',
    subtitle: 'Bespoke luxury interiors crafted with precision and passion',
  },
  {
    image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'From Concept To Completion',
    subtitle: 'A seamless design experience, from vision to reality',
  },
  {
    image: 'https://images.pexels.com/photos/33529500/pexels-photo-33529500.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Effortless Design Experience',
    subtitle: 'Three decades of artistry in every detail',
  },
]

export const welcomeImages = [
  'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=800',
]

export const aboutImage = 'https://images.pexels.com/photos/8082312/pexels-photo-8082312.jpeg?auto=compress&cs=tinysrgb&w=1200'

export const projects: Project[] = [
  {
    id: 'anandvan',
    name: 'Anandvan',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/30002783/pexels-photo-30002783.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A serene retreat where marble elegance meets contemporary living, featuring expansive entertaining spaces and intimate corners.',
    location: 'Nagpur, Maharashtra',
    year: '2023',
  },
  {
    id: 'luxury-sky-villa',
    name: 'Luxury Sky Villa',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'An elevated sanctuary blending panoramic views with bespoke interiors, where every surface reflects refined craftsmanship.',
    location: 'Pune, Maharashtra',
    year: '2023',
  },
  {
    id: 'luxury-farmhouse',
    name: 'Luxury Farmhouse',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A countryside estate where rustic charm meets modern luxury, surrounded by lush greenery and timeless architecture.',
    location: 'Nagpur outskirts',
    year: '2022',
  },
  {
    id: 'whistling-wind',
    name: 'Whistling Wind',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/34538288/pexels-photo-34538288.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A light-filled residence where airy minimalism meets warm textures, designed for effortless modern living.',
    location: 'Mumbai, Maharashtra',
    year: '2022',
  },
  {
    id: 'casa-piccolo',
    name: 'Casa Piccolo',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A compact luxury apartment proving that grandeur knows no square footage, with intelligent space planning and rich detailing.',
    location: 'Nagpur, Maharashtra',
    year: '2021',
  },
  {
    id: 'lotus-bloom',
    name: 'Lotus Bloom',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/8092437/pexels-photo-8092437.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'An elegant two-story home where sculptural staircases and bespoke lighting create a sense of poetic movement.',
    location: 'Nagpur, Maharashtra',
    year: '2021',
  },
  {
    id: 'artisanal-house',
    name: 'Artisanal House',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/35203563/pexels-photo-35203563.jpeg?auto=compress&cs=tinysrgb&w=900',
    description: 'A celebration of handcrafted details and artisanal textures, where every element tells a story of skilled craftsmanship.',
    location: 'Nagpur, Maharashtra',
    year: '2020',
  },
]

export const services = [
  {
    title: 'Conceptualization & Design',
    description: 'We begin by understanding your vision, translating aspirations into detailed design concepts that capture your unique style.',
    icon: 'concept',
  },
  {
    title: 'Material Selection',
    description: 'Curated selections of premium materials — from Italian marble to bespoke furnishings — sourced from the finest global suppliers.',
    icon: 'material',
  },
  {
    title: 'In-House Manufacturing',
    description: 'Our state-of-the-art manufacturing facility ensures precision craftsmanship and quality control at every stage of production.',
    icon: 'manufacturing',
  },
  {
    title: 'Execution & Turnkey Delivery',
    description: 'From start to finish, we manage every aspect of execution, delivering a finished space that is ready to inhabit — completely worry-free.',
    icon: 'execution',
  },
]

export const stats = [
  { value: '1995', label: 'Established' },
  { value: '2000+', label: 'Projects Completed' },
  { value: '30', label: 'Years of Expertise' },
  { value: '10,000', label: 'Sq.Ft. Experience Centre' },
]

export const pressItems = [
  {
    image: 'https://images.pexels.com/photos/6434592/pexels-photo-6434592.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'India Design Award 2023',
    description: 'Recognized for excellence in luxury interior design, Ferroart was honored with the prestigious India Design Award.',
    source: 'India Design Awards',
  },
  {
    image: 'https://images.pexels.com/photos/8135505/pexels-photo-8135505.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Featured in Architectural Digest',
    description: 'Our award-winning projects have been showcased in Architectural Digest, highlighting our commitment to innovative design.',
    source: 'Architectural Digest',
  },
  {
    image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Best Turnkey Interior Designer 2021',
    description: 'Awarded by the Times of India Group for delivering comprehensive turnkey solutions with unmatched quality.',
    source: 'Times of India Group',
  },
  {
    image: 'https://images.pexels.com/photos/35189709/pexels-photo-35189709.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Featured in Home & Design Trends',
    description: 'Our project was featured in the September 2021 issue of the leading national interior magazine "Home & Design — Trends".',
    source: 'Home & Design Trends',
  },
]

export const contactInfo = {
  phones: ['+91 9823087500', '+91 8605010847 / 48'],
  email: 'ferro_art@yahoo.com',
  address: 'D-27, Central MIDC, Nagpur - 440016',
}
