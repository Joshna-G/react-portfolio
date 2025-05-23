import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { GrMysql } from '@react-icons/all-files/gr/GrMysql';
import { SiFirebase } from '@react-icons/all-files/si/SiFirebase';
import { FaVuejs } from "react-icons/fa6";
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiReactbootstrap } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <GrMysql />
      </li>
      <li className={s.techIcon}>
        <FaNodeJs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>                                  
        <SiFirebase />
      </li>
      <li className={s.techIcon}>
       <SiReactbootstrap />
      </li>
      <li className={s.techIcon}>
        <RiNextjsLine />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <FaVuejs />
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
      </li>
    </ul>
  );
};

export default TechSkills;
