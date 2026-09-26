/**
 * data.js
 * ---------------------------------------------------------
 * All editable content for the site lives in this one file.
 * To update the site (new project, new cert, new job), edit
 * the arrays/objects below — you should not need to touch
 * index.html, style.css, or main.js for routine updates.
 * ---------------------------------------------------------
 */

const SITE_DATA = {
  profile: {
    name: "Sayan Mondal",
    role: "Data Analyst",
    location: "Kolkata, India",
    summary:
      "Data Analyst with hands-on SQL, Python, and Power BI experience from academic projects, an internship, and an MIS analyst role — focused on turning raw data into clear, actionable insights.",
    email: "work.mondalsayan@gmail.com",
    phone: "+91 7550970118",
    // Swap this local file for a real photo any time — same filename, same folder.
    photo: "assets/images/sayan-mondal-photo.jpeg",
    resumeFile: "assets/resume/Sayan_Mondal_Resume.pdf",
    stats: [
      { value: "9.15", label: "CGPA (B.Sc. IT)" },
      { value: "3", label: "Projects" },
      { value: "3", label: "Certifications" }
    ],
    socials: [
      { icon: "github", label: "GitHub", url: "https://github.com/analystsayan" },
      { icon: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/analystsayan" },
      // { icon: "globe", label: "Website", url: "https://www.sayanmondal.in" }
      // { icon: "hackerrank", label: "Hackerrank", url: "https://www.sayanmondal.in" }
    ]
  },

  education: {
    degree: "B.Sc. in Information Technology (Data Science)",
    school: "Maulana Abul Kalam Azad University of Technology, WB",
    period: "2020 – 2023",
    detail: "CGPA 9.15 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "OOPs",
      "Computer Networks",
      "Machine Learning",
      "Cloud Computing"
    ]
  },

  skills: {
    "Languages & Tools": [
      "Python (Pandas, NumPy, Matplotlib)",
      "SQL",
      "Excel (Pivot Tables, Power Query)",
      "Power BI"
    ],
    "Concepts": ["Statistics", "ETL", "Data Visualization"]
  },

  // TODO: confirm exact GitHub repo URLs and swap these in.
  projects: [
    {
      id: "sales-inventory-analytics",
      title: "Sales & Inventory Analytics",
      stack: "Python · SQLite · Pandas · Matplotlib",
      cover: "assets/covers/sales-inventory-cover.svg",
      coverType: "image",
      github: "https://github.com/analystsayan/Python-Sqlite3-Sales-Inventory-Analytics",
      bullets: [
        "Developed a sales and inventory analytics system using Python and SQLite to manage and analyze customer, product, order, and inventory data.",
        "Designed a relational database schema with primary/foreign keys and SQL queries for revenue, product, category, customer, and inventory analysis.",
        "Used Pandas to transform SQL query results into DataFrames and identify top-selling products, high-value customers, and low-stock items.",
        "Built Matplotlib visualizations to present product and category revenue trends and support data-driven business insights."
      ]
    },
    {
      id: "atliq-powerbi-sales",
      title: "AtliQ Tech Sales Insights",
      stack: "Power BI · DAX",
      cover: "assets/covers/powerbi-sales-cover.svg",
      coverType: "image",
      github: "https://github.com/analystsayan/atliq-sales-insights",
      bullets: [
        "Developed an interactive Power BI Sales Analytics dashboard to analyze ₹984.81M revenue and 2M+ sales quantity across markets, products, customers, and time periods.",
        "Performed data cleaning, transformation, data modeling, and DAX-based analysis using transactional sales data, with KPIs for revenue, sales quantity, profit, and profit margin.",
        "Built interactive market, product, customer, date, and month-level visualizations to identify revenue trends, top-performing customers/products, and profitability patterns."
      ],
      embed: {
        title: "atliq-tech-sales-insights",
        src:
          "https://app.powerbi.com/view?r=eyJrIjoiYzc3YmExMTUtMjAyOS00NTU1LWFjZTgtZjk1NGExMzcyZTE0IiwidCI6ImJhZjhjOTk5LWQzY2EtNGY5NC04NjMyLTI3MDU2OTIwZmI1ZSJ9"
      }
    },
    {
      id: "cli-expense-tracker",
      title: "Command-Line Expense Tracker",
      stack: "Python",
      cover: "assets/covers/expense-tracker-cover.svg",
      coverType: "image",
      github: "https://github.com/analystsayan/Python-CLI-Expense-Tracker",
      bullets: [
        "Built an OOP-based expense tracker in Python with full CRUD functionality and persistent JSON storage.",
        "Implemented category-based budgeting with real-time over-budget warnings.",
        "Added spend analysis — category breakdowns, highest expense, and date-range filtering.",
        "Visualized spending trends using Matplotlib bar charts, with robust input validation via exception handling."
      ]
    }
  ],

  experience: [
    {
      role: "MIS Executive",
      org: "Parekh Integrated Services Pvt. Ltd.",
      period: "Jun 2024 – Oct 2024",
      bullets: [
        "Consolidated and analyzed data collected from multiple branches into unified reports and charts in Excel, submitted regularly to the Regional Manager for decision-making.",
        "Identified and resolved inconsistencies across branch-level data during consolidation, improving the accuracy and reliability of reports.",
        "Reduced data cleaning and preparation time by 20% by streamlining the consolidation process across branches."
      ]
    },
    {
      role: "Senior Team Member",
      org: "Wow Momo Foods Pvt. Ltd.",
      period: "Dec 2023 – Jun 2024",
      bullets: [
        "Managed front-end billing operations and monitored daily product inventory for accurate reporting.",
        "Coordinated team activities to enhance efficiency and maintain smooth workplace operations.",
        "Conducted quality control checks to ensure high product standards."
      ]
    },
    {
      role: "Data Science Intern",
      org: "Think Again Lab",
      period: "Dec 2022 – Mar 2023",
      bullets: [
        "Conducted data analysis and built predictive models using Python and R to extract insights and support real-time decision-making.",
        "Developed impactful data visualization dashboards to effectively communicate findings."
      ]
    }
  ],

  certifications: [
    {
      title: "Excel: Mother of Business Intelligence",
      issuer: "Codebasics",
      date: "Jun 2025"
    },
    {
      title: "Career Essentials in Data Analysis",
      issuer: "Microsoft & LinkedIn",
      date: "Mar 2024"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      date: "Mar 2025"
    }
  ]
};
