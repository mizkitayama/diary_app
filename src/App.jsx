import { useEffect, useState } from 'react'
import DiaryForm from "./components/DiaryForm"
import DiaryList from "./components/DiaryList"
import './App.css'

function App() {
	const [diaries, setDiaries] = useState([]);

  useEffect(() => {
		const saved = localStorage.getItem("diaries");
		if(saved) setDiaries(JSON.parse(saved));
	},[]);
	
	// 追加
	const addDiary = (text) => {
		const newDiaries = [...diaries, {id: Date.now(), text}];
		setDiaries(newDiaries);
		localStorage.setItem('diaries', JSON.stringify(newDiaries));
	}

	// 削除
	const deleteDiary = (id) => {
		const newDiaries = diaries.filter((d) => d.id !== d);
		setDiaries(newDiaries);
		localStorage.setItem("diaries", JSON.stringify(newDiaries));
	}

  return (
    <>
      <div className='min-h-screen bg-pink-50 flex flex-col item-center p-6'>
        <h1 className='text-3xl font-bold text-pink-600 mb-6'>日記アプリ</h1>
				<DiaryForm onAdd={addDiary} />
				<DiaryList diaries={diaries} onDelete={deleteDiary} />	
      </div>
    </>
  )
}

export default App;