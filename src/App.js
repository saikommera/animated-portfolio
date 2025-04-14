import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="bg-gradient-to-r from-sky-800 to-blue-500 min-h-screen text-white font-sans">
      <section className="text-center py-20">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Sai Babji Kommera
        </motion.h1>
        <p className="text-lg md:text-xl text-blue-100">
          DevOps Engineer | Data Analyst | Cloud Enthusiast
        </p>
        <div className="mt-4 space-x-4">
          <a href="mailto:saibabji1@gmail.com" className="underline text-blue-200 hover:text-white">Email</a>
          <a href="https://linkedin.com/in/sai-kommera-92464b227" target="_blank" className="underline text-blue-200 hover:text-white">LinkedIn</a>
          <a href="https://github.com/saikommera" target="_blank" className="underline text-blue-200 hover:text-white">GitHub</a>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-blue-100"
        >
          I’m a DevOps and Cloud Engineer with experience in AWS, Kubernetes, CI/CD, and scalable microservices. I’ve deployed monitoring tools, optimized pipelines, and led impactful data-driven projects in healthcare and insurance sectors.
        </motion.p>
      </section>

      <section className="bg-blue-600 px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-blue-100">
          <li>Python / Bash / SQL</li>
          <li>AWS, Azure, Docker, Kubernetes</li>
          <li>CI/CD, GitHub Actions, Terraform</li>
          <li>Monitoring: Datadog, Dynatrace, CloudWatch</li>
          <li>Power BI / Tableau / Alation</li>
          <li>Incident Management, SLOs, RCA</li>
        </ul>
      </section>

      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Healthcare Data Quality Analysis</h3>
            <p className="text-blue-100">
              Used Python to profile and visualize inconsistencies in CMS-style data. Created heatmaps, scatter plots, and dashboards.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">CI/CD Pipeline Automation</h3>
            <p className="text-blue-100">
              Deployed GitHub Actions and Terraform to automate deployments, reducing manual tasks by 30%.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Car Insurance Risk Prediction</h3>
            <p className="text-blue-100">
              Built a machine learning model for claim risk scoring, increasing prediction accuracy by 20%.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="text-center text-blue-100 text-sm py-8">
        &copy; 2025 Sai Babji Kommera | Built with React & Tailwind CSS
      </footer>
    </main>
  );
}
