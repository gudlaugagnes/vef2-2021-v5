// TODO sækja og setja upp react router

import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/:id" component={NewsPage} />
          <Route exact component={NotFound} />
      </Switch>
    </Layout>
  );
}
