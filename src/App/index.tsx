import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import TodoMVC from './TodoMVC'

const App: React.FC = () => (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<TodoMVC />} />
          <Route path="/active" element={<TodoMVC />} />
          <Route path="/completed" element={<TodoMVC />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
)

export default App
