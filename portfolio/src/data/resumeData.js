export const profile = {
  name: 'Sunil Kulali',
  firstName: 'Sunil',
  lastName: 'Kulali',
  title: 'Data Professional',
  location: 'Bengaluru, Karnataka, India',
  email: 'sunilkulali638@gmail.com',
  phone: '+91 7619294459',
  linkedin: 'https://www.linkedin.com/in/sunilkulali',
  github: 'https://github.com/SunilKulali',
  photo: '/profile.jpg',
  summary:
    'Computer Science graduate specialising in SQL, Python, Power BI, and machine learning. I transform raw data into clear, actionable business insights that drive smarter decisions.',
  about:
    'Completed professional training in Data Science & Analytics with hands-on internship experience across sales analytics, customer behaviour analysis, and predictive modelling.',
  stats: [
    { value: '5+', label: 'Projects' },
    { value: '2', label: 'Internships' },
    { value: '5', label: 'Certifications' },
    { value: '4', label: 'Career Paths' },
  ],
};

export const roles = [
  {
    id: 'da',
    label: 'Data Analyst',
    title: 'Data Analyst & ML Engineer',
    color: '#FFD700',
    description:
      'Computer Science graduate specialising in SQL, Python, Power BI, and machine learning. I transform raw data into clear, actionable business insights.',
    stats: [
      { value: '5+', label: 'Projects' },
      { value: '2', label: 'Internships' },
      { value: '5', label: 'Certifications' },
    ],
  },
  {
    id: 'ba',
    label: 'Business Analyst',
    title: 'Business Analyst & Data Strategist',
    color: '#FFC107',
    description:
      'Detail-oriented BA with expertise in requirements gathering, KPI definition, stakeholder reporting, and translating complex business problems into data-driven insights.',
    stats: [
      { value: '3', label: 'BA Projects' },
      { value: '2', label: 'Internships' },
      { value: '5', label: 'Certifications' },
    ],
  },
  {
    id: 'de',
    label: 'Data Engineer',
    title: 'Data Engineer & Pipeline Builder',
    color: '#FBBF24',
    description:
      'Hands-on experience building ETL/ELT pipelines, data modelling, SQL optimisation, and Python-based processing. Proficient in cloud data warehousing and orchestration.',
    stats: [
      { value: '4', label: 'DE Projects' },
      { value: '2', label: 'Internships' },
      { value: '5', label: 'Certifications' },
    ],
  },
  {
    id: 'sql',
    label: 'SQL Developer',
    title: 'SQL Developer & Database Engineer',
    color: '#EAB308',
    description:
      'Expert in relational database design, advanced SQL, stored procedures, and performance tuning. Building robust data systems that power analytics at scale.',
    stats: [
      { value: '4', label: 'SQL Projects' },
      { value: '2', label: 'Internships' },
      { value: '5', label: 'Certifications' },
    ],
  },
];

export const skills = {
  da: [
    { title: 'Python & ML', icon: 'python', tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'XGBoost'] },
    { title: 'SQL & Databases', icon: 'database', tags: ['MySQL', 'PostgreSQL', 'CTEs', 'Window Functions', 'Joins'] },
    { title: 'BI & Visualisation', icon: 'chart', tags: ['Power BI', 'DAX', 'Power Query', 'Tableau'] },
    { title: 'Data Analysis', icon: 'analysis', tags: ['EDA', 'Data Cleaning', 'Feature Engineering', 'KPI Tracking', 'Excel'] },
    { title: 'Machine Learning', icon: 'brain', tags: ['Classification', 'Regression', 'Hyperparameter Tuning', 'Cross-Validation'] },
    { title: 'Tools', icon: 'tools', tags: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Streamlit'] },
  ],
  ba: [
    { title: 'Business Analysis', icon: 'search', tags: ['Requirements Gathering', 'KPI Definition', 'Gap Analysis', 'Root Cause Analysis', 'Process Mapping'] },
    { title: 'BI & Visualisation', icon: 'chart', tags: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'Data Modelling'] },
    { title: 'Data Analysis', icon: 'database', tags: ['SQL', 'CTEs', 'Window Functions', 'Python', 'EDA', 'Segmentation'] },
    { title: 'Reporting & Docs', icon: 'file', tags: ['BRD', 'Functional Specs', 'Stakeholder Reports', 'Data Storytelling'] },
    { title: 'Customer Analytics', icon: 'users', tags: ['Cohort Analysis', 'Funnel Analysis', 'Churn Modelling', 'Segmentation'] },
    { title: 'Excel', icon: 'excel', tags: ['Pivot Tables', 'VLOOKUP/XLOOKUP', 'Power Query', 'What-If Analysis'] },
  ],
  de: [
    { title: 'ETL / ELT Pipelines', icon: 'pipeline', tags: ['Apache Airflow', 'PySpark', 'Power Query', 'Python ETL'] },
    { title: 'Data Warehousing', icon: 'warehouse', tags: ['PostgreSQL', 'Snowflake', 'Star Schema', 'Data Modelling'] },
    { title: 'Big Data', icon: 'bigdata', tags: ['PySpark', 'Distributed Processing', 'Batch Pipelines'] },
    { title: 'SQL & Databases', icon: 'database', tags: ['PostgreSQL', 'MySQL', 'SQL Server', 'Query Optimisation'] },
    { title: 'Cloud & Tools', icon: 'cloud', tags: ['Git', 'Docker basics', 'Jupyter', 'VS Code'] },
    { title: 'BI Integration', icon: 'chart', tags: ['Power BI', 'Tableau', 'DAX', 'Live Connections'] },
  ],
  sql: [
    { title: 'Advanced SQL', icon: 'database', tags: ['CTEs', 'Window Functions', 'Subqueries', 'Joins', 'Aggregations'] },
    { title: 'Database Design', icon: 'design', tags: ['Normalisation (3NF)', 'Indexing', 'Schema Design', 'ER Modelling'] },
    { title: 'Stored Procedures', icon: 'code', tags: ['Transactions', 'Triggers', 'Views', 'ACID Compliance'] },
    { title: 'Performance Tuning', icon: 'speed', tags: ['Execution Plans', 'Index Analysis', 'Query Optimisation'] },
    { title: 'Platforms', icon: 'platform', tags: ['MySQL', 'PostgreSQL', 'SQL Server'] },
    { title: 'Reporting', icon: 'chart', tags: ['Power BI', 'Power Query', 'Automated Reports'] },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Loan Approval Prediction & Risk Analysis',
    role: 'da',
    category: 'Data Analyst',
    description: 'End-to-end ML pipeline to predict loan approval. EDA, feature engineering, multiple classifiers with hyperparameter tuning delivering credit risk insights.',
    tech: ['Python', 'SQL', 'Scikit-learn', 'XGBoost'],
    link: 'https://github.com/SunilKulali/Predictive-Analysis-of-Loan-Status-Using-Machine-Learning',
    icon: 'chart-line',
  },
  {
    id: 2,
    title: 'Customer Churn Analysis & Prediction',
    role: 'da',
    category: 'Data Analyst',
    description: 'Analysed customer behaviour to identify churn patterns via SQL segmentation and Python EDA. Built predictive models and Power BI dashboards.',
    tech: ['Python', 'SQL', 'Power BI', 'ML'],
    link: 'https://github.com/SunilKulali/Customer-Churn-Analysis-Prediction-',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Revenue Intelligence & Growth Dashboard',
    role: 'da',
    category: 'Data Analyst',
    description: 'Analysed retail sales data using SQL and Python to uncover revenue trends, regional performance, and top products.',
    tech: ['SQL', 'Python', 'Power BI'],
    link: 'https://github.com/SunilKulali/Coffee-Day-Sales-Insights-SQL-Data-Analysis',
    icon: 'chart-pie',
  },
  {
    id: 4,
    title: 'Auto Dashboard Generator',
    role: 'da',
    category: 'Data Analyst',
    description: 'Automated dashboard generation system that transforms raw datasets into interactive business dashboards using Python and Power BI.',
    tech: ['Python', 'Power BI', 'Automation'],
    link: 'https://github.com/SunilKulali/Auto-Dashboard-Generator',
    icon: 'robot',
  },
  {
    id: 5,
    title: 'CrazyKart – E-Commerce Sales & Customer Analytics',
    role: 'ba',
    category: 'Business Analyst',
    description: 'End-to-end e-commerce analysis with customer segmentation, funnel analysis using SQL CTEs, and Power BI KPI dashboard.',
    tech: ['Python', 'SQL', 'Power BI', 'Tableau'],
    link: '#',
    icon: 'cart',
  },
  {
    id: 6,
    title: 'Banking Transaction Analysis & Risk Reporting',
    role: 'ba',
    category: 'Business Analyst',
    description: 'Analysed banking transaction data using advanced SQL to track fund flows, identify high-risk accounts, and detect unusual patterns.',
    tech: ['SQL', 'Python', 'Power BI'],
    link: 'https://github.com/SunilKulali/Banking-Transaction-Processing-System',
    icon: 'bank',
  },
  {
    id: 7,
    title: 'End-to-End Sales ETL Pipeline',
    role: 'de',
    category: 'Data Engineer',
    description: 'Automated ETL pipeline using Apache Airflow DAGs to extract sales data, apply transformations, and load into PostgreSQL warehouse.',
    tech: ['Python', 'Airflow', 'PostgreSQL', 'Power BI'],
    link: 'https://github.com/SunilKulali/Coffee-Day-Sales-Insights-SQL-Data-Analysis',
    icon: 'stream',
  },
  {
    id: 8,
    title: 'Loan Risk Data Pipeline & Analysis',
    role: 'de',
    category: 'Data Engineer',
    description: 'ELT pipeline using PySpark for large-scale transformation and PostgreSQL for analytical querying with automated data quality checks.',
    tech: ['PySpark', 'Python', 'PostgreSQL'],
    link: 'https://github.com/SunilKulali/Predictive-Analysis-of-Loan-Status-Using-Machine-Learning',
    icon: 'chart-line',
  },
  {
    id: 9,
    title: 'Crime Data Warehouse & Dashboard (2001–2023)',
    role: 'de',
    category: 'Data Engineer',
    description: 'Processed 22 years of multi-source crime data using Power Query for ETL and built a star-schema model in Power BI.',
    tech: ['Power BI', 'Power Query', 'SQL', 'DAX'],
    link: '#',
    icon: 'globe',
  },
  {
    id: 10,
    title: 'Banking Transaction Processing System',
    role: 'sql',
    category: 'SQL Developer',
    description: 'Relational banking database with ACID-compliant stored procedures for secure fund transfers, loan tracking, and role-based access control.',
    tech: ['SQL Server', 'Stored Procedures', 'Transactions'],
    link: 'https://github.com/SunilKulali/Banking-Transaction-Processing-System',
    icon: 'bank',
  },
  {
    id: 11,
    title: 'E-Commerce Database Analytics System',
    role: 'sql',
    category: 'SQL Developer',
    description: 'Fully normalised relational database (3NF) with complex SQL for CLV analysis and composite indexing.',
    tech: ['MySQL', 'PostgreSQL', 'Advanced SQL'],
    link: '#',
    icon: 'shop',
  },
  {
    id: 12,
    title: 'Pizza Sales SQL Analytics & Reporting',
    role: 'sql',
    category: 'SQL Developer',
    description: 'Advanced SQL to identify top products, peak hours, and revenue trends with composite indexing and Power BI dashboard.',
    tech: ['MySQL', 'Advanced SQL', 'Power BI'],
    link: 'https://github.com/SunilKulali/Coffee-Day-Sales-Insights-SQL-Data-Analysis',
    icon: 'pizza',
  },
];

export const experience = [
  {
    year: '2025',
    title: 'Data Analyst Intern',
    company: 'IT Vedant, Bengaluru',
    role: 'da',
    points: [
      'Analysed structured datasets using Python (Pandas, NumPy) and SQL to extract actionable insights.',
      'Performed data cleaning, validation, and EDA to ensure data quality before reporting.',
      'Defined and tracked KPIs via Power BI dashboards for real-time business monitoring.',
      'Automated recurring reports using Power Query, reducing manual effort by ~40%.',
    ],
  },
  {
    year: '2026',
    title: 'Machine Learning Intern',
    company: 'CODE-B Solutions Pvt. Ltd., Mumbai',
    role: 'da',
    points: [
      'Worked on real-world datasets to support business and analytical use cases across sales and operations.',
      'Created analytical reports using SQL queries and Python scripting for sales performance insights.',
      'Assisted in Power BI dashboard development, data validation, and performance tracking.',
    ],
  },
  {
    year: '2023',
    title: 'SQL / Data Analyst Intern',
    company: 'IT Vedant, Bengaluru',
    role: 'sql',
    points: [
      'Designed and optimised complex SQL queries (Joins, CTEs, Window Functions) for business reporting.',
      'Developed stored procedures and parameterised views to encapsulate reporting logic.',
      'Performed query performance tuning using execution plans and index analysis on SQL Server.',
    ],
  },
  {
    year: '2022',
    title: 'SQL / Data Analyst Intern',
    company: 'CODE-B Solutions Pvt. Ltd., Mumbai',
    role: 'sql',
    points: [
      'Created and maintained SQL views, stored procedures, and triggers for repeatable business reporting.',
      'Wrote SQL documentation including query logic, schema descriptions, and deployment steps.',
      'Developed ETL logic using SQL and Power Query to extract, clean, and load data into reporting tables.',
    ],
  },
];

export const education = [
  {
    year: '2020 – 2024',
    title: 'B.E. Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University, Bengaluru',
    badge: 'CGPA: 7.82 / 10',
  },
  {
    year: 'Jan 2024 – May 2025',
    title: 'Master in Data Science & Analytics',
    institution: 'IT Vedant, Bengaluru — Professional Training',
    badge: 'Python · SQL · Power BI · ML',
  },
  {
    year: 'Completed',
    title: 'Pre-University Course (Science)',
    institution: 'Sri Chaitanya PU College, Mangalore',
    badge: '85%',
  },
];

export const certifications = [
  { name: 'Data Analytics & Visualization Job Simulation', issuer: 'Accenture' },
  { name: 'Machine Learning with Python', issuer: 'IBM — Coursera' },
  { name: 'Data Analysis with Python', issuer: 'IBM — Coursera' },
  { name: 'Python for Data Science', issuer: 'IBM — Coursera' },
  { name: 'Databases & SQL for Data Science', issuer: 'IBM — Coursera' },
];

export const chatKnowledge = [
  {
    keywords: ['name', 'who are you', 'who is sunil', 'about you', 'introduce'],
    answer: `I'm Sunil Kulali's portfolio assistant! Sunil is a Data Professional based in Bengaluru, India. He specialises in SQL, Python, Power BI, and Machine Learning, with experience as a Data Analyst, Business Analyst, Data Engineer, and SQL Developer.`,
  },
  {
    keywords: ['email', 'contact', 'reach', 'mail'],
    answer: `You can reach Sunil at sunilkulali638@gmail.com or call +91 7619294459. He's also on LinkedIn (linkedin.com/in/sunilkulali) and GitHub (github.com/SunilKulali).`,
  },
  {
    keywords: ['location', 'where', 'city', 'based'],
    answer: `Sunil is based in Bengaluru, Karnataka, India.`,
  },
  {
    keywords: ['skill', 'skills', 'toolbox', 'technology', 'tech stack', 'python', 'sql', 'power bi'],
    answer: `Sunil's core skills include:\n• Python & ML: Pandas, NumPy, Scikit-learn, XGBoost\n• SQL: MySQL, PostgreSQL, CTEs, Window Functions\n• BI: Power BI, DAX, Power Query, Tableau\n• Data Engineering: Airflow, PySpark, ETL/ELT pipelines\n• Tools: Git, Jupyter, VS Code, Streamlit`,
  },
  {
    keywords: ['education', 'degree', 'university', 'college', 'cgpa', 'study'],
    answer: `Education:\n• B.E. Computer Science & Engineering (2020–2024) — VTU, Bengaluru — CGPA 7.82/10\n• Master in Data Science & Analytics (Jan 2024 – May 2025) — IT Vedant, Bengaluru\n• Pre-University Science — Sri Chaitanya PU College, Mangalore — 85%`,
  },
  {
    keywords: ['experience', 'intern', 'internship', 'work', 'job', 'company'],
    answer: `Work Experience:\n• Data Analyst Intern @ IT Vedant, Bengaluru (2025) — Python, SQL, Power BI, KPI dashboards\n• Machine Learning Intern @ CODE-B Solutions, Mumbai (2026) — SQL reports, Python analytics, Power BI\nBoth roles involved real-world data analysis, reporting automation, and dashboard development.`,
  },
  {
    keywords: ['project', 'projects', 'portfolio', 'github'],
    answer: `Featured Projects:\n• Loan Approval Prediction (ML pipeline)\n• Customer Churn Analysis & Prediction\n• Revenue Intelligence Dashboard (Coffee Day Sales)\n• Auto Dashboard Generator\n• Banking Transaction Processing System\n• E-Commerce Database Analytics\n• ETL Pipelines with Airflow & PySpark\n\nView all on GitHub: github.com/SunilKulali`,
  },
  {
    keywords: ['certification', 'cert', 'certificate', 'credential', 'ibm', 'accenture', 'coursera'],
    answer: `Certifications:\n• Data Analytics & Visualization Job Simulation — Accenture\n• Machine Learning with Python — IBM Coursera\n• Data Analysis with Python — IBM Coursera\n• Python for Data Science — IBM Coursera\n• Databases & SQL for Data Science — IBM Coursera`,
  },
  {
    keywords: ['data analyst', 'analyst role', 'da'],
    answer: `As a Data Analyst & ML Engineer, Sunil transforms raw data into actionable insights using Python, SQL, Power BI, and machine learning. He has 5+ projects including loan prediction, churn analysis, and revenue dashboards.`,
  },
  {
    keywords: ['business analyst', 'ba', 'business'],
    answer: `As a Business Analyst, Sunil excels at requirements gathering, KPI definition, stakeholder reporting, and customer analytics. Key projects include CrazyKart e-commerce analytics and banking risk reporting.`,
  },
  {
    keywords: ['data engineer', 'de', 'pipeline', 'etl', 'elt'],
    answer: `As a Data Engineer, Sunil builds ETL/ELT pipelines using Apache Airflow, PySpark, and PostgreSQL. Projects include sales ETL pipelines, loan risk data pipelines, and crime data warehouses spanning 22 years of data.`,
  },
  {
    keywords: ['sql developer', 'database', 'stored procedure'],
    answer: `As a SQL Developer, Sunil designs normalised databases, writes advanced SQL (CTEs, Window Functions), stored procedures, and optimises query performance. Projects include banking systems, e-commerce analytics, and HR databases.`,
  },
  {
    keywords: ['machine learning', 'ml', 'model', 'prediction', 'loan'],
    answer: `Sunil has built ML pipelines for loan approval prediction and customer churn. He uses Scikit-learn, XGBoost, feature engineering, hyperparameter tuning, and cross-validation. Check the Loan Approval project on GitHub!`,
  },
  {
    keywords: ['power bi', 'dashboard', 'visualization', 'dax'],
    answer: `Sunil is proficient in Power BI including DAX, Power Query, data modelling, and interactive KPI dashboards. He's built dashboards for sales analytics, churn analysis, banking risk, and crime data.`,
  },
  {
    keywords: ['hire', 'available', 'open to work', 'job', 'recruit'],
    answer: `Sunil is open to opportunities in Data Analysis, Business Analysis, Data Engineering, and SQL Development. Contact him at sunilkulali638@gmail.com or via the Contact page!`,
  },
  {
    keywords: ['hello', 'hi', 'hey', 'help', 'what can you'],
    answer: `Hello! I'm Sunil's AI assistant. Ask me about his skills, projects, experience, education, certifications, contact info, or any career role (Data Analyst, Business Analyst, Data Engineer, SQL Developer).`,
  },
];
