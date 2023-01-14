// https://nextjs.org/docs/basic-features/built-in-css-support
import styles from './BaseTemplate.module.sass';

export interface IBaseTemplate {
  sampleTextProp: string;
  children?: React.ReactNode;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
