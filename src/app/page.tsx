export default function Home() {
  return (
    <>
      <main className="m-3">
        <article>
          <h1 className="text-center font-bold text-xl">Gary Hilares</h1>
          <ul className="text-center">
            <li className="inline-block mx-3">
              <a
                href="https://github.com/GaryHilares"
                className="underline text-blue-700"
              >
                GitHub
              </a>
            </li>
            <li className="inline-block mx-3">
              <a
                href="https://www.linkedin.com/in/gary-hilares/"
                className="underline text-blue-700"
              >
                LinkedIn
              </a>
            </li>
            <li className="inline-block mx-3">
              <a
                href="https://devpost.com/GaryStriving"
                className="underline text-blue-700"
              >
                DevPost
              </a>
            </li>
          </ul>
          <h2 className="font-bold underline">Technical skills</h2>
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
          <h2 className="font-bold underline">Personal technical projects</h2>
          <h3 className="font-bold">
            <a
              href="https://github.com/GaryHilares/Liberty-Arrow-extension"
              className="underline text-blue-700"
            >
              Liberty Arrow (Website blocker extension)
            </a>
          </h3>
          <p className="italic">June 2024 - February 2025</p>
          <p>
            <span className="underline">Technologies:</span> TypeScript,
            JavaScript, React, Sass, ChromeAPI, Python, Flask, MongoDB.
          </p>
          <ul className="list-disc ms-4">
            <li>
              Prompted the user to choose distractive websites through a React
              controlled form.
            </li>
            <li>
              Redirected the user away from distracting websites using the
              Chrome extension API.
            </li>
            <li>
              Tracked verified emails and tokens in a MongoDB database using
              Python and Flask.
            </li>
            <li>
              Published extension on the Mozilla add-ons marketplace, achieving
              a rating 5.0/5.0.
            </li>
          </ul>
          <h3 className="font-bold">
            <a
              href="https://github.com/GaryHilares/3D-Snake"
              className="underline text-blue-700"
            >
              3D Snake browser game
            </a>
          </h3>
          <p className="italic">January 2025</p>
          <p>
            <span className="underline">Technologies:</span> TypeScript, Jest,
            ThreeJS, HTML, CSS, Express.js, MongDB, Vercel.
          </p>
          <ul className="list-disc ms-4">
            <li>
              Rendered a 3D Snake game to the browser using ThreeJS in
              TypeScript.
            </li>
            <li>
              Improved maintainability by implementing the Model-View-Controller
              design pattern.
            </li>
            <li>
              Kept track of statistics in a MongoDB database through an
              Express.js back-end.
            </li>
          </ul>
          <h3 className="font-bold">
            <a
              href="https://github.com/GaryHilares/Rubber-Numbers/"
              className="underline text-blue-700"
            >
              Rubber Numbers (C++ arbitrary precision arithmetic library)
            </a>
          </h3>
          <p className="italic">April 2021 - May 2025</p>
          <p>
            <span className="underline">Technology:</span> C++, CMake,
            GoogleTest, Doxygen, gcov, lcov, genhtml, gprof, GitHub Actions.
          </p>
          <ul className="list-disc ms-4">
            <li>
              Automated testing in CI using GoogleTest and GitHub Actions for
              correctness.
            </li>
            <li>
              Automatically rendered my Doxygen documentation to GitHub Pages
              and released to GitHub releases using CD with GitHub Actions
            </li>
            <li>
              Measured test coverage using gcov and lcov and displayed it as a
              HTML graphical front-end using genhtml.
            </li>
          </ul>
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
