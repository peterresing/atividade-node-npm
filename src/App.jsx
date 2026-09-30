import { useState } from 'react'
import './App.css'

// ============================================
// EXERCÍCIO 1 - react-icons (JÁ FEITO - EXEMPLO)
// ============================================
import { FaReact, FaNodeJs, FaNpm, FaHeart, FaStar, FaRocket } from 'react-icons/fa'

// ============================================
// EXERCÍCIO 2 - react-confetti
// TODO: Descomente a linha abaixo após instalar
// ============================================
// import Confetti from 'react-confetti'

// ============================================
// EXERCÍCIO 3 - dayjs
// TODO: Descomente a linha abaixo após instalar
// ============================================
import dayjs from 'dayjs'

// ============================================
// EXERCÍCIO 4 - react-toastify
// TODO: Descomente as linhas abaixo após instalar
// ============================================
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// ============================================
// EXERCÍCIO 5 - uuid
// TODO: Descomente a linha abaixo após instalar
// ============================================
import { v4 as uuidv4 } from 'uuid'

// ============================================
// EXERCÍCIO 6 - react-spinners
// TODO: Descomente a linha abaixo após instalar
// ============================================
import { ClipLoader, BounceLoader, RingLoader, PulseLoader } from 'react-spinners'

// ============================================
// EXERCÍCIO 7 - react-type-animation
// TODO: Descomente a linha abaixo após instalar
// ============================================
import { TypeAnimation } from 'react-type-animation'

function App() {
  // Estado para exercício 2 (confetti)
  const [showConfetti, setShowConfetti] = useState(false)

  // Estado para exercício 5 (uuid)
  const [usuarios, setUsuarios] = useState([])
  const [nomeInput, setNomeInput] = useState('')

  // Estado para exercício 6 (spinners)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <header>
        <h1>Node.js, NPM & React</h1>
        <p>Aprenda a instalar e usar pacotes NPM dentro de componentes React</p>
      </header>

      <div className="container">
        {/* INTRO */}
        <div className="intro">
          <h2>Como funciona?</h2>
          <p>Este projeto usa <code>React + Vite</code>. Cada exercicio pede que voce instale um pacote NPM e use dentro de um componente.</p>
          <pre>{`npm install           # instala dependencias
npm run dev           # inicia o servidor de desenvolvimento
# Abra o arquivo src/App.jsx e implemente os exercicios!`}</pre>
          <p>O <strong>Exercicio 1 ja esta pronto</strong> como exemplo. Implemente os demais!</p>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 1 - react-icons (EXEMPLO PRONTO) */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 1 - react-icons <span className="badge badge-done">EXEMPLO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>react-icons</code> - Milhares de icones para React</p>
            <p><strong>Instalar:</strong> <code>npm install react-icons</code></p>
            <p>Este exercicio ja esta implementado! Veja os icones abaixo:</p>

            <div className="preview-area" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '2.5rem', fontStyle: 'normal' }}>
              <FaReact color="#61dafb" title="React" />
              <FaNodeJs color="#68a063" title="Node.js" />
              <FaNpm color="#cc3534" title="NPM" />
              <FaHeart color="#e25555" title="Heart" />
              <FaStar color="#f0c040" title="Star" />
              <FaRocket color="#a371f7" title="Rocket" />
            </div>

            <pre>{`// No topo do arquivo:
import { FaReact, FaNodeJs, FaNpm } from 'react-icons/fa'

// No JSX:
<FaReact color="#61dafb" />
<FaNodeJs color="#68a063" />`}</pre>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 2 - react-confetti */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 2 - react-confetti <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>react-confetti</code> - Animacao de confetes na tela</p>
            <p><strong>Instalar:</strong> <code>npm install react-confetti</code></p>

            <ul className="checklist">
              <li>Instale o pacote react-confetti</li>
              <li>Descomente o import no topo do App.jsx</li>
              <li>Renderize {"<Confetti />"} quando showConfetti for true</li>
              <li>O botao abaixo ja alterna o estado!</li>
            </ul>

            <pre>{`// Import:
import Confetti from 'react-confetti'

// No JSX (dentro do card-body, onde diz "Confetes vao aparecer aqui"):
{showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}`}</pre>

            <button className="btn btn-green" onClick={() => setShowConfetti(!showConfetti)}>
              {showConfetti ? 'Parar Confetes' : 'Soltar Confetes!'}
            </button>

            <div className="preview-area">
              {/* TODO: Renderize <Confetti /> aqui quando showConfetti for true */}
              {showConfetti ? '🎉 Confetes deveriam estar aparecendo!' : 'Confetes vao aparecer aqui'}
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 3 - dayjs */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 3 - dayjs <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>dayjs</code> - Manipulacao de datas (leve e moderno)</p>
            <p><strong>Instalar:</strong> <code>npm install dayjs</code></p>

            <ul className="checklist">
              <li>Instale o pacote dayjs</li>
              <li>Descomente o import no topo</li>
              <li>Substitua os "???" pelos valores usando dayjs</li>
            </ul>

            <pre>{`import dayjs from 'dayjs'

dayjs().format('DD/MM/YYYY')           // "15/09/2026"
dayjs().format('HH:mm:ss')            // "14:30:00"
dayjs().format('dddd')                 // "Monday"
dayjs('2026-12-25').diff(dayjs(), 'day') // dias até Natal`}</pre>

            <div className="preview-area" style={{ textAlign: 'left', fontStyle: 'normal', fontFamily: 'monospace' }}>
              {/* TODO: Substitua os "???" usando dayjs() */}
              <p>Data de hoje: <strong>{dayjs().format('DD/MM/YYYY')}</strong></p>
              <p>Hora atual: <strong>{dayjs().format('HH:mm:ss')}</strong></p>
              <p>Dia da semana: <strong>{dayjs().format('dddd')}</strong></p>
              <p>Dias para o Natal: <strong>{dayjs('2026-12-25').diff(dayjs(), 'day')}</strong></p>
              <p>Dias desde 01/01/2000: <strong>???</strong></p>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 4 - react-toastify */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 4 - react-toastify <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>react-toastify</code> - Notificacoes bonitas no React</p>
            <p><strong>Instalar:</strong> <code>npm install react-toastify</code></p>

            <ul className="checklist">
              <li>Instale o pacote react-toastify</li>
              <li>Descomente os imports no topo (ToastContainer, toast, e o CSS)</li>
              <li>Adicione {"<ToastContainer />"} no final do componente (antes do {"</>"})</li>
              <li>Chame toast() nos botoes abaixo</li>
            </ul>

            <pre>{`// Imports:
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// No final do JSX, antes de </>:
<ToastContainer />

// Nos botões:
toast.success('Deu certo!')
toast.error('Deu erro!')
toast.info('Informação')
toast.warn('Cuidado!')`}</pre>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <button className="btn btn-green" onClick={() => {
                // TODO: Substitua o alert por toast.success('Parabens! Voce conseguiu!')
                toast.success('Deu certo!')
              }}>Sucesso</button>

              <button className="btn" style={{ background: '#da3633' }} onClick={() => {
                // TODO: Substitua o alert por toast.error('Algo deu errado!')
                toast.error('Deu erro!')
              }}>Erro</button>

              <button className="btn btn-blue" onClick={() => {
                // TODO: Substitua o alert por toast.info('Voce sabia? NPM tem mais de 2 milhões de pacotes!')
                toast.info('Informação')
              }}>Info</button>

              <button className="btn" style={{ background: '#d29922' }} onClick={() => {
                // TODO: Substitua o alert por toast.warn('Cuidado com pacotes desconhecidos!')
                toast.warn('Cuidado!')
              }}>Aviso</button>
            </div>

            {<ToastContainer />}
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 5 - uuid */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 5 - uuid <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>uuid</code> - Gera identificadores unicos universais</p>
            <p><strong>Instalar:</strong> <code>npm install uuid</code></p>

            <ul className="checklist">
              <li>Instale o pacote uuid</li>
              <li>Descomente o import no topo</li>
              <li>No botao "Adicionar", gere um id com uuidv4()</li>
              <li>Adicione o usuario ao estado com setUsuarios</li>
            </ul>

            <pre>{`import { v4 as uuidv4 } from 'uuid'

// Criar usuario:
const novoUsuario = {
  id: uuidv4(),           // "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
  nome: nomeInput,
  criadoEm: new Date().toLocaleString()
}
setUsuarios([...usuarios, novoUsuario])`}</pre>

            <div className="input-group">
              <input
                type="text"
                placeholder="Nome do usuario"
                value={nomeInput}
                onChange={(e) => setNomeInput(e.target.value)}
              />
              <button className="btn btn-green" onClick={() => {
                if (!nomeInput.trim()) return
                const novoUsuario = {
                  id: uuidv4(),           // "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
                  nome: nomeInput,
                  criadoEm: new Date().toLocaleString()
                }
                setUsuarios([...usuarios, novoUsuario])
              }}>Adicionar</button>
            </div>

            <div className="preview-area" style={{ textAlign: 'left', fontStyle: 'normal' }}>
              {usuarios.length === 0
                ? 'Nenhum usuario criado ainda...'
                : usuarios.map(u => (
                    <div key={u.id} style={{ marginBottom: '0.5rem', padding: '0.5rem', background: '#161b22', borderRadius: '4px' }}>
                      <strong>{u.nome}</strong>
                      <br />
                      <span style={{ color: '#484f58', fontSize: '0.8rem' }}>ID: {u.id}</span>
                      <br />
                      <span style={{ color: '#484f58', fontSize: '0.8rem' }}>Criado em: {u.criadoEm}</span>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 6 - react-spinners */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 6 - react-spinners <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>react-spinners</code> - Animacoes de carregamento</p>
            <p><strong>Instalar:</strong> <code>npm install react-spinners</code></p>

            <ul className="checklist">
              <li>Instale o pacote react-spinners</li>
              <li>Descomente o import no topo</li>
              <li>Renderize os spinners na area de preview</li>
              <li>Use loading como prop para controlar visibilidade</li>
            </ul>

            <pre>{`import { ClipLoader, BounceLoader, RingLoader, PulseLoader } from 'react-spinners'

// No JSX:
<ClipLoader color="#58a6ff" loading={loading} size={50} />
<BounceLoader color="#7ee787" loading={loading} size={60} />
<RingLoader color="#f0883e" loading={loading} size={50} />
<PulseLoader color="#a371f7" loading={loading} size={15} />`}</pre>

            <button className="btn btn-blue" onClick={() => setLoading(!loading)}>
              {loading ? 'Parar Loading' : 'Mostrar Spinners'}
            </button>

            <div className="preview-area" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', minHeight: '80px', fontStyle: 'normal' }}>
              {loading
                ? <>
                    {/* TODO: Substitua estes textos pelos componentes de spinner */}
                    <span><ClipLoader color="#58a6ff" loading={loading} size={50} /></span>
                    <span><BounceLoader color="#7ee787" loading={loading} size={60} /></span>
                    <span><RingLoader color="#f0883e" loading={loading} size={50} /></span>
                    <span><PulseLoader color="#a371f7" loading={loading} size={15} /></span>
                  </>
                : 'Clique no botao para ver os spinners'
              }
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO 7 - react-type-animation */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio 7 - react-type-animation <span className="badge badge-todo">TODO</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Pacote:</strong> <code>react-type-animation</code> - Efeito de digitacao automatica</p>
            <p><strong>Instalar:</strong> <code>npm install react-type-animation</code></p>

            <ul className="checklist">
              <li>Instale o pacote react-type-animation</li>
              <li>Descomente o import no topo</li>
              <li>Substitua o texto estatico pelo componente TypeAnimation</li>
            </ul>

            <pre>{`import { TypeAnimation } from 'react-type-animation'

// No JSX:
<TypeAnimation
  sequence={[
    'Eu amo React!', 2000,
    'Eu amo Node.js!', 2000,
    'Eu amo NPM!', 2000,
    'Eu amo programar!', 2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  style={{ color: '#58a6ff' }}
/>`}</pre>

            <div className="preview-area" style={{ fontStyle: 'normal', fontSize: '1.5rem' }}>
              {/* TODO: Substitua o texto abaixo pelo componente <TypeAnimation /> */}
              <h2 style={{ color: '#58a6ff' }}><TypeAnimation
  sequence={[
    'A tarefa ta feito luan', 2000,
    'Ta feito, ta?', 2000,
    'ta, chega né, ja pode me dar o 10', 2000,
    'vai colocar uma cueca RAPAAAAAAAAAAAAAAAAZ', 2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  style={{ color: '#58a6ff' }}
/></h2>
            </div>
          </div>
        </div>

        {/* ============================================ */}
        {/* EXERCÍCIO BÔNUS */}
        {/* ============================================ */}
        <div className="card">
          <div className="card-header">
            <h3>Exercicio Bonus <span className="badge badge-bonus">BONUS</span></h3>
          </div>
          <div className="card-body">
            <p><strong>Combine 2 ou mais bibliotecas de forma criativa!</strong></p>

            <ul className="checklist">
              <li>Ao criar usuario (uuid), mostrar confetes (react-confetti)</li>
              <li>Mostrar toast de sucesso quando usuario for criado (react-toastify + uuid)</li>
              <li>Animacao de digitacao mostrando a data atual (react-type-animation + dayjs)</li>
              <li>Spinner que aparece por 3 segundos, depois mostra toast de "carregado" (react-spinners + react-toastify)</li>
              <li>Invente o seu proprio!</li>
            </ul>

            <div className="preview-area">
              Implemente algo criativo aqui combinando pacotes!
            </div>
          </div>
        </div>

      </div>

      {/* TODO: Adicione <ToastContainer /> aqui quando implementar exercicio 4 */}

      <footer>
        <p>SENAI - Atividades Node.js, NPM & React</p>
      </footer>
    </>
  )
}

export default App
