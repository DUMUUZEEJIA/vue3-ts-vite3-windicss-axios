import fg from 'fast-glob'

export default function loadPagesModule() {
  const modules = fg.sync('./modules/**/*.html')

  return modules.reduce((target, item) => {
    const regItem = item.match(/\/modules\/(\w+)\/(\w+)\.html/)
    const pathName = regItem[1]
    const fileName = regItem[2]
    const key = fileName === 'index' ? pathName : fileName
    target[key] = item
    return target
  }, {})
}
