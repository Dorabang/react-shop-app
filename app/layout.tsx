import '@/app/globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
import { AiOutlineSetting } from 'react-icons/ai';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Undefined',
  description: 'codeit Next.js webSite clone, Next.js | typeScript | Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={notoSansKR.className}>
        <header className='py-8 border-b border-solid border-neutral-700 mb-10'>
          <div className='container mx-auto flex justify-between'>
            <h1 className='text-3xl font-extrabold tracking-tight text-neutral-900'>
              <Link href='/'>Undefined</Link>
            </h1>
            <div>
              <AiOutlineSetting size={24} />
            </div>
          </div>
        </header>
        {children}
        <footer className='bg-neutral-900 py-10 mt-20'>
          <div className='container mx-auto'>
            <address className='not-italic text-neutral-400'>
              (FrontEnd Developer) Park Su-a <br />
              Next.js | TypeScript | TailwindCSS
            </address>
          </div>
        </footer>
      </body>
    </html>
  );
}
