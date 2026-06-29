export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-900 text-5xl font-bold text-white">
              SV
            </div>

            <div className="text-center md:text-left">
              <p className="mb-2 font-bold uppercase tracking-widest text-blue-700">
                Perfil Profissional
              </p>

              <h1 className="text-4xl font-bold text-blue-950 md:text-6xl">
                Sara Vitória
              </h1>

              <h2 className="mt-3 text-2xl font-semibold text-slate-700">
                Desenvolvedora em formação
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Estudante de Tecnologia da Informação, com interesse em
                desenvolvimento de software, aplicações web, interfaces digitais,
                banco de dados e criação de soluções tecnológicas para problemas
                reais.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#projetos"
                  className="rounded-xl bg-blue-900 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  Ver projetos
                </a>

                <a
                  href="#contato"
                  className="rounded-xl bg-slate-200 px-6 py-3 font-bold text-blue-950 transition hover:bg-slate-300"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-blue-950">Sobre mim</h2>

          <p className="text-lg leading-8 text-slate-700">
            Sou estudante da área de Tecnologia da Informação e busco aprimorar
            minhas habilidades em programação, desenvolvimento de sistemas e
            criação de interfaces. Tenho interesse em aprender novas tecnologias
            e desenvolver projetos que sejam úteis, organizados e fáceis de usar.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-blue-950">
            Habilidades
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              HTML
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              CSS
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              JavaScript
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              TypeScript
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              React
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              Next.js
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              Git e GitHub
            </span>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-950">
              Banco de Dados
            </span>
          </div>
        </section>

        <section
          id="projetos"
          className="mt-8 rounded-3xl bg-white p-8 shadow-lg"
        >
          <h2 className="mb-6 text-3xl font-bold text-blue-950">Projetos</h2>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-blue-950">
                Perfil Profissional
              </h3>

              <p className="leading-7 text-slate-700">
                Página desenvolvida em Next.js para apresentar informações
                profissionais, habilidades, projetos e formas de contato.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-blue-950">
                Interface Web
              </h3>

              <p className="leading-7 text-slate-700">
                Projeto de interface com foco em organização visual,
                responsividade e boa experiência para o usuário.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-blue-950">
                Projeto Acadêmico
              </h3>

              <p className="leading-7 text-slate-700">
                Desenvolvimento de solução simples utilizando conceitos de
                programação, design de interface e estruturação de conteúdo.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="mt-8 rounded-3xl bg-white p-8 shadow-lg"
        >
          <h2 className="mb-4 text-3xl font-bold text-blue-950">Contato</h2>

          <div className="space-y-2 text-lg text-slate-700">
            <p>
              <strong>Email:</strong> sara@email.com
            </p>

            <p>
              <strong>GitHub:</strong> github.com/seu-usuario
            </p>

            <p>
              <strong>LinkedIn:</strong> linkedin.com/in/seu-perfil
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}