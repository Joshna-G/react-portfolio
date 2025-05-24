import aboutPromoImg from '../../assets/home-main.png';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Learn More <b className={s.purple}>About Me</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />  
      </div>
    </BaseLayout>
  );
};

export default About;
