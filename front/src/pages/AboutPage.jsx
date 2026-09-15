import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/common/SEO';
import { variants as motionVariants, defaultViewportSettings, earlyViewportSettings } from '../utils';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Code, 
  Database, 
  BookOpen, 
  Server, 
  BrainCircuit, 
  LineChart, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Github,
  BarChart,
  Terminal,
  Cloud,
  Layers,
  Box,
  Cpu
} from 'lucide-react';
import { HoverMotion } from '../components/layout';
import { OptimizedImage } from '../components/ui';
import { STRAP_LINE } from '../data/brand';

// Animation variants
const fadeInUp = motionVariants.fadeInUp();
const fadeInRight = motionVariants.fadeInRight();
const fadeInLeft = motionVariants.fadeInLeft();
const staggerContainer = motionVariants.stagger();

// Skill component — editorial: clean list line, no pill/border/bg.
const SkillItem = ({ name, icon: Icon }) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <Icon className="w-4 h-4 text-cyan-700 dark:text-brand-accent flex-shrink-0" />
      <span className="text-sm text-gray-700 dark:text-brand-fg-muted">{name}</span>
    </div>
  );
};

// Experience card component
const ExperienceCard = ({ 
  role, 
  company, 
  period, 
  location, 
  description, 
  responsibilities, 
  skills, 
  logo,
  isExpanded,
  onToggle
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [localExpanded, setLocalExpanded] = useState(false);
  
  const expanded = isExpanded !== undefined ? isExpanded : localExpanded;
  const toggle = () => {
    if (onToggle) onToggle();
    else setLocalExpanded(!localExpanded);
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 border-b border-gray-200/60 dark:border-white/[0.08] last:border-b-0"
    >
      <div className="flex items-start gap-5 mb-4">
        <div className="w-24 h-16 sm:w-28 sm:h-20 md:w-32 md:h-20 overflow-hidden flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/95 p-2 sm:p-3 rounded-sm">
          <OptimizedImage
            src={`/images/company-logos/${logo}`}
            alt={`${company} company logo`}
            objectFit="contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-2xl tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-1">{role}</h3>
          <div className="font-mono text-sm tracking-wide text-cyan-700 dark:text-brand-accent mb-1">{company}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-brand-fg-muted">
            {period} <span className="mx-1.5 opacity-60">|</span> {location}
          </div>
        </div>
      </div>

      <p className="text-sm sm:text-[15px] text-gray-600 dark:text-brand-fg-muted mb-4 leading-relaxed max-w-2xl">{description}</p>

      {responsibilities && responsibilities.length > 0 && (
        <div className="mb-4">
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-700 dark:text-brand-accent font-semibold mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm sm:text-[15px] text-gray-600 dark:text-brand-fg-muted mb-2 max-w-2xl">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="leading-relaxed pl-1">{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={toggle}
            className="text-sm text-cyan-700 dark:text-brand-accent hover:text-cyan-800 dark:hover:text-brand-accent-soft transition-colors duration-200 font-medium cursor-pointer"
          >
            {expanded ? 'Show less \u2191' : 'Key responsibilities \u2193'}
          </button>
        </div>
      )}

      {skills && skills.length > 0 && (
        <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-gray-600 dark:text-brand-fg/70 mt-4 leading-relaxed">
          {skills.join(' \u00b7 ')}
        </p>
      )}
    </motion.div>
  );
};

// Education card component
const EducationCard = ({ 
  degree, 
  institution, 
  period, 
  location, 
  focus, 
  gpa, 
  certificateLink, 
  logo 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-8 border-b border-gray-200/60 dark:border-white/[0.08] last:border-b-0"
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-16 h-12 sm:w-20 sm:h-14 overflow-hidden flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/95 p-1.5 sm:p-2 rounded-sm">
          <OptimizedImage
            src={`/images/institutions/${logo}`}
            alt={`${institution} institutional logo`}
            objectFit="contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-lg tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-0.5">{degree}</h3>
          <div className="font-mono text-sm tracking-wide text-cyan-700 dark:text-brand-accent leading-tight">{institution}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-brand-fg-muted mt-1">
            {period} <span className="mx-1 opacity-60">·</span> {location}
          </div>
        </div>
      </div>

      {(focus || gpa) && (
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-600 dark:text-brand-fg/70 mb-3">
          {focus && <span>Focus <span className="opacity-60">·</span> {focus}</span>}
          {focus && gpa && <span className="mx-3 opacity-40">|</span>}
          {gpa && <span>GPA <span className="opacity-60">·</span> {gpa}</span>}
        </p>
      )}

      {certificateLink && (
        <a
          href={certificateLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm text-cyan-700 dark:text-brand-accent hover:text-cyan-800 dark:hover:text-brand-accent-soft hover:underline gap-1 group transition-colors"
        >
          <span>View Certificate</span>
          <ExternalLink size={13} className="transform group-hover:translate-x-1 transition-transform duration-150" />
        </a>
      )}
    </motion.div>
  );
};

// Course/Training card component
const CourseCard = ({ 
  title, 
  provider, 
  date, 
  duration,
  description, 
  certificateLink, 
  certificateId,
  topics,
  logo 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-6 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="w-20 h-14 overflow-hidden flex-shrink-0 flex items-center justify-center bg-white dark:bg-white/95 p-2 rounded-sm">
          <OptimizedImage
            src={`/images/institutions/${logo}`}
            alt={`${provider} training provider logo`}
            objectFit="contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-base tracking-tight text-gray-900 dark:text-brand-fg leading-snug">{title}</h3>
          <div className="font-mono text-sm tracking-wide text-cyan-700 dark:text-brand-accent mt-0.5">{provider}</div>
        </div>
      </div>

      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-brand-fg-muted mb-3">
        {date}{duration && <> <span className="mx-1 opacity-60">·</span> {duration}</>}
      </p>

      {certificateLink && (
        <div className="mt-auto pt-2">
          <a
            href={certificateLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-cyan-700 dark:text-brand-accent hover:text-cyan-800 dark:hover:text-brand-accent-soft text-sm hover:underline gap-1 group transition-colors"
          >
            <span>Verify Certificate</span>
            <ExternalLink size={12} className="transform group-hover:translate-x-1 transition-transform duration-150" />
          </a>
        </div>
      )}
    </motion.div>
  );
};


export default function AboutPage() {
  const [bioExpanded, setBioExpanded] = useState(false);
  const [expandedExperienceId, setExpandedExperienceId] = useState(null);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  
  // Transform values based on scroll position
  const heroOpacity = useTransform(scrollY, [260, 800], [1, 0.98]);
  const heroScale = useTransform(scrollY, [260, 800], [1, 0.995]);
  
// Experience data
const experiences = [
  {
    role: "Research Assistant | Scientific Computing",
    company: "Universität Duisburg-Essen",
    period: "December 2025 - May 2026",
    location: "Essen, Germany",
    description:
      "Engineered high-performance numerical solvers and advanced mathematical models to optimize structural topology and shape within an international AEI-DFG-funded research project.",  
    responsibilities: [
      "Developing and implementing algorithms for topology optimization using topological derivatives and level set methods to minimize structural compliance in elastic systems.",
      "Performing high-performance parallel finite element simulations with FEniCSx and PETSc to evaluate complex shape optimization problems."],
    skills: ["Scientific Computing", "Shape & Topology Optimization", "FEniCSx (dolfinx)", "PETSc & MPI", "Parallel Computing", "Level-Set Methods", "Python"],
    logo: "duisburgessen-logo.png"
  },
  {
    role: "Data Analyst",
    company: "Empresa de Transporte del Tercer Milenio Transmilenio S.A",
    period: "December 2022 - June 2023",
    location: "Bogotá D.C., Colombia",
    description:
    "Driving data analytics initiatives to enhance public transit operations: engineering scalable cloud pipelines, real-time fleet monitoring, and predictive maintenance models for fleet-wide reliability.",
    responsibilities: [
      "Evaluated data quality and engineered interactive control dashboards to automate brake pad wear alerts, monitor data transmission latency, and detect geolocation outliers across the bus fleet.",
      "Built end-to-end data processing pipelines integrating public APIs and Cloud Data Warehouses to continuously monitor TransMilenio station gate systems and flag vehicle component failures.",
      "Monitored production Machine Learning and Deep Learning models, including computer vision pipelines for driver safety, NLP systems for social sentiment analysis, and statistical time-to-failure estimations for onboard sensors.",
      ],
    skills: [
      "Python", 
      "Google Cloud Platform",
      "BigQuery",
      "Data Pipelines",
      "Anomaly Detection",
      "Clustering", 
      "Looker Studio",
      "Geospatial Analysis"
    ],
    logo: "transmilenio-logo.png"
  },
  {
    role: "Research Assistant | Data Science",
    company: "Universidad Nacional de Colombia",
    period: "April 2022 - August 2022",
    location: "Bogotá D.C., Colombia",
    description:
      "Advancing agricultural data science through multidisciplinary research: leveraging deep computer vision and statistical modeling to quantify environmental impacts on crop health and yield metrics.",
    responsibilities: [
      "Applied Convolutional Neural Networks using Detectron2 to automate image labeling and classify disease severity in avocado leaves across field datasets.",
      "Engineered statistical regression models to analyze high-dimensional weather data and evaluate climatic impacts on sugarcane saccharose concentration levels."  
    ],
    skills: ["Deep Learning & Computer Vision",
  "Detectron2",
  "Regression Modeling",
  "Image Annotation & Labeling",
  "Python",
  "PyTorch"],
    logo: "unal-logo.png"
  },

  {
    role: "Research Assistant | Scientific Computing",
    company: "Centro de Investigación en Matemáticas A. C. (CIMAT)",
    period: " November 2023 - December 2023",
    location: "Guanajuato, México.",
    description:
      "Investigating numerical weather prediction frameworks: leveraging high-performance computing and containerized environments to analyze complex mathematical models in atmospheric science.",
    responsibilities: [
      "Analyzed core mathematical formulations governing numerical weather prediction models, focusing on the Community Atmosphere Model (CAM) and Single Column Atmosphere Model (SCAM).",
      "Configured and maintained containerized high-performance simulation environments using Docker to ensure reproducible execution of Single Column Atmosphere Model (SCAM) simulations."

    ],
    skills: ["Numerical Weather Prediction", "Atmospheric & Climate Modeling", "Mathematical Modeling", "Docker & Containerization","Python"],
    logo: "cimat-logo.png"
  },
];

  // Education data
  const education = [
    {
      degree: "M.S. in Applied Mathematics",
      institution: "Centro de Investigación en Matemáticas A. C.",
      period: "Aug 2023 - Sep 2025",
      location: "Guanajuato.",
      focus: "Bayesian Statistics and Data Science",
      gpa: "9.45/10.0",
      logo: "cimat-logo.png"
    },
    {
      degree: "B.S. in Computer Science (in Progress)",
      institution: "Universidad Nacional de Colombia",
      period: "Feb 2020 - Oct 2027",
      location: "Bogotá D.C.",
      focus: "Machine Learning",
      gpa: "4.4/5.0",
      logo: "unal-logo.png"
    },
    {
      degree: "B.S. in Mathematics",
      institution: "Universidad Nacional de Colombia",
      period: "Aug 2018 - Oct 2023",
      location: "Bogotá D.C.",
      focus: "Applied Mathematics",
      gpa: "4.5/5.0",
      logo: "unal-logo.png"
    }
  ];
  
  // Courses/Training data
const courses = [
  {
    title: "MLOps | Machine Learning Operations Specialization (In Progress)",
    provider: "Duke University",
    date: "December 2026",
    description: "Three-course specialization covering supervised and unsupervised learning, recommender systems, and reinforcement learning with practical implementations.",
    topics: ["MLOps", "Machine Learning", "DevOps","Cloud Deployment"],
    logo: "duke-logo.png"
  },
  {
    title: "Linux and Bash for Data Engineering",
    provider: "Duke University",
    date: "March 2025",
    description: "Five-course specialization covering neural networks, hyperparameter tuning, convolutional and recurrent networks, and sequence models for deep learning applications.",
    certificateLink: "https://www.coursera.org/account/accomplishments/verify/7QTNJI8MN2KM",
    certificateId: "7QTNJI8MN2KM",
    topics: ["Linux", "Bash", "Shell Scripting", "Data Engineering"],
    logo: "duke-logo.png"
  },
  {
    title: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    provider: "Google",
    date: "June 2025",
    description: "They provide an overview of concepts central to cloud basics, big data, and machine learning, and where and how Google Cloud fits in.",
    certificateLink: "https://www.skills.google/public_profiles/814e87f5-11ff-44c4-9d02-0d8194372fae/badges/16538586",
    certificateId: "16538586",
    topics: ["Cloud Computing", "GCP", "Big Data", "Machine Learning"],
    logo: "google-logo.png"
  },
  {
    title: "C for Everyone: Programming Fundamentals",
    provider: "University of California, Santa Cruz",
    date: "April 2025",
    description: "Three-course specialization covering supervised and unsupervised learning, recommender systems, and reinforcement learning with practical implementations.",
    certificateLink: "https://www.coursera.org/account/accomplishments/verify/TIGV4X1T7BPO",
    certificateId: "TIGV4X1T7BPO",
    topics: ["C Programming", "Programming Fundamentals", "Software Development"],
    logo: "ucsc-logo.png" 
  }
];
  
  return (
    <>
      <SEO
        title="About · Edison Serrano"
        description="Data Scientist with expertise in machine learning, data analysis, and statistical modeling. Passionate about extracting insights from complex datasets to drive business decisions."
        canonical="https://edserranoc.github.io/portfolio/#/about"
        keywords={[
          'Edison Serrano',
          'Data Scientist',
          'Applied Mathematician',
          'Machine Learning',
          'Data Analysis',
          'Statistical Modeling',
          'Predictive Modeling'
        ]}
      />
      <div className="bg-white dark:bg-brand-bg text-gray-900 dark:text-brand-fg min-h-screen">
      
      {/* Hero Section */}
      <div className="pt-8 pb-12 sm:pt-16 sm:pb-20 flex flex-col relative overflow-hidden">
        <motion.section 
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative flex-1 flex items-center justify-center pt-0"
        >
        {/* Background. Editorial. Single canvas, no decorative blobs. */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-brand-bg -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          >
            {/* Profile Image — editorial portrait, no frame, with a subtle cyan accent line */}
            <motion.div
              variants={fadeInRight}
              className="w-40 h-52 sm:w-48 sm:h-60 md:w-56 md:h-72 flex-shrink-0 mx-auto md:mx-0 relative group"
            >
              {/* Accent line: thin cyan rule offset bottom-right, peeks out from under the photo */}
              <div
                className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-full h-full border-b border-r border-cyan-700 dark:border-brand-accent pointer-events-none transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
                aria-hidden="true"
              />
              <div className="relative w-full h-full overflow-hidden">
                <OptimizedImage
                  src="/images/Profile_EDSC.jpg"
                  alt="Edison Serrano"
                  className="object-cover w-full h-full"
                  eager={true}
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              variants={fadeInRight}
              className="flex-1 text-center md:text-left"
            >
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-4">
                About
              </p>

              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 leading-[0.95] text-gray-900 dark:text-brand-fg tracking-tight">
                Edison Serrano
              </h1>

              <h2 className="font-mono text-xs sm:text-sm tracking-[0.05em] text-cyan-700 dark:text-brand-accent mb-6">
                {STRAP_LINE}
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {/* Pitch. Bold opener, italic industries, colored company names. */}
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">Data Scientist </span>  
                    working in NLP & AI, with hands-on experience developing 
                    deep learning models for 
                    <span className="italic">text classification</span>, <span className="italic">healthcare</span>, <span className="italic">user profiling</span>, <span className="italic">detecting anomalies</span>, <span className="italic">public transport systems</span>, and <span className="italic">academic research</span>.

                </p>
                <p>
                    Currently open to new opportunities, including freelance and full-time roles, as well as PhD opportunities in Computer Science.
                    Previously at <span className="font-semibold text-blue-600 dark:text-blue-400">University Duisburg-Essen</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">Transmilenio S.A</span>, and <span className="font-semibold text-amber-600 dark:text-amber-400">CIMAT</span>.
                </p>

                <AnimatePresence>
                  {bioExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden space-y-4"
                    >
                      {/* Focus \u2014 moved into Read more so the visible bio stays compact */}
                      <p className="pt-2">
                        I am a <span className="font-medium text-gray-900 dark:text-gray-100">Mathematician</span> and <span className="font-medium text-gray-900 dark:text-gray-100">M.Sc. in Applied Mathematics</span> with a strong interest in Machine Learning, Artificial Intelligence, and computational methods. My background combines mathematical modeling and statistical inference with practical experience in data science, deep learning, optimization, and scientific computing.
                      </p>
                      <p>
                        My work sits at the intersection of mathematics, machine learning, and computer science. I enjoy translating complex mathematical and real-world problems into computational solutions, from Bayesian inference and predictive modeling to NLP, deep learning, and optimization. With a strong mathematical background, I am currently pursuing a <span className="font-medium text-gray-900 dark:text-gray-100">Bachelor's degree in Computer Science</span> to further strengthen my foundations in algorithms, software engineering, and computing.
                      </p>
                      
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setBioExpanded(!bioExpanded)}
                  className="mt-2 text-sm text-cyan-700 dark:text-brand-accent hover:text-cyan-800 dark:hover:text-brand-accent-soft transition-colors duration-200 font-medium cursor-pointer inline-flex items-center mx-auto md:mx-0"
                >
                  {bioExpanded ? 'Show less \u2191' : 'Read more \u2193'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        </motion.section>
      </div>
      
      {/* Skills Section — editorial column layout, no boxes */}
      <section className="pt-8 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={staggerContainer}
            className="w-full mx-auto"
          >
            <motion.p
              variants={fadeInUp}
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2 text-center"
            >
              Stack
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-bold text-2xl sm:text-3xl md:text-4xl text-center tracking-tight text-gray-900 dark:text-brand-fg mb-3"
            >
              Technical proficiency<span className="text-cyan-700 dark:text-brand-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-sm mb-12 text-gray-600 dark:text-brand-fg-muted"
            >
              The technologies I work with in production.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-x-5 gap-y-8 md:gap-12 lg:grid-cols-4"
            >
              {/* Generative AI & NLP  */}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-purple-600 dark:text-purple-400 flex items-center gap-2 mb-3 pb-2.5 border-b border-purple-600/30 dark:border-purple-400/30">
                  <BrainCircuit className="flex-shrink-0" size={18} />
                  Generative AI & NLP
                </h3>
                <div className="space-y-1">
                  {/* <SkillItem name="RAG & GraphRAG Architectures" icon={Database} />
                  <SkillItem name="LLM Fine-Tuning & PEFT" icon={Code} />
                  <SkillItem name="Google ADK 2.0 & LangGraph" icon={Layers} /> */}
                  <SkillItem name="LLM Fine-Tuning & PEFT" icon={Code} />
                  <SkillItem name="Vector Databases" icon={BrainCircuit} />
                </div>
              </div>
             
              {/* ML Engineering & MLOps */}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-3 pb-2.5 border-b border-emerald-600/30 dark:border-emerald-400/30">
                  <Server className="flex-shrink-0" size={18} />
                  Production ML & MLOps
                </h3>
                <div className="space-y-1">
                  {/* <SkillItem name="Model Serving & Endpoints" icon={Globe} /> */}
                  <SkillItem name="CI/CD & Deployment" icon={Github} />
                  {/* <SkillItem name="GCP (Gemini Enterprise Agent Platform)" icon={Box} /> */}
                  <SkillItem name="Model Drift & Monitoring" icon={LineChart} />
                </div>
              </div>

              {/* Cloud & Data Engineering */}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400 flex items-center gap-2 mb-3 pb-2.5 border-b border-sky-600/30 dark:border-sky-400/30">
                  <Cloud className="flex-shrink-0" size={18} />
                  Cloud & Data Engineering
                </h3>
                <div className="space-y-1">
                  <SkillItem name="GCP" icon={Cloud} />
                  <SkillItem name="BigQuery & Spark" icon={Layers} />
                  <SkillItem name="Containerization (Docker)" icon={Box} />
                  <SkillItem name="ETL & Data Pipelines" icon={Database} />
                </div>
              </div>

              {/* Core ML & Research */}
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400 flex items-center gap-2 mb-3 pb-2.5 border-b border-amber-600/30 dark:border-amber-400/30">
                  <Code className="flex-shrink-0" size={18} />
                  Core ML & Research
                </h3>
                <div className="space-y-1">
                  <SkillItem name="PyTorch & TensorFlow" icon={BrainCircuit} />
                  <SkillItem name="Mathematical Modeling" icon={BarChart} />
                  <SkillItem name="XGBoost & scikit-learn" icon={LineChart} />
                  <SkillItem name="NLP & CV" icon={Cpu} />
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      
      {/* Unified Professional Section (Grid Layout) — editorial flow */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

            {/* Left Column: Experience */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4 pb-4 border-b border-gray-200/60 dark:border-white/[0.08]">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2">Experience</p>
                  <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-gray-900 dark:text-brand-fg">What I've shipped<span className="text-cyan-700 dark:text-brand-accent">.</span></h2>
                </motion.div>

                <div>
                  {experiences.map((exp, index) => (
                    <ExperienceCard
                      key={index}
                      {...exp}
                      isExpanded={expandedExperienceId === index}
                      onToggle={() => setExpandedExperienceId(expandedExperienceId === index ? null : index)}
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Education, Awards, Languages */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-12">

              {/* Education */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4 pb-4 border-b border-gray-200/60 dark:border-white/[0.08]">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2">Education</p>
                  <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-gray-900 dark:text-brand-fg">Where I trained<span className="text-cyan-700 dark:text-brand-accent">.</span></h2>
                </motion.div>

                <div>
                  {education.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                  ))}
                </div>
              </motion.div>

              {/* Awards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4 pb-4 border-b border-gray-200/60 dark:border-white/[0.08]">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2">Awards</p>
                  <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-gray-900 dark:text-brand-fg">Recognition<span className="text-cyan-700 dark:text-brand-accent">.</span></h2>
                </motion.div>

                <div>
                  <div className="py-6 border-b border-gray-200/60 dark:border-white/[0.08]">
                    <div className="flex items-start gap-3">
                      <Award className="text-cyan-700 dark:text-brand-accent mt-0.5 flex-shrink-0" size={22} />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-1">First Place in the Parameterized Algorithms and Computational Experiments Challenge (PACE)</h3>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-700 dark:text-brand-accent mb-2">IPEC/ALGO <span className="opacity-60">·</span> London, England<span className="opacity-60">·</span> August 2024</div>
                      </div>
                    </div>
                  </div>


                  <div className="py-6">
                    <div className="flex items-start gap-3">
                      <Award className="text-cyan-700 dark:text-brand-accent mt-0.5 flex-shrink-0" size={22} />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-1">Bronze Medal in the Open Mathematical Olympiad for University Students (OMOUS)

                        </h3>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-700 dark:text-brand-accent mb-2">IUHD <span className="opacity-60">·</span>  Ashgabat, Turkmenistan<span className="opacity-60">·</span> April 2022</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-6">
                    <div className="flex items-start gap-3">
                      <Award className="text-cyan-700 dark:text-brand-accent mt-0.5 flex-shrink-0" size={22} />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-1">Bronze Medal in the International Mathematics Competition (IMC)

                        </h3>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-700 dark:text-brand-accent mb-2">UCL <span className="opacity-60">·</span> Blagoevgrad, Bulgaria<span className="opacity-60">·</span> August 2021</div>
                      </div>
                    </div>
                  </div>

                  <div className="py-6">
                    <div className="flex items-start gap-3">
                      <Award className="text-cyan-700 dark:text-brand-accent mt-0.5 flex-shrink-0" size={22} />
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg tracking-tight text-gray-900 dark:text-brand-fg leading-tight mb-1">Bronze Medal in the Iberoamerican Intercollegiate Mathematics Competition (CIIM)

                        </h3>
                        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-700 dark:text-brand-accent mb-2">Universidad Antonio Nariño <span className="opacity-60">·</span> Bogotá, Colombia<span className="opacity-60">·</span> October 2020</div>
                      </div>
                    </div>
                  </div>


                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px" }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="mb-4 pb-4 border-b border-gray-200/60 dark:border-white/[0.08]">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2">Profile</p>
                  <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-gray-900 dark:text-brand-fg">Languages<span className="text-cyan-700 dark:text-brand-accent">.</span></h2>
                </motion.div>

                <div className="py-4 flex gap-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 dark:text-brand-accent mb-1">Spanish</p>
                    <p className="font-sans text-sm text-gray-700 dark:text-brand-fg-muted">Native</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-700 dark:text-brand-accent mb-1">English</p>
                    <p className="font-sans text-sm text-gray-700 dark:text-brand-fg-muted">Advanced</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Additional Training Section (Full Width) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-10 text-center">
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-2">Training</p>
              <h2 className="font-bold text-2xl sm:text-3xl tracking-tight text-gray-900 dark:text-brand-fg">Continuing education<span className="text-cyan-700 dark:text-brand-accent">.</span></h2>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    </div>
    </>
  );
}