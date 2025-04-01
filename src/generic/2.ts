/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, keyof AllType>,
  U extends Pick<AllType, keyof AllType>
>(top1: T, bottom: U): AllType {
  return {
    name: top1.name,
    color: top1.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
