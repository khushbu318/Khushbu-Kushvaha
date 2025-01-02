import { IconBrandGithub, IconBrandLinkedin, IconPhone } from "@tabler/icons-react";

const Info = {
    name: "Khushbu Kushvaha",
    roles: ["Python Developer", "Ai Engineer", "ML Engineer", "Prompt Engineer"],
    bio: "I'm a passionate software engineer specializing in Python development and AI/ML engineering, dedicated to crafting efficient, scalable solutions and delivering impactful data-driven applications. With expertise in building web applications, integrating AI models, and streamlining workflows, I focus on creating innovative tools that solve real-world problems."

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
        "title": "Frontend",
        "skills": [
            "React.js",
            "HTML",
            "CSS",
            "TailwindCSS",
            "JavaScript"
        ]
    },
    {
        "title": "Backend",
        "skills": [
            "Django",
            "Flask"
        ]
    },
    {
        "title": "Languages",
        "skills": [
            "Python",
            "SQL",
            "JavaScript"
        ]
    },
    {
        "title": "Tools & Frameworks",
        "skills": [
            "LangChain",
            "Bedrock",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Hugging Face",
            "Matplotlib",
            "Seaborn",
            "Git"
        ]
    }
]

const ExpInfo = [
    {
      title: "Gen AI Developer",
      desc: "As a Gen AI Developer, gained expertise in Generative AI and LLMs, integrating embeddings and database workflows to enhance automation and deliver business insights. Developed impactful solutions, including a Generative AI-powered invoice management system for fraud detection and multilingual invoice processing. Built a RAG-powered chatbot for SAP HANA developers, improving data migration efficiency. Automated SQL query generation, integrated React for data visualization, and created time series models for electricity consumption prediction.",
      image: "cg.png",
      skills: ["Python", "Generative AI", "LangChain", "AWS Bedrock", "RAG", "SAP HANA", "React", "LLM Orchestration", "Machine Learning", "Time Series Prediction"],
      company: "Capgemini",
      duration: "Jan 2023 - Present"
    },
    {
      title: "Python Developer",
      desc: "Joined Capgemini in July 2022 and completed training in Python, Java, Apache Spark, Hadoop, SQL, and ETL tools like Talend. As a Python Developer, built a machine learning model to predict patient attendance, created Streamlit dashboards to rank bench employees for optimized hiring, and streamlined resource allocation through data visualization workflows. Led a team in a hackathon, developing a Streamlit web app for efficient data cleaning and transformation, and secured advancement to the second round.",
      image: "cg.png",
      skills: ["Python", "Streamlit", "Machine Learning", "Data Visualization", "SQL", "Generative AI"],
      company: "Capgemini",
      duration: "July 2022 - Dec 2023"
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