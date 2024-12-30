import Image from 'next/image';
import styles from '../styles/Button.module.scss';

export default function Home() {
  return (
    <div>
      <main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <button className={styles.button}>Hello world</button>
      </main>
    </div>
  );
}
