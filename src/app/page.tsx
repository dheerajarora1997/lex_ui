// import Image from 'next/image';
// import styles from '../styles/main.module.scss';
import BlankChat from './component/blankChat';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import RootLayout from './layout';

export default function Home() {
  return (
    <RootLayout>
      <main className="pt-5 d-flex">
        <Navbar />
        <Sidebar />
        <BlankChat />
      </main>
    </RootLayout>
  );
}
