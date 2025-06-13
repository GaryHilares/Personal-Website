interface LinkData {
  text: string;
  url: string;
}

function Hero({title, subtitle, links}: {title: string, subtitle: string, links: Array<LinkData>}) {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto">
        <h1 className="text-center font-bold text-4xl">{title}</h1>
        <p className="text-center font-bold text-lg">{subtitle}</p>
        <ul className="text-center">
          {links.map((link, idx) => (
            <li key={idx} className="inline-block mx-3">
              <a
                href={link.url}
                className="underline text-blue-700"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  )
}

function Section({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <div>
      <h2 className="font-bold">{title}</h2>
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
    <div>
      <h3 className="font-bold">
            <a
              href={url}
              className="underline text-blue-700"
            >
              {name}
            </a>
          </h3>
          <p className="italic">{date}</p>
          <p>
            <span className="underline">Technologies:</span> {technologies.join(", ")}.
          </p>
          <ul className="list-disc ms-4">
            {bulletPoints.map((bulletPoint, idx) => <li key={idx}>{bulletPoint}</li>)}
          </ul>
      </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="m-3">
        <article>
          <Hero
            title="Gary Hilares"
            subtitle="All-rounder software developer"
            links={[
              {text: "GitHub", url: "https://github.com/GaryHilares"},
              {text: "LinkedIn", url: "https://www.linkedin.com/in/gary-hilares/"},
              {text: "DevPost", url: "https://devpost.com/GaryStriving"}
            ]}
          />
          <Section title="Technical skills">
            <p>
              <span className="underline">Languages:</span> TypeScript,
              JavaScript, Node.js, Python, R, CSS3, HTML5, C++, C, Java
            </p>
            <p>
              <span className="underline">Web frameworks:</span> Next.js,
              Express.js, React, ChromeAPI, Flask, RESTful APIs
            </p>
            <p>
              <span className="underline">Databases & other tools:</span>{" "}
              PostgreSQL, SQLite, MongoDB, Linux, Git, GitHub, Docker, Vercel
            </p>
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
          <h2 className="font-bold underline">Contests</h2>
          <h3 className="font-bold">
            1st place in the ICPC PacNW 2024 Div. 2 contest
          </h3>
          <p className="italic">September 2024 - April 2025</p>
          <p>At Simon Fraser University, Burnaby, BC</p>
          <ul className="list-disc ms-4">
            <li>
              Won 1st place out of 85 teams in the International Collegiate
              Programming Contest PacNW 2024 Div. 2.
            </li>
            <li>
              Cooperatively solved challenging problems in topics like dynamic
              programming with two other UBC students.
            </li>
          </ul>
          <h2 className="font-bold underline">Work experience</h2>
          <h3 className="font-bold">Computer science teaching assistant</h3>
          <p className="italic">September 2024 - April 2025</p>
          <p>At University of British Columbia, Vancouver, BC</p>
          <ul className="list-disc ms-4">
            <li>
              Worked with 1-2 other teaching assistants to hold 40+ 3-hour lab
              sessions on 10 topics related to systematic program design with
              5-30 students each.
            </li>
            <li>
              Assisted students to learn through one-to-one conversations held
              during my 1-hour-long and 2-hour-long weekly office hours.
            </li>
          </ul>
          <h2 className="font-bold underline">Education</h2>
          <h3 className="font-bold">Bachelor of Science, Computer Science</h3>
          <p className="italic">September 2023 - May 2028 (expected)</p>
          <p>At University of British Columbia, Vancouver, BC</p>
          <ul className="list-disc ms-4">
            <li>GPA: 94.8% (73 credits so far).</li>
            <li>
              Awarded the IMES scholarship, given to exceptional international
              students entering UBC based on academic excellence and community
              involvement
            </li>
          </ul>
        </article>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
