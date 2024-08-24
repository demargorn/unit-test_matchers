import sort from '../index.js';

test.each([
   [
      [
         { name: 'мечник', health: 10 },
         { name: 'маг', health: 100 },
         { name: 'лучник', health: 80 },
      ],
      [
         { name: 'маг', health: 100 },
         { name: 'лучник', health: 80 },
         { name: 'мечник', health: 10 },
      ],
   ],
   [
      [
         { name: 'мечник', health: 90 },
         { name: 'маг', health: 70 },
         { name: 'лучник', health: 10 },
      ],
      [
         { name: 'мечник', health: 90 },
         { name: 'маг', health: 70 },
         { name: 'лучник', health: 10 },
      ],
   ],
   [
      [
         { name: 'мечник', health: 100 },
         { name: 'маг', health: 10 },
         { name: 'лучник', health: 80 },
      ],
      [
         { name: 'мечник', health: 100 },
         { name: 'лучник', health: 80 },
         { name: 'маг', health: 10 },
      ],
   ],
])('testing sort fn with %a hero', (hero, expected) => {
   const result = sort(hero);
   expect(result).toEqual(expected);
});
