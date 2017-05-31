export const createMountNode = () => {
  const id = 'stylesheet'
  const mountNode = document.getElementById(id)

  if (!mountNode) {
    const firstMountNode = document.createElement('style')
    firstMountNode.id = id

    const head = (document.head) ? document.head : document.createElement('head')
    head.appendChild(firstMountNode)

    return firstMountNode
  }

  const parentNode = mountNode.parentNode

  const nextMountNode = document.createElement('style')
  nextMountNode.id = 'stylesheet'

  console.log('mountNode', mountNode)
  console.log('parentNode', parentNode)

  parentNode.replaceChild(nextMountNode, mountNode)
  return nextMountNode
}

/*
export const createMountNode = () => {
  const node = document.getElementById('fela-stylesheet')
  const parent = node.parentNode
  if (!node || !parent) {
    throw new Error('missing stylesheet node for Fela')
  }
  const nextNode = document.createElement('style')
  nextNode.id = 'stylesheet'
  parent.replaceChild(nextNode, node)
  return nextNode
}
*/
