import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MachinesListView } from './views/MachinesList';
import { HomeView } from './views/Home';
import { PlaygroundView } from './views/Playground';
import DATA from './data/data.json';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/list" element={<MachinesListView data={DATA.data} />} />
        <Route path="/playground" element={<PlaygroundView />} />
      </Route>
    </Routes>
  );
};
