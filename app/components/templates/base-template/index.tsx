// https://nextjs.org/docs/basic-features/built-in-css-support
import styles from './index.module.sass';
import { IBaseTemplate } from './types.dt';

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default BaseTemplate;
