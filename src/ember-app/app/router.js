import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dfdf-дир-персонала-l');
  this.route('i-i-s-dfdf-дир-персонала-e',
  { path: 'i-i-s-dfdf-дир-персонала-e/:id' });
  this.route('i-i-s-dfdf-дир-персонала-e.new',
  { path: 'i-i-s-dfdf-дир-персонала-e/new' });
  this.route('i-i-s-dfdf-согласие-l');
  this.route('i-i-s-dfdf-согласие-e',
  { path: 'i-i-s-dfdf-согласие-e/:id' });
  this.route('i-i-s-dfdf-согласие-e.new',
  { path: 'i-i-s-dfdf-согласие-e/new' });
  this.route('i-i-s-dfdf-сотрудники-l');
  this.route('i-i-s-dfdf-сотрудники-e',
  { path: 'i-i-s-dfdf-сотрудники-e/:id' });
  this.route('i-i-s-dfdf-сотрудники-e.new',
  { path: 'i-i-s-dfdf-сотрудники-e/new' });
});

export default Router;
