import { Layout } from '../shared/ui/layout/'
import { Header } from '../widgets/header/header'

function App() {
  // Функция устанавливает динамическую высоту видимой области
  function setViewportProperty() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  // Реагируем на изменение размеров экрана
  window.addEventListener('resize', setViewportProperty)

  // Выполняем инициализацию
  setViewportProperty()
  return <Layout header={<Header />} />
}

export default App
