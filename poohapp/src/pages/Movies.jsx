import { useState } from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/data';
import SearchBox from '../components/Searchbox';
import GenreBox from '../components/GenreBox';

const GENRES = [...new Set(movies.map(m => m.genre))]; // สร้าง array ของ genre ที่ไม่ซ้ำกัน

function Movies() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('all');

  //const shown = movies.filter(m => m.title.toLowerCase().includes(query.toLowerCase()));
  const q = query.toLowerCase().trim(); // แปลงเป็นตัวพิมพ์เล็ก และตัดช่องว่างหน้า-หลัง
  const shown = movies.filter(m =>
    m.title.toLowerCase().split(' ').some(word => word.startsWith(q)) && (genre === 'all' || m.genre === genre)); // แยกคำแล้วเช็คทีละคำ (แยกเป็นคำด้วย space) ถ้า query เป็น prefix ของคำใด ๆ ก็เอาไว้
  //ถ้าอยากให้เอาแค่ขึ้นต้นเป๊ะๆไม่แยกคำก็เอาsplit(' ') ออกไป
  //สองอันfilterร่วมกันคือเอาแค่ที่ตรงทั้งสองเงื่อนไข (title และ genre)


  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">หนังทั้งหมด</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <GenreBox genre={genre} onGenreChange={setGenre} genres={GENRES} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map(m => (
          <Link key={m.id} to={`/movies/${m.id}`}
            className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md
                 transition hover:-translate-y-1 hover:shadow-xl">
            {m.poster ? (
              <img src={m.poster} alt={`โปสเตอร์ ${m.title}`}
                className="aspect-[2/3] w-full object-cover" />
            ) : (
              <div className="flex aspect-[2/3] w-full items-center justify-center
                    bg-slate-200 text-4xl">🎬</div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
              {m.titleTh && <p className="text-sm text-slate-600">{m.titleTh}</p>}
              <p className="mt-1 text-sm text-slate-500">ปี {m.year} | {m.genre} | ⭐ {m.rating}</p>
            </div>
          </Link>

        ))}

      </div>
    </div>
  );
}

export default Movies;