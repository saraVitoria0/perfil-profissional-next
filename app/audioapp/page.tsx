"use client";

import { useRef, useState } from "react";
import musics from "./data/musics";

export default function AudioApp() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [audioIndex, setAudioIndex] = useState(0);
  const [passo, setPasso] = useState(10);
  const [mensagem, setMensagem] = useState(
    "Defina o passo e use os controles do player."
  );

  function tocar() {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    audio.play();
    setMensagem("Áudio iniciado.");
  }

  function pausar() {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    audio.pause();
    setMensagem("Áudio pausado.");
  }

  function avancar() {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    const tempoAntes = audio.currentTime;
    audio.currentTime = audio.currentTime + passo;

    setMensagem(
      `Avançou de ${tempoAntes.toFixed(1)}s para ${audio.currentTime.toFixed(
        1
      )}s usando passo de ${passo}s.`
    );
  }

  function voltar() {
    const audio = audioRef.current;

    if (!audio) {
      setMensagem("Áudio não encontrado.");
      return;
    }

    const tempoAntes = audio.currentTime;
    audio.currentTime = Math.max(0, audio.currentTime - passo);

    setMensagem(
      `Voltou de ${tempoAntes.toFixed(1)}s para ${audio.currentTime.toFixed(
        1
      )}s usando passo de ${passo}s.`
    );
  }

  function proximaMusica() {
    let novoIndex = audioIndex + 1;

    if (novoIndex >= musics.length) {
      novoIndex = 0;
    }

    setAudioIndex(novoIndex);
    setMensagem("Próxima música selecionada.");
  }

  function musicaAnterior() {
    let novoIndex = audioIndex - 1;

    if (novoIndex < 0) {
      novoIndex = musics.length - 1;
    }

    setAudioIndex(novoIndex);
    setMensagem("Música anterior selecionada.");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <section className="mx-auto max-w-5xl">
        <header className="mb-8 rounded-3xl bg-gradient-to-r from-blue-900 to-purple-900 p-8 shadow-xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-200">
            Atividade Next.js
          </p>

          <h1 className="text-4xl font-black">AudioApp com Controle de Passo</h1>

          <p className="mt-4 max-w-3xl text-slate-200">
            Página criada para adicionar o estado <strong>passo</strong>, onde o
            usuário define quantos segundos o áudio deve avançar ou voltar.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <aside className="rounded-3xl bg-white/10 p-5">
            <h2 className="mb-4 text-2xl font-bold">Músicas</h2>

            <div className="space-y-4">
              {musics.map((music, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setAudioIndex(index);
                    setMensagem(`Música selecionada: ${music.nome}`);
                  }}
                  className={`w-full rounded-2xl p-3 text-left ${
                    audioIndex === index ? "bg-blue-600" : "bg-white/10"
                  }`}
                >
                  <img
                    src={music.imagem}
                    alt={music.nome}
                    className="mb-3 h-32 w-full rounded-xl object-cover"
                  />

                  <strong>{music.nome}</strong>
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
            <h2 className="mb-4 text-center text-3xl font-black">
              {musics[audioIndex].nome}
            </h2>

            <img
              src={musics[audioIndex].imagem}
              alt={musics[audioIndex].nome}
              className="mb-6 h-72 w-full rounded-2xl object-cover"
            />

            <audio
              key={audioIndex}
              ref={audioRef}
              src={musics[audioIndex].url}
              controls
              className="mb-6 w-full"
            />

            <div className="mb-6 rounded-2xl bg-slate-100 p-5">
              <label htmlFor="passo" className="mb-2 block font-bold">
                Passo:
              </label>

              <input
                id="passo"
                type="number"
                min={1}
                value={passo}
                onChange={(e) => setPasso(Number(e.target.value))}
                className="w-28 rounded-xl border px-4 py-2 font-bold"
              />

              <span className="ml-3">segundos</span>
            </div>

            <div className="mb-5 grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={tocar}
                className="rounded-xl bg-green-600 px-5 py-4 font-bold text-white"
              >
                Tocar
              </button>

              <button
                type="button"
                onClick={pausar}
                className="rounded-xl bg-red-600 px-5 py-4 font-bold text-white"
              >
                Pausar
              </button>

              <button
                type="button"
                onClick={voltar}
                className="rounded-xl bg-slate-800 px-5 py-4 font-bold text-white"
              >
                Voltar {passo}s
              </button>

              <button
                type="button"
                onClick={avancar}
                className="rounded-xl bg-blue-700 px-5 py-4 font-bold text-white"
              >
                Avançar {passo}s
              </button>
            </div>

            <div className="mb-5 grid gap-3 md:grid-cols-2">
              <button
                type="button"
                onClick={musicaAnterior}
                className="rounded-xl border px-5 py-4 font-bold"
              >
                Música anterior
              </button>

              <button
                type="button"
                onClick={proximaMusica}
                className="rounded-xl border px-5 py-4 font-bold"
              >
                Próxima música
              </button>
            </div>

            <p className="rounded-2xl bg-yellow-100 p-4 text-center font-bold text-yellow-900">
              {mensagem}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}