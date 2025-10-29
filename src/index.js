import Team from './src/js/task.js';
import Character from './src/js/Character.js';

const team = new Team();

const bowman = new Character('Лучник');
const swordsman = new Character('Мечник');

team.add(bowman);
team.addAll(swordsman, bowman);

console.log('Команда:', team.toArray());


