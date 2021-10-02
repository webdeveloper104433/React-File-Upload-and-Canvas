// import logo from './logo.svg';
// import './App.css';

function App() {
  return (

    <div className="sm:container sm:mx-auto">
      <div className="flex h-full">
        <div className="w-1/5 h-screen bg-purple-100 text-2xl">
          <div className="mt-10">
            <a className="font-medium text-blue-500 underline hover:text-blue-700 block" href="#">Take Picture</a>
            <a className="text-blue-500 hover:text-blue-800 block" href="#">Show all pictures</a>
          </div>
        </div>
        
        <div className="w-4/5">
          <div className="m-5 text-blue-500 text-4xl">Take Picture Page</div>
        </div>
      </div>
    </div>
  );
}

export default App;
