const getWidth = (width: string | number): string => {
  return typeof width === 'string' ? width : `${width}px`
}

export default getWidth
