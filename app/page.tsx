import Link from 'next/link';
import Button from './components/elements/button/Button';
import CardList from '@/components/CardList';

export default function Home() {
  return (
    <div className="py-4">
      <div className="my-8 flex flex-col items-center justify-center h-128 bg-gray-200">
        <h2 className="text-3xl">Generate README.md for your GitHub repository.</h2>
        <Link href="/first">
          <Button className="my-8">Let&apos;s try !</Button>
        </Link>
      </div>
      <div className="my-8 flex flex-col items-center justify-center h-128">
        <h2 className="text-3xl">READMEの課題</h2>
        <p className="my-8">GitHubのリポジトリにREADME.mdを作成する際、以下の課題があります。</p>
        <CardList />
      </div>
      <div className="my-8 flex flex-col items-center justify-center h-128 bg-gray-900 text-white">
        <h2 className="text-3xl">GeneMeの特徴</h2>
        <p className="my-8">GeneMeは以下の特徴を持ちます。</p>
        <CardList />
      </div>
      <Link href="/first">
        <Button className="my-8">Let&apos;s try !</Button>
      </Link>
    </div>
  );
}