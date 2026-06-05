export const profile = {
  name: 'Mohamed Hassan',
  title: 'Telecom Engineer | Automation Developer | Front-End Developer',
  location: 'Egypt',
  phone: '+201008130476',
  email: 'mohamedhassan.codeflow@gmail.com',
  github: 'https://github.com/MohamedHassan-codeflow',
  linkedin: 'https://www.linkedin.com/in/mohamed-hassan-733b36406/',
  portfolio: 'https://github.com/MohamedHassan-codeflow',
  cv: '/Mohamed_Hassan_CV.pdf',
  summary:
    'Electrical and Communication Engineer with 12+ years of telecom experience across Ericsson, 5G, RAN, TRM, network operations, and technical support. Skilled in Python, JavaScript, VBA, React.js, Power BI, and automation tools, with proven ability to reduce manual effort, improve reporting accuracy, and build responsive web applications.'
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
]

export const highlights = [
  { value: '12+', label: 'Years Telecom Experience' },
  { value: '5+', label: 'Responsive Web Projects' },
  { value: '90%+', label: 'Manual Effort Reduced' },
  { value: '<2 min', label: 'Script Generation Time' }
]

export const skills = [
  {
    category: 'Front-End Development',
    icon: 'bi-code-slash',
    items: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Responsive Design']
  },
  {
    category: 'Automation & Programming',
    icon: 'bi-cpu',
    items: ['Python Automation', 'VBA Automation', 'JavaScript Tools', 'Excel Automation', 'Prompt Engineering']
  },
  {
    category: 'Data & Analytics',
    icon: 'bi-bar-chart-line',
    items: ['Advanced Excel', 'Power BI', 'SQL Basics', 'Tableau', 'Dashboards', 'Reporting']
  },
  {
    category: 'Telecom & Operations',
    icon: 'bi-broadcast-pin',
    items: ['Ericsson', '5G', 'RAN', 'TRM', 'MoPs Preparation', 'Network Operations', 'CCNA Level']
  }
]

export const projects = [
  {
    title: 'Telecom Network Operations Dashboard',
    stack: 'React.js | Vite | JavaScript | Bootstrap | Tailwind CSS',
    type: 'NOC Dashboard',
    repo: 'https://github.com/MohamedHassan-codeflow/telecom-network-operations-dashboard',
    live: 'https://telecom-network-operations-dashboar.vercel.app/dashboard',
    description:
      'NOC/RAN dashboard for monitoring network sites, alarms, KPIs, SLA status, and troubleshooting actions.',
    points: [
      'Created a telecom NOC/RAN operations dashboard for monitoring network sites, alarms, KPIs, and SLA status.',
      'Added CSV import/export, PDF printing, routing, settings, troubleshooting actions, and responsive views.',
      'Supported operational monitoring across 2G, 3G, 4G, and 5G network environments.'
    ]
  },
  {
    title: 'Telecom Supply Hub',
    stack: 'JavaScript | HTML5 | CSS3 | Vite | Responsive Design',
    type: 'E-Commerce',
    repo: 'https://github.com/MohamedHassan-codeflow/Telecom-Supply-Hub',
    live: 'https://telecom-supply-hub.vercel.app/',
    description:
      'Responsive telecom e-commerce platform for contractors and field teams.',
    points: [
      'Developed a responsive telecom e-commerce platform for contractors and field teams.',
      'Built product categories, filtering, shopping cart, checkout flow, pagination, and mobile-friendly pages.',
      'Improved user experience by creating a clean, organized, and responsive interface for telecom products.'
    ]
  },
  {
    title: 'Telecom Training Platform',
    stack: 'React.js | Vite | Tailwind CSS | Bootstrap',
    type: 'Learning Platform',
    repo: 'https://github.com/MohamedHassan-codeflow/Telecom-Training-Platform',
    live: 'https://telecom-training-platform.vercel.app/',
    description:
      'Responsive telecom training and onboarding platform for course discovery and learning management.',
    points: [
      'Built a responsive telecom training and onboarding platform for learning and course management.',
      'Developed course catalog, search, pagination, course levels, course details, and KPI dashboard sections.',
      'Enhanced usability with a modern interface, responsive layout, and light/dark theme support.'
    ]
  },
  {
    title: 'KUDZOKA Landing Page',
    stack: 'HTML5 | CSS3 | Bootstrap',
    type: 'Landing Page',
    repo: 'https://github.com/MohamedHassan-codeflow/KUDZOKA',
    live: 'https://kudzoka-six-mu.vercel.app',
    description:
      'Modern responsive landing page for business, startup, or digital product presentation.',
    points: [
      'Designed and developed a modern responsive landing page for business or startup presentation.',
      'Built responsive navigation, interactive sections, smooth animations, and mobile-optimized layouts.',
      'Improved visual presentation through clean UI design, organized structure, and user-friendly layout.'
    ]
  },
  {
    title: 'Criativo Creative Agency Website',
    stack: 'HTML5 | CSS3 | Bootstrap',
    type: 'Agency Website',
    repo: 'https://github.com/MohamedHassan-codeflow/Criativo',
    live: 'https://criativo-weld.vercel.app/',
    description:
      'Dark-themed responsive website for a creative agency or digital services brand.',
    points: [
      'Developed a responsive dark-themed website for a creative agency or digital services brand.',
      'Built service cards, portfolio gallery, project showcase, team section, testimonials, blog cards, and contact form.',
      'Enhanced the website visual appeal using modern animations, structured sections, and responsive design.'
    ]
  },
  {
    title: 'Automation Tools for Telecom Scripts',
    stack: 'Python | JavaScript | VBA',
    type: 'Automation',
    repo: 'https://github.com/MohamedHassan-codeflow/VBA-Automation-Tools',
    confidentialNote: 'Demo available upon request due to confidentiality',
    description:
      'Automation toolkit for telecom script generation and repetitive operational tasks.',
    points: [
      'Developed automation tools using Python, JavaScript, and VBA.',
      'Reduced script generation time from over 1 hour to less than 2 minutes.',
      'Improved team productivity and reduced manual effort by over 90%.'
    ]
  },
  {
    title: 'Quality Check Unification Tool',
    stack: 'Excel VBA | Advanced Excel',
    type: 'Operations Tool',
    repo: 'https://github.com/MohamedHassan-codeflow/Quality-Check-Unification-Tool',
    confidentialNote: 'Demo available upon request due to confidentiality',
    description:
      'Workflow standardization tool designed to unify quality-check procedures across technical teams.',
    points: [
      'Developed an Excel VBA-based tool to standardize quality-check procedures across multiple accounts.',
      'Unified the review workflow for a 20-member technical team and improved task consistency.',
      'Reduced process confusion, minimized manual errors, and improved reporting accuracy.'
    ]
  },
  {
    title: 'Task Distribution & Utilization Dashboards',
    stack: 'Excel | Power BI',
    type: 'Dashboard',
    repo: 'https://github.com/MohamedHassan-codeflow/Tasks-Utilization-Dashboards',
    confidentialNote: 'Demo available upon request due to confidentiality',
    description:
      'Operational dashboards for task allocation, productivity monitoring, and utilization tracking.',
    points: [
      'Created Excel and Power BI dashboards to monitor task distribution and team utilization.',
      'Tracked incoming tasks, workload balance, and daily productivity across a 20-member team.',
      'Improved visibility of team performance and supported better operational decision-making.'
    ]
  },
  {
    title: 'Metal Detection System using GPS',
    stack: 'Microcontroller | GPS | Embedded Systems',
    type: 'Embedded System',
    confidentialNote: 'Demo available upon request due to confidentiality',
    description:
      'GPS-based embedded system for detecting and tracking metal locations in hazardous environments.',
    points: [
      'Designed an embedded metal detection system using microcontroller and GPS technologies.',
      'Transmitted coordinates to a control unit for tracking detected metal locations.',
      'Supported detection use cases in hazardous environments and field tracking systems.'
    ]
  }
]

export const frontendExperience = [
  {
    title: 'Front-End Developer',
    company: 'Freelance / Project-Based Web Development',
    period: '2026 - Present',
    points: [
      'Developed responsive web applications and landing pages using React.js, Vite, JavaScript, HTML5, CSS3, Bootstrap, and Tailwind CSS.',
      'Built clean UI components, mobile-friendly navigation, light/dark themes, interactive cards, filtering, pagination, and dashboard layouts.',
      'Deployed multiple projects on Vercel and maintained GitHub repositories with clear project documentation.'
    ]
  },
  {
    title: 'Automation & Dashboard Developer',
    company: 'Telecom Operations Projects',
    period: 'Professional Experience',
    points: [
      'Created internal automation tools, Excel/VBA solutions, and Power BI dashboards to improve reporting speed and workflow accuracy.',
      'Translated telecom operational needs into practical software tools for script generation, monitoring, and team productivity tracking.'
    ]
  }
]

export const experience = {
  title: 'Telecom Engineering & Technical Operations Experience',
  years: '12+ Years',
  description:
    'Solid background in telecom engineering, network operations, and technical support across multiple companies in Egypt and several African and Arab countries, including South Africa and Saudi Arabia. Experienced in remote and on-site operations, automation, scripting, reporting, and developing tools that improve efficiency and reduce manual work.'
}

export const education = {
  degree: 'Bachelor of Electrical Engineering - Communication & Electronics',
  university: 'Benha University',
  year: '2010',
  memberships: ['Egyptian Engineers Syndicate', 'Arab Engineers Federation']
}

export const certifications = [
  'Higher Diploma in Technology - Benha University',
  'Operation, Maintenance and Repair of Equipment and Electrical Devices - Egyptian Armed Forces',
  'Data Analysis: Python, SQL, Power BI, Tableau',
  'Generative AI, AI and Machine Learning Courses',
  'Mobile Networks: GSM, GPRS, EDGE, CDMA, UMTS, HSPA, LTE, LTE-A, LTE-A Pro, 5G',
  'Business Model Innovation, Differentiate & Grow Your Company',
  'ICDL Certification'
]

export const languages = ['Arabic: Native', 'English: Fluent - Spoken & Written', 'French: Elementary']
