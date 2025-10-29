import Team from '../js/task.js';
import Character from '../js/Character.js';

describe('Team class', () => {
  let team;
  let char1;
  let char2;

  beforeEach(() => {
    team = new Team();
    char1 = new Character('Лучник');
    char2 = new Character('Мечник');
  });

  test('должен добавлять персонажа в команду', () => {
    team.add(char1);
    expect(team.members.has(char1)).toBe(true);
  });

  test('должен генерировать ошибку при добавлении дубля', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Этот персонаж уже добавлен в команду');
  });

  test('должен генерировать ошибку при добавлении не-Character объекта', () => {
    const notCharacter = { name: 'Фейк' };
    expect(() => team.add(notCharacter)).toThrow('Можно добавлять только объекты класса Character');
  });

  test.each([
    [[new Character('Лучник'), new Character('Мечник'), new Character('Маг')], 3],
    [[new Character('Лучник'), new Character('Лучник')], 2], // исправлено: Set хранит уникальные ссылки, не имена
  ])('должен корректно добавлять всех через addAll %#', (chars, expectedCount) => {
    team.addAll(...chars);
    expect(team.members.size).toBe(expectedCount);
  });

  test('addAll должен игнорировать не-Character объекты', () => {
    team.addAll(char1, { name: 'Фейк' });
    expect(team.members.has(char1)).toBe(true);
    expect(team.members.size).toBe(1);
  });

  test('toArray должен возвращать массив персонажей', () => {
    team.addAll(char1, char2);
    const arr = team.toArray();
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toContain(char1);
    expect(arr).toContain(char2);
  });
});
