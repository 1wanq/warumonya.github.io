import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="p-8">
      <h1 className="text-3xl mb-4">わびさび日記</h1>
      <p className="mb-8 text-lg">静けさと日常の余白を綴る場所</p>
      <nav className="space-y-2">
        <p><Link to="/gallery" className="text-blue-700 underline">写真ギャラリー</Link></p>
        <p><Link to="/food" className="text-blue-700 underline">食べたお店の記録</Link></p>
        <p><Link to="/game" className="text-blue-700 underline">ゲームの報告</Link></p>
        <p><Link to="/radio" className="text-blue-700 underline">ラジオについて</Link></p>
        <p><Link to="/diary" className="text-blue-700 underline">日常の日記</Link></p>
      </nav>
    </main>
  );
}
