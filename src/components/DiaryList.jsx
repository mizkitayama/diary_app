function DiaryList ({ diaries, onDelete, onUpdate, editingDiary, setEditingDiary}) {
  if(diaries.length === 0)
    return <p className="text-gray-500">まだ日記がないぽよ</p>;

  return (
    <ul className="w-full max-w-md space-y-3">
      {diaries.map((diary) => (
        <li
          key={diary.id}
          className="bg-white p-4 rounded-lg shadow flex justify-between items-start"
				>
					{editingDiary?.id === diary.id ? (
						// 編集中の時だけフォーム表示
						<form
							onSubmit={(e) => {
								e.preventDefault();
								onUpdate(editingDiary.id, editingDiary.text);
								setEditingDiary(null);
							}}
							className="flex w-full items-start space-x-2"
						>
							<textarea
								className="flex-1 border rounded p-2"
								value={editingDiary.text}
								onChange={(e) =>
									setEditingDiary({...editingDiary, text: e.target.value })
								}
							/>
							<button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
								保存
							</button>
							<button
								type="button"
								onClick={() => setEditingDiary(null)}
								className="text-gray-500 hover:text-gray-700"
							>
								×
							</button>
						</form>
					) : (
						// 通常表示モード
						<>
							<p className="whitespace-pre-wrap flex-1">{diary.text}</p>
							<div className="flex space-x-2 ml-4">
								<button
									onClick={() => setEditingDiary(diary)}
									className="text-sm text-blue-500 bg-gray-200 hover:text-blue-700"
								>
									編集
								</button>
								<button
									onClick={() => onDelete(diary.id)}
									className="text-sm text-red-500 bg-gray-200 hover:text-red-700"
								>
									削除
								</button>
							</div>
						</>
					)}
        </li>
      ))}
    </ul>
  );
}

export default DiaryList;