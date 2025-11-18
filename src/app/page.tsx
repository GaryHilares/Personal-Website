import { useId } from "react";
import { AosInitializer } from "./aos";

interface LinkData {
  text: string;
  url: string;
}

function NavBar({ links }: { links: Array<LinkData> }) {
  return (
    <header className="bg-blue-300 border-b-1 border-solid">
      <div className="overflow-auto mx-3">
        <h1 className="font-bold inline-block m-3">Gary Hilares</h1>
        <ul className="float-right">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="inline-block m-3 hover:text-blue-800 transition-colors"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero({
  title,
  subtitle,
  subsubtitle,
  src,
  links,
  phrase,
}: {
  title: string;
  subtitle: string;
  subsubtitle: string;
  src: string;
  links: Array<LinkData>;
  phrase: string;
}) {
  return (
    <div className="py-5 flex" data-aos="flip-up">
      <div className="m-auto">
        <h1 className="text-center font-bold text-4xl">{title}</h1>
        <p className="text-center font-bold text-xl">{subtitle}</p>
        <p className="text-center text-lg">{subsubtitle}</p>
        <ul className="text-center">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="inline-block my-1 mx-3 px-1 border-1 rounded-md text-blue-800 hover:text-white hover:bg-blue-800 transition-colors"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="my-2">
          <img src={src} width="200" height="200" className="m-auto" />
        </div>
        <p className="text-center text-lg">{phrase}</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="m-3">
      <h2 className="font-bold text-xl">About me</h2>
      <p className="my-1">
        As a software developer, rather than focusing on a single aspect of
        computer science, I strive to gain deep understanding to integrate
        different fields of software into a holistic design. I believe that a
        good software developer should know about many fields, such as software
        development practices, algorithm implementations, cybersecurity, and
        AI/ML. Without an understanding of these different fields, a software
        developer is likely to reach an incomplete solution.
      </p>
      <p className="my-1">
        Rather than sticking to a single technology for all my projects, I
        strive to learn new technologies and strive to use "the right tool for
        the right job". Different tools excel at different tasks, so staying
        open-minded to consider their strengths and weaknesses remains
        important.
      </p>
      <p className="my-1">
        If for some reason you want to know, aside from software-related
        activities, I enjoy having friendly conversations, playing chess,
        running, practicing kendo, meditating, learning French and Japanese,
        listening to music, watching anime, or learning random skills.
      </p>
    </div>
  );
}

function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div id={id}>
      <div className="m-3" data-aos="fade-up">
        <h2 className="font-bold text-xl">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ProjectCard({
  name,
  url,
  date,
  technologies,
  bulletPoints,
  videoUrl,
}: {
  name: string;
  url: string;
  date: string;
  technologies: string[];
  bulletPoints: string[];
  videoUrl?: string;
}) {
  return (
    <div className="py-3">
      <h3 className="font-bold">{name}</h3>
      <p className="italic">{date}</p>
      <p>
        <span className="underline">Technologies:</span>{" "}
        {technologies.join(", ")}.
      </p>
      <ul className="list-disc ms-4">
        {bulletPoints.map((bulletPoint, idx) => (
          <li key={idx}>{bulletPoint}</li>
        ))}
      </ul>
      <p className="underline">Links:</p>
      <a
        href={url}
        className="inline-block border-1 rounded-md px-1 text-blue-800 hover:text-white hover:bg-blue-800 transition-colors"
      >
        GitHub
      </a>
      {videoUrl && (
        <div className="m-auto p-3 align-center">
          <iframe
            className="block m-auto"
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

function TimelineItem({
  title,
  date,
  src,
  organization,
  bulletPoints,
}: {
  title: string;
  date: string;
  src: string;
  organization: string;
  bulletPoints: Array<string>;
}) {
  return (
    <div className="relative border-s-2 ms-2 py-3 ps-6 border-black border-line border-dotted">
      <div
        className="absolute left-[calc(var(--spacing)*-5)] bg-white bg-size-[calc(var(--spacing)*4.5)] bg-no-repeat bg-center h-9 w-9 border-black border-1 rounded-full"
        style={{ backgroundImage: `url(${src})` }}
      />
      <h3 className="font-bold">{title}</h3>
      <p>{organization}</p>
      <p className="italic">{date}</p>
      <ul className="list-disc ms-4">
        {bulletPoints.map((bulletPoint, idx) => (
          <li key={idx}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillSubsectionDisplay({
  title,
  skills,
}: {
  title: string;
  skills: Array<string>;
}) {
  return (
    <div className="py-1">
      <h3 className="underline">{title}:</h3>
      <ul>
        {skills.map((skill, idx) => (
          <li className="inline-block p-1 border-1 m-1 rounded-md" key={idx}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const technicalSkillsId = `technical-skills-${useId()}`;
  const personalProjectsId = `personal-projects-${useId()}`;
  const workExperienceId = `work-experience-${useId()}`;
  const contestsId = `contests-id-${useId()}`;
  const educationId = `education-id-${useId()}`;
  return (
    <>
      <AosInitializer />
      <NavBar
        links={[
          { text: "Technical skills", url: `#${technicalSkillsId}` },
          { text: "Personal projects", url: `#${personalProjectsId}` },
          { text: "Work experience", url: `#${workExperienceId}` },
          { text: "Contests & Awards", url: `#${contestsId}` },
          { text: "Education & Certifications", url: `#${educationId}` },
        ]}
      />
      <main
        className={
          'bg-[url("/img/rocket-striving.png")] bg-blend-multiply bg-size-[50px] bg-center bg-blue-100'
        }
      >
        <article className="p-5 md:w-[66%] m-auto bg-white border-solid border-x-1">
          <Hero
            title="Gary Hilares"
            subtitle="All-rounded software developer"
            subsubtitle="Principled, passionate, user-focused programming"
            src="/img/rocket-striving.png"
            links={[
              { text: "GitHub", url: "https://github.com/GaryHilares" },
              {
                text: "LinkedIn",
                url: "https://www.linkedin.com/in/gary-hilares/",
              },
              { text: "DevPost", url: "https://devpost.com/GaryStriving" },
            ]}
            phrase="Welcome to my website!"
          />
          <AboutMe />
          <Section title="Technical skills" id={technicalSkillsId}>
            <SkillSubsectionDisplay
              title="Languages"
              skills={[
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Python",
                "R",
                "CSS3",
                "HTML5",
                "Rust",
                "C++",
                "C",
                "Java",
              ]}
            />
            <SkillSubsectionDisplay
              title="Web frameworks"
              skills={[
                "Next.js",
                "Express.js",
                "React",
                "ChromeAPI",
                "Flask",
                "RESTful APIs",
              ]}
            />
            <SkillSubsectionDisplay
              title="Databases & other tools"
              skills={[
                "PostgreSQL",
                "SQLite",
                "MongoDB",
                "Linux",
                "Git",
                "GitHub",
                "Docker",
                "Vercel",
              ]}
            />
          </Section>
          <Section title="Personal technical projects" id={personalProjectsId}>
            <ProjectCard
              name="Liberty Arrow (Website blocker extension)"
              url="https://github.com/GaryHilares/Liberty-Arrow-extension"
              date="June 2024 - February 2025"
              technologies={[
                "TypeScript",
                "JavaScript",
                "React",
                "Sass",
                "ChromeAPI",
                "Python",
                "Flask",
                "MongoDB",
              ]}
              bulletPoints={[
                "Prompted the user to choose distractive websites through a React controlled form.",
                "Redirected the user away from distracting websites using the Chrome extension API.",
                "Tracked verified emails and tokens in a MongoDB database using Python and Flask.",
                "Published extension on the Mozilla add-ons marketplace, achieving a rating 5.0/5.0.",
              ]}
            />
            <ProjectCard
              name="3D Snake browser game"
              url="https://github.com/GaryHilares/3D-Snake"
              date="January 2025"
              technologies={[
                "TypeScript",
                "Jest",
                "ThreeJS",
                "HTML",
                "CSS",
                "Express.js",
                "MongoDB",
                "Vercel",
              ]}
              bulletPoints={[
                "Rendered a 3D Snake game to the browser using ThreeJS in TypeScript.",
                "Improved maintainability by implementing the Model-View-Controller design pattern.",
                "Kept track of statistics in a MongoDB database through an Express.js back-end.",
              ]}
            />
            <ProjectCard
              name="Rubber Numbers (C++ arbitrary precision arithmetic library)"
              url="https://github.com/GaryHilares/Rubber-Numbers/"
              date="April 2021 - May 2025"
              technologies={[
                "C++",
                "CMake",
                "GoogleTest",
                "Doxygen",
                "gcov",
                "lcov",
                "genhtml",
                "gprof",
                "GitHub Actions",
              ]}
              bulletPoints={[
                "Automated testing in CI using GoogleTest and GitHub Actions for correctness.",
                "Automatically rendered my Doxygen documentation to GitHub Pages and released to GitHub releases using CD with GitHub Actions",
                "Measured test coverage using gcov and lcov and displayed it as a HTML graphical front-end using genhtml.",
              ]}
            />
          </Section>
          <Section title="Work Experience" id={workExperienceId}>
            <TimelineItem
              title="Computer science teaching assistant"
              date="September 2024 - April 2025"
              src="/img/ubc-logo.jpg"
              organization="The University of British Columbia @ Vancouver, BC"
              bulletPoints={[
                "Worked with 1-2 other teaching assistants to hold 40+ 3-hour lab sessions on 10 topics related to systematic program design with 5-30 students each.",
                "Assisted students to learn through one-to-one conversations held during my 1-hour-long and 2-hour-long weekly office hours.",
              ]}
            />
          </Section>
          <Section title="Contests & Awards" id={contestsId}>
            <TimelineItem
              title="1st place in the International Collegiate Programming Contest PacNW 2024 Div. 2 contest"
              date="November 2024"
              src="/img/icpc-logo.png"
              organization="Simon Fraser University @ Burnaby, BC"
              bulletPoints={[
                "Won 1st place out of 85 teams in the International Collegiate Programming Contest PacNW 2024 Div. 2.",
                "Cooperatively solved challenging problems in topics like dynamic programming with two other UBC students.",
              ]}
            />
            <TimelineItem
              title="IMES scholarship"
              date="May 2023"
              src="/img/ubc-logo.jpg"
              organization="The University of British Columbia @ Vancouver, BC"
              bulletPoints={[
                "Awarded the IMES scholarship, given to exceptional international students entering UBC.",
              ]}
            />
          </Section>
          <Section title="Education & Certifications" id={educationId}>
            <TimelineItem
              title="Bachelor of Science, Computer Science"
              date="September 2023 - May 2028 (expected)"
              src="/img/ubc-logo.jpg"
              organization="The University of British Columbia @ Vancouver, BC"
              bulletPoints={["GPA: 94.8% (73 credits so far)."]}
            />
            <TimelineItem
              title="Completion of CS50x course"
              date="2022"
              src="/img/harvard-logo.png"
              organization="HarvardX @ Online"
              bulletPoints={[
                "Completed HarvardX's CS50x course, including ten problem sets, eight labs, and one final project.",
              ]}
            />
          </Section>
        </article>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
