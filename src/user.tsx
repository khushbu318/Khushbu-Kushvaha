import { IconBrandGithub, IconBrandLinkedin, IconPhone } from "@tabler/icons-react";

const Info = {
    name: "Khushbu Kushvaha",
    roles: ["Python Developer", "Ai Engineer", "ML Engineer", "Python Developer"],
    bio: "Curious and adaptable AI/ML Developer with hands-on experience in building Gen AI prototypes, predictive models, and smart data tools. Comfortable working across the stack with Python and React.js, and familiar with LLM orchestration, RAG, and Agentic AI frameworks. Quick to learn and eager to explore new technologies, with a strong focus on solving real-world problems through innovative, data-driven solutions."

}

const ProjectInfo = [
    {
        title: "Portfolio Website",
        desc: "This is a personal portfolio website that serves as a digital resume and portfolio. It showcases my skills, experiences, and completed projects in a professional and visually appealing manner. The website is fully responsive and built with modern web technologies, providing visitors with an engaging user experience. It also includes a contact form for easy communication.",
        image: "bappa.jpg",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
        github_link: "https://github.com/yourusername/portfolio-website"
    },
    {
        title: "Weather App",
        desc: "The Weather App is a dynamic application that provides real-time weather updates for any location. Users can search for a city to get detailed weather information such as temperature, humidity, wind speed, and more. The app leverages the OpenWeatherMap API for accurate data and features a clean and intuitive interface for ease of use.",
        image: "bappa.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        github_link: "https://github.com/yourusername/weather-app"
    }
];


const SkillInfo = [
    {
        title: "Languages",
        skills: [
            "Python",
            "SQL",
            "JavaScript"
        ]
    },
    {
        title: "Databases",
        skills: [
            "PostgreSQL",
            "SQLite",
            "Vector Database"
        ]
    },
    {
        title: "Frameworks & Tools",
        skills: [
            "React.js",
            "Django",
            "Flask",
            "Streamlit",
            "Semantic Kernel",
            "LangChain",
            "Bedrock",
            "Faiss",
            "Git",
            "GitHub Copilot",
            "Google Charts",
            "Azure",
            "AWS"
        ]
    },
    {
        title: "AI/ML",
        skills: [
            "Machine Learning",
            "Time Series Forecasting",
            "Generative AI",
            "Prompt Engineering",
            "RAG",
            "Agentic AI Frameworks"
        ]
    }
];

const ExpInfo = [
  {
    title: "AI/ML Developer",
    desc: "Monitored and refined a time series model using hana_ml to forecast electricity usage, enabling cost-saving decisions and CO₂ reduction. Built a prototype using Agentic AI to streamline SSP–Hub workflows for rare medication access. Developed multi-agent systems using Semantic Kernel, React, and Flask to monitor eligibility and financial aid, gaining hands-on experience with Azure and GitHub Copilot.",
    image: "cg.png",
    skills: ["Python", "Time Series Forecasting", "Agentic AI", "Semantic Kernel", "React", "Flask", "Azure", "GitHub Copilot"],
    company: "Capgemini",
    duration: "2024 - Present"
  },
  {
    title: "Gen AI Developer",
    desc: "Forecasted hourly electricity usage using hana_ml, enabling cost-saving decisions and CO₂ reduction. Prototyped a Gen AI invoice system on AWS to process multilingual invoices and detect fraud. Built a RAG-based chatbot for SAP HANA developers to support data migration, which gained internal success and client interest. Developed a natural language–to–SQL tool with React and Google Charts to streamline data analysis for non-technical users.",
    image: "cg.png",
    skills: ["Python", "Generative AI", "AWS", "RAG", "React", "Google Charts"],
    company: "Capgemini",
    duration: "2023 - 2024"
  },
  {
    title: "Python Developer",
    desc: "Built a machine learning model to predict patient no-shows, improving scheduling efficiency. Developed Streamlit dashboards to rank bench employees and enhance resource utilization. Led a hackathon team to create a one-click data cleaning app, advancing to round two and earning a Gen AI Developer role. Explored Generative AI and LLMs during a shadowing period, gaining hands-on experience with RAG pipelines and embedding workflows.",
    image: "cg.png",
    skills: ["Python", "Machine Learning", "Streamlit", "Data Visualization", "RAG", "LLMs", "Vector Databases"],
    company: "Capgemini",
    duration: "July 2022 - 2023"
  }
];


  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const socialLinks = [{ Link: "https://github.com/khushbu318", icon: IconBrandGithub }, { Link: "https://www.linkedin.com/in/khushbu-kushvaha/", icon: IconBrandLinkedin }, { Link: "tel:9076015405", icon: IconPhone }]

  

export { Info, ProjectInfo, SkillInfo, ExpInfo, slugs, socialLinks };