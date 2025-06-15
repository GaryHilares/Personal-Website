interface LinkData {
  text: string;
  url: string;
}

function WIPHeader() {
  return (
    <header className="bg-black text-white p-3">
      This website is currently under construction. Come back soon to see updates!
    </header>
  );
}

function Hero({title, subtitle, subsubtitle, src, links, phrase}:
  {
    title: string,
    subtitle: string,
    subsubtitle: string,
    src: string,
    links: Array<LinkData>,
    phrase: string
  }) {
  return (
    <div className="min-h-[75vh] flex">
      <div className="m-auto">
        <h1 className="text-center font-bold text-4xl">{title}</h1>
        <p className="text-center font-bold text-xl">{subtitle}</p>
        <p className="text-center text-lg">{subsubtitle}</p>
        <ul className="text-center">
          {links.map((link, idx) => (
            <li key={idx} className="inline-block my-1 mx-3 px-1 border-1 rounded-md" style={{color: "blue"}}>
              <a
                href={link.url}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="my-2">
          <img src={src} width="200" height="200" className="m-auto" />
        </div>
        <p className="text-center text-lg">{phrase}</p>
      </div>
    </div> 
  )
}

function Section({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <div className="m-3">
      <h2 className="font-bold text-xl">{title}</h2>
      {children}
    </div>
  )
}

function ProjectCard({name, url, date, technologies, bulletPoints}: {
  name: string,
  url: string,
  date: string,
  technologies: string[],
  bulletPoints: string[]
}) {
  return (
    <div className="py-3">
      <h3 className="font-bold">{name}</h3>
      <p className="italic">{date}</p>
        <p>
          <span className="underline">Technologies:</span> {technologies.join(", ")}.
          </p>
          <ul className="list-disc ms-4">
            {bulletPoints.map((bulletPoint, idx) => <li key={idx}>{bulletPoint}</li>)}
          </ul>
          <p className="underline">Links:</p>
          <a href={url} className="inline-block border-1 rounded-md px-1" style={{color: "blue"}}>GitHub</a>
      </div>
  );
}

function TimelineItem({title, date, src, organization, bulletPoints}: {
  title: string,
  date: string,
  src: string,
  organization: string,
  bulletPoints: Array<string>
}) {
  return (
    <div className="relative border-s-2 ms-2 py-3 ps-6 border-black border-line border-dotted">
      <div
        className="absolute left-[calc(var(--spacing)*-5)] bg-white bg-size-[calc(var(--spacing)*4.5)] bg-no-repeat bg-center h-9 w-9 border-black border-1 rounded-full"
        style={{backgroundImage: `url(${src})`}} />
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

function SkillSubsectionDisplay({title, skills}: {title: string, skills: Array<string>}) {
  return (
    <div className="py-1">
      <h3 className="underline">{title}:</h3>
      <ul>
        {skills.map((skill, idx) => (
          <li className="inline-block p-1 border-1 m-1 rounded-md" key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <WIPHeader />
      <main className="p-3 md:w-[66%] m-auto">
        <article>
          <Hero
            title="Gary Hilares"
            subtitle="All-rounder software developer"
            subsubtitle="Principled, passionate, user-focused programming"
            src="https://avatars.githubusercontent.com/u/46727048?s=400&u=9bdce7cb9eabd7d51bebbf77fd755a3c38ac873a&v=4"
            links={[
              {text: "GitHub", url: "https://github.com/GaryHilares"},
              {text: "LinkedIn", url: "https://www.linkedin.com/in/gary-hilares/"},
              {text: "DevPost", url: "https://devpost.com/GaryStriving"}
            ]}
            phrase="Welcome to my website!"
          />
          <Section title="Technical skills">
            <SkillSubsectionDisplay
              title="Languages"
              skills={["TypeScript", "JavaScript", "Node.js", "Python", "R", "CSS3", "HTML5", "Rust", "C++", "C", "Java"]} />
            <SkillSubsectionDisplay
              title="Web frameworks"
              skills={["Next.js", "Express.js", "React", "ChromeAPI", "Flask", "RESTful APIs"]} />
            <SkillSubsectionDisplay
              title="Databases & other tools"
              skills={["PostgreSQL", "SQLite", "MongoDB", "Linux", "Git", "GitHub", "Docker", "Vercel"]} />
          </Section>
          <Section title="Personal technical projects">
            <ProjectCard
              name="Liberty Arrow (Website blocker extension)"
              url="https://github.com/GaryHilares/Liberty-Arrow-extension"
              date="June 2024 - February 2025"
              technologies={["TypeScript", "JavaScript", "React", "Sass", "ChromeAPI", "Python", "Flask", "MongoDB"]}
              bulletPoints={[
                "Prompted the user to choose distractive websites through a React controlled form.",
                "Redirected the user away from distracting websites using the Chrome extension API.",
                "Tracked verified emails and tokens in a MongoDB database using Python and Flask.",
                "Published extension on the Mozilla add-ons marketplace, achieving a rating 5.0/5.0."
              ]}
            />
            <ProjectCard
              name="3D Snake browser game"
              url="https://github.com/GaryHilares/3D-Snake"
              date="January 2025"
              technologies={["TypeScript", "Jest", "ThreeJS", "HTML", "CSS", "Express.js", "MongoDB", "Vercel"]}
              bulletPoints={[
                "Rendered a 3D Snake game to the browser using ThreeJS in TypeScript.",
                "Improved maintainability by implementing the Model-View-Controller design pattern.",
                "Kept track of statistics in a MongoDB database through an Express.js back-end."
              ]}
            />
            <ProjectCard
              name="Rubber Numbers (C++ arbitrary precision arithmetic library)"
              url="https://github.com/GaryHilares/Rubber-Numbers/"
              date="April 2021 - May 2025"
              technologies={["C++", "CMake", "GoogleTest", "Doxygen", "gcov", "lcov", "genhtml", "gprof", "GitHub Actions"]}
              bulletPoints={[
                "Automated testing in CI using GoogleTest and GitHub Actions for correctness.",
                "Automatically rendered my Doxygen documentation to GitHub Pages and released to GitHub releases using CD with GitHub Actions",
                "Measured test coverage using gcov and lcov and displayed it as a HTML graphical front-end using genhtml."
              ]}
            />
          </Section>
          <Section title="Work Experience">
            <TimelineItem
              title="Computer science teaching assistant"
              date="September 2024 - April 2025"
              src="/img/ubc-logo.jpg"
              organization="The University of British Columbia @ Vancouver, BC"
              bulletPoints={[
                "Worked with 1-2 other teaching assistants to hold 40+ 3-hour lab sessions on 10 topics related to systematic program design with 5-30 students each.",
                "Assisted students to learn through one-to-one conversations held during my 1-hour-long and 2-hour-long weekly office hours."
              ]} />
          </Section>
          <Section title="Contests & Awards">
            <TimelineItem
              title="1st place in the ICPC PacNW 2024 Div. 2 contest"
              date="November 2024"
              src="/img/icpc-logo.png"
              organization="Simon Fraser University @ Burnaby, BC"
              bulletPoints={[
                "Won 1st place out of 85 teams in the International Collegiate Programming Contest PacNW 2024 Div. 2.",
                "Cooperatively solved challenging problems in topics like dynamic programming with two other UBC students."
              ]} />
          </Section>
          <Section title="Education & Certifications">
            <TimelineItem
              title="Bachelor of Science, Computer Science"
              date="September 2023 - May 2028 (expected)"
              src="/img/ubc-logo.jpg"
              organization="The University of British Columbia @ Vancouver, BC"
              bulletPoints={[
                "GPA: 94.8% (73 credits so far).",
                "Awarded the IMES scholarship, given to exceptional international students entering UBC based on academic excellence and community involvement"
              ]} />
          </Section>
        </article>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
