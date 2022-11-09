export interface ItemInterface {
  title: string;
  id: string;
  info: string;
  marked: boolean;
}
export const generateId = ():string => {
  const x = "abcdefghijklmnopqrstuvwxyz";
  let op = "";
  for (let i = 0; i < 10; i++) {
    op+= x[Math.floor(Math.random()*x.length)]
  }
  console.log(op)
  return(op)
};
