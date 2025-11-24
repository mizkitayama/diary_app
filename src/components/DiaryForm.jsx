import { useState } from 'react';

function DiaryForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-6">
      <textarea
        className="w-full border rounded p-2"
        row="4"
        placeholder="とりあえずなんか書こうー"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
      >
        書くぜ！
      </button>
    </form>
  )
}

export default DiaryForm;