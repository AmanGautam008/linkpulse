import React, { useState } from 'react';

export default function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = (e) => {
    e.preventDefault();
    if (!url) return;
    const randomCode = Math.random().toString(36).substring(2, 8);
    setShortUrl(`https://linkpulse.live/${randomCode}`);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-indigo-400">LinkPulse</h1>
        <p className="text-slate-400">Smart URL Shortener with Device Routing & Analytics</p>
        
        <form onSubmit={handleShorten} className="space-y-4">
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste long URL here..."
            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition"
          >
            Shorten Link
          </button>
        </form>

        {shortUrl && (
          <div className="p-4 bg-slate-900 rounded-lg border border-indigo-500/50 text-left">
            <p className="text-xs text-slate-400 mb-1">Generated Short Link:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer" className="text-indigo-400 font-semibold underline">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
