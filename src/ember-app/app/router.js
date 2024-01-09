import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-k-r1-заказ-l');
  this.route('i-i-s-k-r1-заказ-e',
  { path: 'i-i-s-k-r1-заказ-e/:id' });
  this.route('i-i-s-k-r1-заказ-e.new',
  { path: 'i-i-s-k-r1-заказ-e/new' });
  this.route('i-i-s-k-r1-клиент-l');
  this.route('i-i-s-k-r1-клиент-e',
  { path: 'i-i-s-k-r1-клиент-e/:id' });
  this.route('i-i-s-k-r1-клиент-e.new',
  { path: 'i-i-s-k-r1-клиент-e/new' });
  this.route('i-i-s-k-r1-оператор-l');
  this.route('i-i-s-k-r1-оператор-e',
  { path: 'i-i-s-k-r1-оператор-e/:id' });
  this.route('i-i-s-k-r1-оператор-e.new',
  { path: 'i-i-s-k-r1-оператор-e/new' });
  this.route('i-i-s-k-r1-проверка-киоска-l');
  this.route('i-i-s-k-r1-проверка-киоска-e',
  { path: 'i-i-s-k-r1-проверка-киоска-e/:id' });
  this.route('i-i-s-k-r1-проверка-киоска-e.new',
  { path: 'i-i-s-k-r1-проверка-киоска-e/new' });
  this.route('i-i-s-k-r1-товары-l');
  this.route('i-i-s-k-r1-товары-e',
  { path: 'i-i-s-k-r1-товары-e/:id' });
  this.route('i-i-s-k-r1-товары-e.new',
  { path: 'i-i-s-k-r1-товары-e/new' });
  this.route('i-i-s-k-r1-фотокиоск-l');
  this.route('i-i-s-k-r1-фотокиоск-e',
  { path: 'i-i-s-k-r1-фотокиоск-e/:id' });
  this.route('i-i-s-k-r1-фотокиоск-e.new',
  { path: 'i-i-s-k-r1-фотокиоск-e/new' });
  this.route('i-i-s-k-r1-чек-l');
  this.route('i-i-s-k-r1-чек-e',
  { path: 'i-i-s-k-r1-чек-e/:id' });
  this.route('i-i-s-k-r1-чек-e.new',
  { path: 'i-i-s-k-r1-чек-e/new' });
});

export default Router;
