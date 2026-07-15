"use client"

import { useState } from "react";
import { useModalStore } from "../../../../store/modelStore";
import Image from "next/image";

const Openings = () => {
    const openingsPops = useModalStore((state) => state.openingsPop);

    return (
        <section className="career-secC" id="Opning_section">
            <div className="container">
                <div className="heading">
                    <h6>Open positions(16)</h6>
                    <h2>Find a Position That Suits You</h2>
                </div>
                <div className="grid-box">
                    {data?.map((item, i) => {
                        return (
                            <div key={i} className="open-item" onClick={() => {
                                openingsPops(item.details);
                            }} >
                                <h6>{item.positionName}</h6>
                                <p>{item.location}</p>
                                <figure className="icon">
                                    <Image
                                        src="assets/icon/external.svg"
                                        alt="external"
                                        width={12}
                                        height={12}
                                    />
                                </figure>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Openings;

const data = [
    {
        positionName: "Frontend Developer",
        location: "Bengaluru",
        details: `
                <h3>Frontend Developer</h3>
                <span>Job Location: Sector 49, Gurugram</span>
                <p>We are seeking a creative and detail-oriented Frontend Developer to join our team. The ideal candidate will have strong expertise in modern frontend technologies and a passion for building exceptional user interfaces.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Develop and maintain responsive, high-performance web applications using React.js and modern JavaScript.</li>
                    <li>Collaborate with UI/UX designers and backend developers to implement pixel-perfect designs.</li>
                    <li>Optimize applications for maximum speed, scalability, and responsiveness.</li>
                    <li>Write clean, maintainable, and well-documented code.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Strong proficiency in React.js, JavaScript (ES6+), HTML5, and CSS3.</li>
                    <li>Experience with Redux, Tailwind CSS / Material-UI, and REST APIs.</li>
                    <li>Knowledge of version control (Git) and agile development processes.</li>
                    <li>Understanding of responsive design and cross-browser compatibility.</li>
                </ul>`
    },
    {
        positionName: "Backend Developer",
        location: "Hyderabad",
        details: `
                <h3>Backend Developer</h3>
                <span>Job Location: Hyderabad</span>
                <p>We are looking for a skilled Backend Developer to build robust, scalable, and secure server-side applications.</p>
                <ul>
                    <li>Minimum Work Experience: 2-4 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Design and develop scalable backend services and APIs.</li>
                    <li>Work with databases (SQL & NoSQL) and optimize queries.</li>
                    <li>Integrate third-party services and APIs.</li>
                    <li>Ensure high performance, security, and reliability of applications.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Strong experience with Node.js / Python / Java (any one).</li>
                    <li>Proficiency in Express.js, Django, or Spring Boot.</li>
                    <li>Hands-on experience with MongoDB / PostgreSQL.</li>
                    <li>Knowledge of RESTful APIs, Microservices, and cloud platforms (AWS/Azure).</li>
                </ul>`
    },
    {
        positionName: "UI/UX Designer",
        location: "Pune",
        details: `
                <h3>UI/UX Designer</h3>
                <span>Job Location: Pune</span>
                <p>We are seeking a creative UI/UX Designer to craft intuitive and visually appealing user experiences.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Design wireframes, prototypes, and high-fidelity mockups.</li>
                    <li>Conduct user research and usability testing.</li>
                    <li>Collaborate with developers to ensure design implementation.</li>
                    <li>Maintain and evolve the design system.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Proficiency in Figma, Adobe XD, or Sketch.</li>
                    <li>Strong portfolio showcasing web and mobile designs.</li>
                    <li>Excellent understanding of user-centered design principles.</li>
                    <li>Knowledge of design systems and responsive design.</li>
                </ul>`
    },
    {
        positionName: "Digital Marketing Executive",
        location: "Mumbai",
        details: `
                <h3>Digital Marketing Executive</h3>
                <span>Job Location: Mumbai</span>
                <p>We are looking for a dynamic Digital Marketing Executive to drive online growth and brand visibility.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Manage social media campaigns across platforms.</li>
                    <li>Execute SEO, SEM, and email marketing strategies.</li>
                    <li>Analyze performance metrics and optimize campaigns.</li>
                    <li>Create engaging content for digital channels.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Experience with Google Ads, Facebook Ads, and Google Analytics.</li>
                    <li>Knowledge of SEO tools (Ahrefs, SEMrush).</li>
                    <li>Strong analytical and creative skills.</li>
                    <li>Excellent written communication.</li>
                </ul>`
    },
    {
        positionName: "SEO Specialist",
        location: "Noida",
        details: `
                <h3>SEO Specialist</h3>
                <span>Job Location: Noida</span>
                <p>We are hiring an SEO Specialist to improve organic search rankings and drive qualified traffic.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Perform keyword research and competitor analysis.</li>
                    <li>Optimize on-page and off-page SEO elements.</li>
                    <li>Monitor rankings and generate performance reports.</li>
                    <li>Implement technical SEO best practices.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Proven experience in SEO for websites and e-commerce.</li>
                    <li>Familiarity with Google Search Console, Analytics, and SEO tools.</li>
                    <li>Strong understanding of current SEO trends and algorithm updates.</li>
                </ul>`
    },
    {
        positionName: "Content Writer",
        location: "Jaipur",
        details: `
                <h3>Content Writer</h3>
                <span>Job Location: Jaipur</span>
                <p>We are seeking a creative and detail-oriented Content Writer to produce high-quality content across various platforms.</p>
                <ul>
                    <li>Minimum Work Experience: 1-2 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Write engaging blog posts, articles, website copy, and social media content.</li>
                    <li>Conduct research on industry topics.</li>
                    <li>Optimize content for SEO.</li>
                    <li>Work closely with the marketing team.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Excellent writing and editing skills.</li>
                    <li>Strong research and SEO knowledge.</li>
                    <li>Ability to write in multiple tones and styles.</li>
                </ul>`
    },
    {
        positionName: "Graphic Designer",
        location: "Ahmedabad",
        details: `
                <h3>Graphic Designer</h3>
                <span>Job Location: Ahmedabad</span>
                <p>We are looking for a talented Graphic Designer to create visually compelling designs for digital and print media.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Design logos, social media graphics, banners, and marketing materials.</li>
                    <li>Develop brand-consistent visual assets.</li>
                    <li>Collaborate with the marketing and product teams.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Proficiency in Adobe Photoshop, Illustrator, and Figma.</li>
                    <li>Strong portfolio with diverse design work.</li>
                    <li>Excellent sense of typography, color, and layout.</li>
                </ul>`
    },
    {
        positionName: "React Developer",
        location: "Chennai",
        details: `
                <h3>React Developer</h3>
                <span>Job Location: Chennai</span>
                <p>We are hiring a passionate React Developer to build modern, scalable web applications.</p>
                <ul>
                    <li>Minimum Work Experience: 2-4 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Develop and maintain complex React applications.</li>
                    <li>Implement state management and optimize performance.</li>
                    <li>Integrate with backend APIs.</li>
                    <li>Write reusable and testable components.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Expertise in React.js, Hooks, and Context API.</li>
                    <li>Experience with TypeScript, Redux, and Next.js is a plus.</li>
                    <li>Strong JavaScript fundamentals.</li>
                </ul>`
    },
    {
        positionName: "Next.js Developer",
        location: "Gurugram",
        details: `
                <h3>Next.js Developer</h3>
                <span>Job Location: Gurugram</span>
                <p>We are seeking an experienced Next.js Developer to build high-performance full-stack web applications.</p>
                <ul>
                    <li>Minimum Work Experience: 2-4 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Develop server-side rendered and static applications using Next.js.</li>
                    <li>Implement SEO-friendly and high-performance solutions.</li>
                    <li>Work with backend APIs and databases.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Strong experience with Next.js 13+ (App Router).</li>
                    <li>Proficiency in React, TypeScript, and Tailwind CSS.</li>
                    <li>Knowledge of Vercel deployment and API routes.</li>
                </ul>`
    },
    {
        positionName: "Full Stack Developer",
        location: "Kolkata",
        details: `
                <h3>Full Stack Developer</h3>
                <span>Job Location: Kolkata</span>
                <p>We are looking for a versatile Full Stack Developer to handle both frontend and backend development.</p>
                <ul>
                    <li>Minimum Work Experience: 2-5 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Build end-to-end web applications.</li>
                    <li>Develop scalable APIs and user interfaces.</li>
                    <li>Work with modern tech stacks.</li>
                    <li>Participate in the full software development lifecycle.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Proficiency in MERN / MEVN / Laravel / Django stack.</li>
                    <li>Experience with both frontend and backend technologies.</li>
                    <li>Knowledge of databases and cloud services.</li>
                </ul>`
    },
    {
        positionName: "Mobile App Developer",
        location: "Indore",
        details: `
                <h3>Mobile App Developer</h3>
                <span>Job Location: Indore</span>
                <p>We are hiring a Mobile App Developer to create engaging Android and iOS applications.</p>
                <ul>
                    <li>Minimum Work Experience: 1-4 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Develop and maintain native or cross-platform mobile apps.</li>
                    <li>Integrate APIs and third-party services.</li>
                    <li>Ensure high performance and excellent UX.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Experience with React Native or Flutter (preferred) / Kotlin / Swift.</li>
                    <li>Strong knowledge of mobile app architecture.</li>
                    <li>Understanding of app store deployment processes.</li>
                </ul>`
    },
    {
        positionName: "DevOps Engineer",
        location: "Kochi",
        details: `
                <h3>DevOps Engineer</h3>
                <span>Job Location: Kochi</span>
                <p>We are seeking a DevOps Engineer to streamline development, deployment, and infrastructure processes.</p>
                <ul>
                    <li>Minimum Work Experience: 2-5 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Manage CI/CD pipelines and infrastructure as code.</li>
                    <li>Ensure system reliability, scalability, and security.</li>
                    <li>Monitor and troubleshoot production environments.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Experience with AWS/Azure, Docker, Kubernetes, Jenkins, Terraform.</li>
                    <li>Strong Linux and scripting skills.</li>
                    <li>Knowledge of monitoring tools (Prometheus, ELK).</li>
                </ul>`
    },
    {
        positionName: "QA Engineer",
        location: "Lucknow",
        details: `
                <h3>QA Engineer</h3>
                <span>Job Location: Lucknow</span>
                <p>We are looking for a detail-oriented QA Engineer to ensure the quality of our software products.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Design and execute test cases and automation scripts.</li>
                    <li>Perform manual and automated testing.</li>
                    <li>Identify, report, and track bugs.</li>
                    <li>Ensure high-quality releases.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Experience with Selenium, Postman, and test automation frameworks.</li>
                    <li>Knowledge of Agile testing methodologies.</li>
                    <li>Strong analytical and problem-solving skills.</li>
                </ul>`
    },
    {
        positionName: "Project Manager",
        location: "Surat",
        details: `
                <h3>Project Manager</h3>
                <span>Job Location: Surat</span>
                <p>We are seeking an experienced Project Manager to lead software development projects successfully.</p>
                <ul>
                    <li>Minimum Work Experience: 3-6 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Plan, execute, and close projects on time and within budget.</li>
                    <li>Manage stakeholder communication and team coordination.</li>
                    <li>Track progress and mitigate risks.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>PMP / Scrum Master certification preferred.</li>
                    <li>Strong leadership and communication skills.</li>
                    <li>Experience managing IT/software projects.</li>
                </ul>`
    },
    {
        positionName: "Business Analyst",
        location: "Chandigarh",
        details: `
                <h3>Business Analyst</h3>
                <span>Job Location: Chandigarh</span>
                <p>We are hiring a Business Analyst to bridge the gap between business requirements and technical solutions.</p>
                <ul>
                    <li>Minimum Work Experience: 2-4 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Gather, analyze, and document business requirements.</li>
                    <li>Create user stories and process flows.</li>
                    <li>Act as a liaison between stakeholders and development teams.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Strong analytical and documentation skills.</li>
                    <li>Experience with Jira, Confluence, or similar tools.</li>
                    <li>Excellent communication and problem-solving abilities.</li>
                </ul>`
    },
    {
        positionName: "HR Executive",
        location: "Delhi",
        details: `
                <h3>HR Executive</h3>
                <span>Job Location: Delhi</span>
                <p>We are looking for an HR Executive to support talent acquisition, employee engagement, and HR operations.</p>
                <ul>
                    <li>Minimum Work Experience: 1-3 years</li>
                    <li>Hike offered as per Industry Standards/ Negotiable</li>
                    <li>Job Type: Full time (Work from office)</li>
                    <li>Working Days: 6 (Weekly)</li>
                </ul>
                <h3>Responsibilities</h3>
                <ul>
                    <li>Handle recruitment, onboarding, and exit processes.</li>
                    <li>Manage employee relations and engagement initiatives.</li>
                    <li>Ensure compliance with labor laws and company policies.</li>
                </ul>
                <h3>Qualifications</h3>
                <ul>
                    <li>Experience in full-cycle recruitment.</li>
                    <li>Knowledge of HRIS and payroll processes.</li>
                    <li>Strong interpersonal and organizational skills.</li>
                </ul>`
    }
];