import Character from './Character.js';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!(character instanceof Character)) {
      throw new Error('Можно добавлять только объекты класса Character');
    }
    if (this.members.has(character)) {
      throw new Error('Этот персонаж уже добавлен в команду');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((char) => {
      if (char instanceof Character) {
        this.members.add(char);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
