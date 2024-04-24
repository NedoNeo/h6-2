export default function showAttackType(obj) {
  const {special} = obj;

  special.forEach(element => {
    const {id, name, icon, description = 'описание недоступно'} = element;
    element.description = description;
  })
  return special;
}