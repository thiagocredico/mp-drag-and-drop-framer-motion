import songsData from './data/songs.json';
import { Reorder } from 'framer-motion';
import { SetStateAction, useState } from 'react';

function App() {
  const [songs, setSongs] = useState(songsData);

  const handleSongReorder = (reorderedSongs: SetStateAction<{ id: number; title: string; artist: string; duration: string; image: string; }[]>) => {
    setSongs(reorderedSongs);
  };

  return (
    <div className='flex items-center justify-center min-h-screen text-slate-800 bg-zinc-700'>
      <div className='w-full max-w-lg px-4 py-10 my-10 bg-white rounded-lg shadow-2xl'>
        <div className="h-56 -mx-4 -mt-10 bg-[url('/background-header.jpg')] bg-cover  flex items-end mb-8">
          <h1 className='w-full p-6 text-3xl font-bold text-left text-white bg-black bg-opacity-50'>
            Playlist - Soft Pop Hits
          </h1>
        </div>
          <div>
            <Reorder.Group
              axis='y'
              values={songs}
              onReorder={handleSongReorder}
            >
              {songs.map((song) => (
                <Reorder.Item key={song.id} value={song}>
                  <div
                    // key={song.id}
                    className='flex items-center w-full gap-6 p-4 mx-auto mb-4 card cursor-grab'
                  >
                    <span className='text-slate-400 border-slate-200 pointer-events-none'>
                      <img
                        src='/grab-icon.svg'
                        alt='grab icon'
                        className='w-8 h-8'
                      />
                    </span>
                    <img
                      src={song.image}
                      alt=''
                      className='w-14 hue-rotate-30 pointer-events-none'
                    />
                    <div className='w-full card-header'>
                      <div className='flex items-center justify-between'>
                        <h3 className='font-bold '>{song.title}</h3>
                        <p className='text-sm text-slate-600'>
                          {song.duration}
                        </p>
                      </div>
                      <p className='text-sm text-slate-400'>{song.artist}</p>
                    </div>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
      </div>
  );
}

export default App;
