const Diary = () => {
  const entries = [
    { date: "2025-06-08", text: "夕暮れ時、風が少し冷たくて懐かしい匂いがした。" },
    { date: "2025-06-07", text: "雨音を聞きながら、白湯を一口。" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">日々のこと</h2>
      <ul className="space-y-4">
        {entries.map((entry) => (
          <li key={entry.date} className="border-b pb-2">
            <p className="text-sm text-gray-600">{entry.date}</p>
            <p>{entry.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Diary;
