import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Joshna, </span>
        <br />a Software Developer currently based in{' '}
        <span className={s.purple}>Chennai</span>
        <br />
        <br />
        I have a Bachelor's degree in Commerce and
        <br />
        Master's degree in Computer Application.
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Playing Games
        </li>
        <li className={s.aboutActivity}>
          - Listening Music
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
