export function getClassName(
  block: string,
  modifiers: Record<string, string>,
  props: Record<string, any>,
) {
  const className = [block]
  for (const key in modifiers) {
    if (props[key]) {
      className.push(modifiers[key])
    }
  }
  if (props.className) {
    className.push(props.className)
  }
  return className.join(' ')
}
