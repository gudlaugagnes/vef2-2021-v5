// TODO sækja og setja upp react router

import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Index } from './pages/Index';
import { NotFound } from './pages/NotFound';
import { NewsPage } from './pages/News';

export default function App() {
  return (
    <Layout title="RÚV fréttir">
      <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/:id" component={NewsPage} />
          <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}
