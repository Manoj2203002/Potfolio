// Single source of truth for portfolio content.
// Mirrors the master resume — update here and every section follows.

export const profile = {
  name: 'Manoj Kumaresan',
  firstName: 'Manoj',
  title: 'Full Stack Developer',
  stack: '.NET · Angular · Python',
  roles: [
    'Full Stack Developer',
    '.NET Backend Developer',
    'Angular Front-end Developer',
    'AI-Assisted Builder',
  ],
  location: 'Salem, Tamil Nadu, India',
  email: 'manoj220302@gmail.com',
  phone: '+91 93630 74799',
  phoneHref: 'tel:+919363074799',
  github: 'https://github.com/Manoj2203002',
  linkedin: 'https://www.linkedin.com/in/manoj-kumaresan-759733305',
  resume: `${import.meta.env.BASE_URL}ManojResume.pdf`,
  summary:
    'Full Stack Developer building production web applications with .NET, Angular and Python FastAPI. I deliver enterprise dashboard redesigns, RESTful API integrations and backend features such as AWS S3 storage and AWS SES email delivery.',
  about: [
    'I work directly with the CTO and clients at Tecsack Software to turn business requirements into scalable, user-friendly features — from the database all the way to the pixel.',
    'I use AI tools like Claude Code and prompt engineering to move faster on development, migration and documentation, while still reviewing and testing every line that ships.',
  ],
};

export const stats = [
  { value: 1.5, suffix: '+', decimals: 1, label: 'Years building production apps' },
  { value: 4, suffix: '', decimals: 0, label: 'Client & live projects shipped' },
  { value: 3, suffix: '', decimals: 0, label: 'Professional certifications' },
  { value: 20, suffix: '+', decimals: 0, label: 'Tools & technologies' },
];

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    items: [
      'C#', '.NET Core', 'ASP.NET Core Web API', 'ASP.NET MVC',
      'Entity Framework Core', 'Python', 'FastAPI', 'Dependency Injection',
      'JWT Authentication', 'RESTful API Design', 'CORS Handling',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'code',
    items: [
      'Angular', 'RxJS', 'Angular Material', 'TypeScript', 'JavaScript',
      'HTML5', 'CSS3', 'Responsive UI/UX Design',
    ],
  },
  {
    id: 'data',
    title: 'Databases',
    icon: 'database',
    items: ['Microsoft SQL Server', 'MySQL', 'PostgreSQL', 'Oracle'],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    icon: 'cloud',
    items: [
      'AWS S3', 'AWS SES', 'Git', 'Postman', 'Visual Studio',
      'VS Code', 'IntelliJ IDEA', 'Eclipse IDE', 'Agile / Scrum',
    ],
  },
  {
    id: 'ai',
    title: 'AI Tools',
    icon: 'robot',
    items: [
      'Claude Code', 'Claude Skills (custom agent workflows)',
      'Prompt Engineering', 'AI-Assisted Development',
    ],
  },
  {
    id: 'lang',
    title: 'Also fluent in',
    icon: 'layers',
    items: ['C', 'C++'],
  },
];

// Logos that scroll in the marquee
export const marquee = [
  'dotnet', 'csharp', 'angular', 'typescript', 'javascript', 'python',
  'fastapi', 'rxjs', 'sqlserver', 'mysql', 'postgresql', 'oracle',
  'aws', 'git', 'postman', 'jwt', 'claude', 'html', 'css',
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Tecsack Software Private Limited',
    location: 'Salem, Tamil Nadu',
    period: 'Aug 2025 – Present',
    type: 'Full-time',
    points: [
      'Build and maintain full-stack web applications with .NET, Angular, ASP.NET MVC and Python FastAPI across client, in-house and live production projects.',
      'Migrated a legacy VB application to C# using Claude Code, reviewing and testing the converted code.',
      'Redesigned a client-supplied Framer website template into a fully custom design.',
      'Work directly with the CTO and clients to turn business requirements into working, scalable features.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Tecsack Software Private Limited',
    location: 'Salem, Tamil Nadu',
    period: 'Jun 2025 – Jul 2025',
    type: 'Internship',
    points: [
      'Joined the product team and shipped features on .NET and Angular projects from the first month.',
      'Converted to a full-time role after the internship.',
    ],
  },
];

export const projects = [
  {
    name: 'Plexo Sales Portal',
    tagline: 'Employee training platform',
    tags: ['Angular', '.NET', 'Role-based access', 'AI-assisted'],
    accent: 'violet',
    highlight: 'Main developer — full stack',
    points: [
      'Built the complete front end and back end of a platform where sales reps take quizzes and study training documents and YouTube videos.',
      'Role-based access with Admin and Rep roles; admins configure all material and track every rep’s records and progress.',
      'Used AI-assisted development (Claude) to speed up delivery of the full application.',
    ],
  },
  {
    name: 'Synergy Travel',
    tagline: 'Offers & booking CRM',
    tags: ['Angular', '.NET', 'QR', 'Proxy API'],
    accent: 'cyan',
    highlight: 'Embedded in a mobile app',
    points: [
      'Built the full Angular UI, embedded in the client’s mobile app through an iframe.',
      'Offer browsing with API-driven category filters, and coupon redemption by print or QR scan.',
      'Built a .NET proxy layer to fix the CORS errors blocking the client’s APIs.',
    ],
  },
  {
    name: 'Prime Inspect',
    tagline: 'In-house inspection product',
    tags: ['Angular', '.NET', 'AWS SES', 'AWS S3'],
    accent: 'amber',
    highlight: 'Notifications end to end',
    points: [
      'Built the scheduler screen and redesigned core UI pages to CTO specifications.',
      'Developed the notification system end to end, in both the Angular UI and the .NET back end.',
      'Integrated AWS SES for automated emails and AWS S3 for user-uploaded images.',
    ],
  },
  {
    name: 'Picom365',
    tagline: 'Healthcare radiology dashboard — live',
    tags: ['ASP.NET MVC', 'JavaScript', 'Live product'],
    accent: 'emerald',
    highlight: 'Used by hospitals',
    points: [
      'Reworked the entire dashboard UI of a live radiology workflow platform used by hospitals and physician practices, including the patient-search landing page.',
      'Added data reload, resizable table columns and controlled data display from the database to the UI.',
    ],
  },
];

export const certifications = [
  { name: 'React.js Development', issuer: 'Besant Technology', year: '2025' },
  { name: 'Full Stack Development', issuer: 'Besant Technology', year: '2025' },
  { name: 'PostgreSQL Database', issuer: 'Simplilearn', year: '2024' },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Bishop Heber College, Trichy',
    period: '2022 – 2024',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Loyola College, Mettala',
    period: '2019 – 2022',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];
