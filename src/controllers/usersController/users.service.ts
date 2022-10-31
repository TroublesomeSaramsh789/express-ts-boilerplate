interface IUser {
  name: string;
  skill: string;
}

let users: IUser[] = [
  { name: 'Ram', skill: 'backend ' },
  { name: 'Bibhu', skill: 'mobile ' },
  { name: 'Aashish', skill: 'backend' },
  { name: 'Kalyan', skill: 'frontend' },
  { name: 'Sameep', skill: 'frontend' },
  { name: 'Nripesh', skill: 'backend' },
  { name: 'Saramsh', skill: 'frontend' },
];

export const getUsers = () => {
  return users;
};

export const addUser = (data: IUser) => {
  users.push(data);
  return data;
};

export const deleteUser = (name: string) => {
  users = users.filter((item) => item.name !== name);
  return `${name} is deleted`;
};

export const getUser = (name: string) => {
  const user = users.find(
    (item) => item.name?.toLowerCase() === name?.toLocaleLowerCase()
  );
  if (user) return user;
  else return `${name} is not found`;
};
