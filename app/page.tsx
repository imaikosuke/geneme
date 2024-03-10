import Link from 'next/link';
import Button from './components/elements/button/Button';
import CardList from './components/elements/card/CardList';

export default function Home() {
  const cards = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'Description for Card 1',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Card Title 2',
      description: 'Description for Card 2',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Card Title 3',
      description: 'Description for Card 3',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="pt-10">
      <div className="my-8 flex flex-col items-center justify-center h-128 bg-gray-200">
        <h2 className="text-3xl">Generate README.md for your GitHub repository.</h2>
        <Link href="/questions">
          <Button className="my-8">Let&apos;s try !</Button>
        </Link>
      </div>
      <div className="my-8 flex flex-col items-center justify-center h-128">
        <h2 className="text-3xl">READMEの課題</h2>
        <p className="my-8">GitHubのリポジトリにREADME.mdを作成する際、以下の課題があります。</p>
        <CardList cards={cards} />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center h-128 bg-gray-900 text-white">
        <h2 className="text-3xl">GeneMeの特徴</h2>
        <p className="my-8">GeneMeは以下の特徴を持ちます。</p>
        <CardList cards={cards} />
      </div>
    </div>
  );
}
