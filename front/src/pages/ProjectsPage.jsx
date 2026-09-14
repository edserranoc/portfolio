import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { variants as motionVariants, defaultViewportSettings } from '../utils';
import {
  ExternalLink,
  Github,
  BarChart,
  Layers,
  Gamepad,
  Globe,
  FileText,
  Search,
  Terminal,
  ArrowRight,
  Microscope
} from 'lucide-react';
import { OptimizedImage, ViewToggle } from '../components/ui';

// Animation variants (centralized)
const fadeInUp = motionVariants.fadeInUp();
const staggerContainer = motionVariants.stagger();

// Grid configuration constants
const GRID_CONFIG = {
  DESKTOP_COLUMNS: 4,
  MOBILE_COLUMNS: 2,
  FEATURED_WIDTH: 2,
  FEATURED_PLACEMENT_INTERVAL: 6
};

// Project categories (icons preserved for filter UI; color metadata dropped — single cyan accent only)
const categories = [
  { id: 'all', name: 'All', icon: Layers },
  { id: 'ml', name: 'AI & ML', icon: Brain },
  { id: 'scientific computing', name: 'Scientific Computing', icon: Microscope },
  { id: 'web', name: 'Web Dev', icon: Globe },
  { id: 'data', name: 'Data', icon: BarChart },
  { id: 'tools', name: 'Tools', icon: Terminal },
  { id: 'games', name: 'Games', icon: Gamepad },
  { id: 'upcoming', name: 'Upcoming', icon: FileText }
];

// Brain icon (kept inline since lucide doesn't export Brain in this version)
function Brain(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
    </svg>
  );
}

// Project data based on the GitHub repositories
const projects = [
  // ── AI & ML ──────────────────────────────────────────────
  {
    id: 1,
    name: "Sentiment Analysis and Magical Towns Detection",
    description: "Lightweight Hierarchical Attention Network for joint sentiment, destination type, and Magic Town classification in Spanish tourist reviews developed for the Rest-Mex 2025 challenge at IberLEF. Outperformed the official baseline while remaining efficient and interpretable, without large pretrained transformers or GPU acceleration.",
    image: "han_architecture.png",//"classification.png",
    tags: ["spanish nlp", "text-classification", "Sentiment Analysis", "Multitask"],
    github: "https://github.com/edserranoc/NLP_Rest_Mex2025",
    category: "ml",
    featured: true,
    paper: "https://ceur-ws.org/Vol-4098/RESTMEX2025_paper14.pdf"
  },  
  // ── Scientific Computing ──────────────────────────────────────────────
  {
    id: 2,
    name: "One-Sided Crossing Problem (OCM) - PACE Challenge",
    description: "Developed a C++ solution for the one-sided crossing problem (OCM) to compete in the PACE Challenge 2024 which ranked first. Utilized graph representation, algorithms, and heuristic methods to address the Linear Ordering Problem efficiently.",
    image: "pace_challenge.png",
    tags: ["Graph Theory", "Algorithms", "Heuristic Methods", "Memetic Algorithms", "Diversity Management"],
    github: "https://github.com/carlossegurag/PaceChallenge24",
    category: "scientific computing",
    featured: true,
    paper: "https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.IPEC.2024.31"
  }, 
];

// Editorial project entry — magazine flow, no card chrome, hairline divider only.
const ProjectCard = ({ project }) => {
  const categoryObj = categories.find(c => c.id === project.category);
  const CategoryIcon = categoryObj && typeof categoryObj.icon === 'function' ? categoryObj.icon : Layers;

  return (
    <motion.div
      variants={fadeInUp}
      className="group flex flex-col pb-10 border-b border-gray-200/60 dark:border-white/[0.08]"
    >
      {/* Image — flush, no rounding, no overlay */}
      <div className="relative overflow-hidden aspect-[4/3] mb-6">
        {project.image ? (
          <OptimizedImage
            src={`/images/project-previews/${project.image}`}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <CategoryIcon size={48} className="text-gray-400 dark:text-brand-fg-muted opacity-50" />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow">
        {/* Category kicker */}
        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted mb-3 flex items-center gap-2">
          <CategoryIcon size={12} />
          <span>{categoryObj?.name}</span>
          {project.featured && (
            <span className="text-cyan-700 dark:text-brand-accent">· Featured</span>
          )}
          {project.category === 'upcoming' && (
            <span className="text-cyan-700 dark:text-brand-accent">· Coming soon</span>
          )}
        </p>

        <h3 className="font-bold text-2xl md:text-[1.7rem] tracking-tight leading-tight mb-3 text-gray-900 dark:text-brand-fg group-hover:text-cyan-700 dark:group-hover:text-brand-accent transition-colors">
          {project.name.split(':')[0]}
        </h3>

        <p className="font-sans text-sm text-gray-600 dark:text-brand-fg-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack — inline mono uppercase, dot-separated, no boxes */}
        {project.tags && project.tags.length > 0 && (
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-gray-500 dark:text-brand-fg-muted mb-5 leading-[1.9]">
            {project.tags.slice(0, 5).map((tag, index) => (
              <span key={index}>
                {index > 0 && <span className="mx-1.5 opacity-60">·</span>}
                <span>{tag}</span>
              </span>
            ))}
            {project.tags.length > 5 && (
              <span>
                <span className="mx-1.5 opacity-60">·</span>
                <span>+{project.tags.length - 5}</span>
              </span>
            )}
          </div>
        )}

        {/* Actions — inline cyan text links */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.12em] uppercase">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
              aria-label={`GitHub repository for ${project.name}`}
            >
              <Github size={13} />
              <span>Code →</span>
            </a>
          ) : null}
          {project.paper ? (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
              aria-label={`Research paper for ${project.name}`}
            >
              <FileText size={13} />
              <span>Paper →</span>
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
              aria-label={`Live demo for ${project.name}`}
            >
              <ExternalLink size={13} />
              <span>Demo →</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects Page Component
export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  // View mode: 'grid' (default) or 'list'. Persisted in localStorage.
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window === 'undefined') return 'grid';
    try {
      return window.localStorage.getItem('projects-view-mode') === 'list' ? 'list' : 'grid';
    } catch (_) { return 'grid'; }
  });
  useEffect(() => {
    try { window.localStorage.setItem('projects-view-mode', viewMode); } catch (_) {}
  }, [viewMode]);

  // Pagination configuration
  const PROJECTS_PER_PAGE = 9;

  // Subtle scroll-driven hero fade (no scale-y/skew shenanigans)
  const heroOpacity = useTransform(scrollY, [260, 800], [1, 0.98]);

  // Filter projects based on category and search term with optimized visual layout
  const filteredProjects = useMemo(() => {
    let filtered = [...projects];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    if (selectedCategory === 'all' && !searchTerm) {
      const featuredProjects = filtered.filter(p => p.featured);
      const regularProjects = filtered.filter(p => !p.featured);

      const createOptimalLayout = () => {
        const { DESKTOP_COLUMNS, FEATURED_WIDTH, FEATURED_PLACEMENT_INTERVAL } = GRID_CONFIG;

        const result = [];
        let currentGridState = [];
        let regularIndex = 0;
        let featuredIndex = 0;

        const addToGrid = (project, width) => {
          result.push(project);
          for (let i = 0; i < width; i++) {
            currentGridState.push(true);
          }
          while (currentGridState.length >= DESKTOP_COLUMNS) {
            currentGridState = currentGridState.slice(DESKTOP_COLUMNS);
          }
        };

        while (regularIndex < regularProjects.length || featuredIndex < featuredProjects.length) {
          const canPlaceFeatured =
            featuredIndex < featuredProjects.length &&
            (currentGridState.length + FEATURED_WIDTH <= DESKTOP_COLUMNS);

          const shouldPlaceFeatured =
            canPlaceFeatured &&
            (
              currentGridState.length === 0 ||
              currentGridState.length === DESKTOP_COLUMNS - FEATURED_WIDTH ||
              regularIndex === regularProjects.length ||
              (featuredIndex < featuredProjects.length - 1 &&
                regularIndex > 0 &&
                regularIndex % FEATURED_PLACEMENT_INTERVAL === 0)
            );

          if (shouldPlaceFeatured) {
            addToGrid(featuredProjects[featuredIndex], FEATURED_WIDTH);
            featuredIndex++;
          } else if (regularIndex < regularProjects.length) {
            addToGrid(regularProjects[regularIndex], 1);
            regularIndex++;
          } else if (featuredIndex < featuredProjects.length) {
            if (currentGridState.length !== 0) {
              while (currentGridState.length < DESKTOP_COLUMNS && regularIndex < regularProjects.length) {
                addToGrid(regularProjects[regularIndex], 1);
                regularIndex++;
              }
              currentGridState = [];
            }
            addToGrid(featuredProjects[featuredIndex], FEATURED_WIDTH);
            featuredIndex++;
          }
        }

        if (regularIndex < regularProjects.length && currentGridState.length > 0) {
          while (currentGridState.length < DESKTOP_COLUMNS && regularIndex < regularProjects.length) {
            addToGrid(regularProjects[regularIndex], 1);
            regularIndex++;
          }
        }

        return result;
      };

      filtered = createOptimalLayout();
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Pagination calculations
  const totalProjects = filteredProjects.length;
  const totalPages = Math.max(1, Math.ceil(totalProjects / PROJECTS_PER_PAGE));
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  return (
    <>
      <SEO
        title="Projects · Edison Serrano"
        description="Portfolio of AI and machine learning projects including TextInsight, RAG systems, and production-ready generative AI solutions. Explore ML engineering work and research implementations."
        canonical="https://edserranoc.github.io/portfolio/#/projects"
        keywords={[
          'AI Projects',
          'Machine Learning Portfolio',
          'TextInsight',
          'RAG Systems',
          'Python Projects',
          'ML Engineering',
          'NLP Projects',
          'Deep Learning'
        ]}
      />
      <div className="bg-white dark:bg-brand-bg text-gray-900 dark:text-brand-fg min-h-screen">

        {/* Hero — editorial, centered (matches Blog structure) */}
        <div className="pt-12 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
          <motion.section
            ref={heroRef}
            style={{ opacity: heroOpacity }}
            className="relative"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div variants={fadeInUp} className="mb-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted">
                    Projects
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-gray-900 dark:text-brand-fg mb-6"
                >
                  Built<span className="text-cyan-700 dark:text-brand-accent">.</span> Shipped<span className="text-cyan-700 dark:text-brand-accent">.</span> Learned<span className="text-cyan-700 dark:text-brand-accent">.</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-base md:text-lg text-gray-600 dark:text-brand-fg-muted mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                  Production systems, research tools, and open-source contributions.
                </motion.p>

                {/* GitHub count link — mirrors the Knowledge Graph link in Blog */}
                <motion.div variants={fadeInUp} className="mb-10">
                  <a
                    href="https://github.com/edserranoc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
                  >
                    <Github size={14} />
                    <span>View on GitHub</span>
                    <span className="opacity-50">·</span>
                    <span>{projects.length} projects</span>
                  </a>
                </motion.div>

                {/* Search — centered, bottom hairline only (matches Blog) */}
                <motion.div
                  variants={fadeInUp}
                  className="max-w-3xl mx-auto"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400 dark:text-brand-fg-muted" />
                    </div>
                    <input
                      type="text"
                      aria-label="Search projects"
                      className="block w-full pl-7 pr-3 py-2.5 bg-transparent border-0 border-b border-gray-200/60 dark:border-white/[0.08] text-gray-900 dark:text-brand-fg placeholder-gray-400 dark:placeholder-brand-fg-muted focus:outline-none focus:border-cyan-700 dark:focus:border-brand-accent transition-colors text-sm"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>

        {/* Projects grid */}
        <section className="pb-10 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mobile-card-container">
            <motion.div
              initial={false}
              whileInView="visible"
              viewport={{ once: true, margin: "0px" }}
              variants={staggerContainer}
            >
              {/* Category filter row — inline mono uppercase, underline-active (matches Blog) */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-x-6 gap-y-2 mb-8"
                role="group"
                aria-label="Filter projects by category"
              >
                {categories.map(category => {
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      aria-pressed={isActive}
                      aria-label={`Filter projects by ${category.name}`}
                      className={`font-mono text-[11px] tracking-[0.12em] uppercase py-1 transition-colors ${
                        isActive
                          ? 'text-cyan-700 dark:text-brand-accent underline underline-offset-[6px] decoration-1'
                          : 'text-gray-500 dark:text-brand-fg-muted hover:text-gray-900 dark:hover:text-brand-fg'
                      }`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </motion.div>

              {/* Section header — kicker + view toggle + count (matches Blog) */}
              <motion.div
                variants={fadeInUp}
                className="flex items-end justify-between mb-12 gap-3 pb-5 border-b border-gray-200/60 dark:border-white/[0.08]"
              >
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-gray-500 dark:text-brand-fg-muted">
                  {selectedCategory !== 'all'
                    ? categories.find(c => c.id === selectedCategory)?.name
                    : 'All projects'}
                </div>

                <div className="flex items-center gap-3">
                  <ViewToggle value={viewMode} onChange={setViewMode} />
                  <span className="w-px h-4 bg-gray-300/70 dark:bg-white/[0.12]" />
                  <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-gray-500 dark:text-brand-fg-muted whitespace-nowrap">
                    {filteredProjects.length > 0 && (
                      <>
                        {Math.min((currentPage - 1) * PROJECTS_PER_PAGE + 1, filteredProjects.length)}
                        {'–'}
                        {Math.min(currentPage * PROJECTS_PER_PAGE, filteredProjects.length)}
                        {' / '}
                        {filteredProjects.length}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>

              {filteredProjects.length === 0 ? (
                <motion.div
                  variants={fadeInUp}
                  className="text-center py-24"
                >
                  <Search size={28} className="mx-auto mb-4 text-gray-400 dark:text-brand-fg-muted" />
                  <h3 className="font-bold text-xl tracking-tight mb-2 text-gray-900 dark:text-brand-fg">
                    No projects found
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-brand-fg-muted mb-6 max-w-md mx-auto">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                    }}
                    className="font-mono text-[11px] tracking-[0.12em] uppercase text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
                  >
                    Show all projects
                  </button>
                </motion.div>
              ) : (
                <>
                  {viewMode === 'grid' ? (
                    <motion.div
                      variants={fadeInUp}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                    >
                      {paginatedProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      variants={fadeInUp}
                      className="divide-y divide-gray-200/60 dark:divide-white/[0.08]"
                    >
                      {paginatedProjects.map(project => {
                        const categoryName = categories.find(c => c.id === project.category)?.name || project.category;
                        return (
                          <article key={project.id} className="group flex gap-5 sm:gap-8 py-6 sm:py-8">
                            {/* Thumbnail */}
                            {project.image && (
                              <div className="hidden sm:block flex-shrink-0 w-32 md:w-44 aspect-[4/3] bg-gray-100 dark:bg-brand-bg-soft overflow-hidden">
                                <OptimizedImage
                                  src={`/images/project-previews/${project.image}`}
                                  alt={project.name}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                              </div>
                            )}

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cyan-700 dark:text-brand-accent mb-2">
                                {categoryName}
                                {project.featured && (
                                  <>
                                    <span className="opacity-50 mx-1.5">·</span>
                                    Featured
                                  </>
                                )}
                              </p>
                              <h3 className="font-bold text-xl sm:text-2xl tracking-tight leading-snug text-gray-900 dark:text-brand-fg group-hover:text-cyan-700 dark:group-hover:text-brand-accent transition-colors mb-2">
                                {project.name}
                              </h3>
                              {project.description && (
                                <p className="text-sm text-gray-600 dark:text-brand-fg-muted leading-relaxed line-clamp-2 mb-3">
                                  {project.description}
                                </p>
                              )}
                              {project.tags && project.tags.length > 0 && (
                                <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-gray-500 dark:text-brand-fg-muted hidden sm:block mb-3">
                                  {project.tags.slice(0, 5).join(' · ')}
                                </p>
                              )}
                              {(project.github || project.demo) && (
                                <div className="flex gap-5 mt-2">
                                  {project.github && (
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
                                    >
                                      <Github size={12} />
                                      <span>Code</span>
                                    </a>
                                  )}
                                  {project.demo && (
                                    <a
                                      href={project.demo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-cyan-700 dark:text-brand-accent hover:underline underline-offset-4 transition-colors"
                                    >
                                      <ExternalLink size={12} />
                                      <span>Demo</span>
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Arrow on the right */}
                            <div className="hidden md:flex items-center text-cyan-700/40 dark:text-brand-accent/40 group-hover:text-cyan-700 dark:group-hover:text-brand-accent flex-shrink-0 transition-colors">
                              <ArrowRight size={16} />
                            </div>
                          </article>
                        );
                      })}
                    </motion.div>
                  )}

                  {/* Pagination — text-based */}
                  {totalPages > 1 && (
                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 mt-10 pt-6 border-t border-gray-200/60 dark:border-white/[0.08]"
                    >
                      <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-gray-500 dark:text-brand-fg-muted">
                        <span className="text-gray-700 dark:text-brand-fg">
                          {Math.min((currentPage - 1) * PROJECTS_PER_PAGE + 1, totalProjects)}
                        </span>
                        {' – '}
                        <span className="text-gray-700 dark:text-brand-fg">
                          {Math.min(currentPage * PROJECTS_PER_PAGE, totalProjects)}
                        </span>
                        {' of '}
                        <span className="text-gray-700 dark:text-brand-fg">{totalProjects}</span>
                      </div>

                      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.12em] uppercase">
                        <button
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          className="text-gray-700 dark:text-brand-fg/80 hover:text-cyan-700 dark:hover:text-brand-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          ← Prev
                        </button>

                        <span className="opacity-50">·</span>

                        <div className="text-gray-500 dark:text-brand-fg-muted whitespace-nowrap tabular-nums">
                          {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                        </div>

                        <span className="opacity-50">·</span>

                        <button
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          className="text-gray-700 dark:text-brand-fg/80 hover:text-cyan-700 dark:hover:text-brand-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          Next →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}
