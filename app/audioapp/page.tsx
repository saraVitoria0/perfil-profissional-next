"use client";

import { useRef, useState } from "react";
import musics from "./data/musics";

export default function AudioApp() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [audioIndex, setAudioIndex] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [volume, setVolume] = useState(1);
  const [mensagem, setMensagem] = useState(
    "Selecione uma música e utilize os controles de áudio."
  );

  function tocarOuPausar() {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    if (audio.paused) {
      audio.play();
      setTocando(true);
      setMensagem("Áudio em execução.");
    } else {
      audio.pause();
      setTocando(false);
      setMensagem("Áudio pausado.");
    }
  }

  function alterarVolume(valor: number) {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    audio.volume = valor;
    setVolume(valor);
    setMensagem(`Volume alterado para ${Math.round(valor * 100)}%.`);
  }

  function selecionarMusica(index: number) {
    setAudioIndex(index);
    setTocando(false);
    setMensagem(`Música selecionada: ${musics[index].nome}.`);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Atividade Next.js
          </p>

          <h1 className="text-4xl font-black md:text-5xl">
            Manipulação de Áudio
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Aplicação desenvolvida em Next.js para executar, pausar e manipular
            o volume de arquivos de áudio.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-xl">
            <h2 className="mb-5 text-2xl font-bold">Músicas</h2>

            <div className="space-y-4">
              {musics.map((music, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => selecionarMusica(index)}
                  className={`w-full rounded-2xl border p-4 text-left transition hover:scale-[1.02] ${
                    audioIndex === index
                      ? "border-blue-400 bg-blue-500/30"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <img
                    src={music.imagem}
                    alt={music.nome}
                    className="mb-3 h-36 w-full rounded-xl object-cover"
                  />

                  <p className="text-sm text-slate-400">Faixa {index + 1}</p>
                  <h3 className="font-bold">{music.nome}</h3>
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Tocando agora
              </p>

              <h2 className="mt-2 text-3xl font-black">
                {musics[audioIndex].nome}
              </h2>
            </div>

            <img
              src={musics[audioIndex].imagem}
              alt={musics[audioIndex].nome}
              className="mb-6 h-72 w-full rounded-2xl object-cover shadow-lg"
            />

            <audio
              key={audioIndex}
              ref={audioRef}
              src={musics[audioIndex].url}
              controls
              className="mb-6 w-full"
              onPlay={() => setTocando(true)}
              onPause={() => setTocando(false)}
            />

            <button
              type="button"
              onClick={tocarOuPausar}
              className={`mb-6 w-full rounded-2xl px-6 py-4 text-lg font-black text-white transition ${
                tocando
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {tocando ? "Pausar áudio" : "Executar áudio"}
            </button>

            <div className="mb-6 rounded-2xl bg-slate-100 p-5">
              <label htmlFor="volume" className="mb-3 block text-lg font-bold">
                Volume: {Math.round(volume * 100)}%
              </label>

              <input
                id="volume"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => alterarVolume(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="rounded-2xl bg-blue-50 p-5 text-center font-bold text-blue-900">
              {mensagem}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 p-5">
              <h3 className="mb-2 text-xl font-bold">Descrição da atividade</h3>

              <p className="leading-7 text-slate-700">
                Este projeto utiliza o framework Next.js para manipular arquivos
                de áudio. A aplicação permite executar e pausar o áudio por meio
                de um botão e também alterar o volume utilizando um controle do
                tipo range.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}