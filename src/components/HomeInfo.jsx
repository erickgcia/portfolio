import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import { socialLinks } from '../constants'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} aria-label="button" className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <section className="sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 ">
      <h1>
        Hi, I'm <span className="text-2xl font-semibold">Erick García</span>
      </h1>
      <h2 className="text-lg">
        A frontend developer passionate about building impactful web
        experiences.
      </h2>
      <section className="flex gap-4 items-center justify-center mt-4">
        {socialLinks.map((link) => (
          <Link
            to={link.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="button"
            className="flex items-center justify-center gap-1 text-black font-semibold text-base border-2 rounded-lg p-1 bg-white cursor-pointer shadow-lg hover:bg-slate-100 transition-all"
          >
            <img
              className="w-[1.4rem]"
              src={link.iconUrl}
              alt={`Logo of ${link.name}`}
            />
            {link.name}
          </Link>
        ))}
      </section>
    </section>
  ),
  2: (
    <InfoBox
      text="Constantly looking up for my personal and professional growth adquiring skills and soft skills along the way."
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Want to see some of the projects that I've worked on"
      link="/projects"
      btnText="Visit my projects"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a frontend developer?"
      link="/contact"
      btnText="Contact me"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo