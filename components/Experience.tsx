'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: 'Software Developer',
    company: 'SV Placement',
    location: 'Vapi, Gujarat',
    period: 'July 2025 - Present',
    description: 'Developed and launched a digital recruitment platform to enhance talent outreach and employer branding. Built advanced job management systems with filtering capabilities.',
    achievements: [
      'Built job management system reducing time-to-hire by 40%',
      'Increased qualified applicants by 25% through platform optimization',
      'Implemented SEO-friendly practices for better platform visibility',
      'Aligned functionality with HR and business requirements'
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'SEO'],
  },
  {
    title: 'Software Developer',
    company: 'Global Medical Devices',
    location: 'Pune, Maharashtra',
    period: 'June 2024 - November 2024',
    description: 'Built custom CRM and mobile applications to streamline client management, service tracking, and on-site technician support. Developed company website improving online presence.',
    achievements: [
      'Developed custom CRM system for client management',
      'Built mobile app for technician support and service tracking',
      'Increased organic traffic by 50% in 3 months through website development',
      'Collaborated with cross-functional teams on digital solutions'
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Mobile Development', 'Web Development'],
  },
  {
    title: 'Software Developer',
    company: 'Corpbiz Experts Solution',
    location: 'Pune, Maharashtra',
    period: 'September 2023 - April 2024',
    description: 'Built custom Dealer Management System (DMS) to streamline client handling, service tracking, and operations with automation. Developed company website and branding materials.',
    achievements: [
      'Developed comprehensive Dealer Management System with automation',
      'Streamlined client handling and service tracking operations',
      'Created company website and branding visuals',
      'Delivered efficient, user-friendly digital solutions'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'Automation'],
  },
  {
    title: 'Web Development Intern',
    company: 'Webbex Innovative India',
    location: 'Pune, Maharashtra',
    period: 'June 2023 - July 2023',
    description: 'Designed and developed responsive web pages using HTML, CSS, JavaScript, and PHP. Enhanced functionality through API integrations and conducted rigorous testing.',
    achievements: [
      'Designed and developed responsive web pages',
      'Enhanced functionality through API integrations',
      'Conducted rigorous testing for performance and compatibility',
      'Collaborated effectively with development team'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'API Integration'],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative lg:flex lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <FiCalendar size={14} />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin size={14} />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <FiBriefcase className="text-blue-600 dark:text-blue-400 mt-1" size={24} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}