import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* Using Header with props */}
      <Header title="React Vite TSX Demo" />

      <main className="p-4">
        {/* Using Counter (state management example) */}
        <Counter />

        {/* Using TodoList (props and state example) */}
        <TodoList initialTodos={['Learn React', 'Build a project']} />
      </main>
    </div>
  );
};

export default App;
