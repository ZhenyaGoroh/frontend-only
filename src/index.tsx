import React from 'react';
import ReactDOM from 'react-dom/client';
import CircleLayout from './widgets/radial-date-selector/RadialDateSelector';

const App: React.FC = () => {
  return <div>Hello, world!</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<CircleLayout />);