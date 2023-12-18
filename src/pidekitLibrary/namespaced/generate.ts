import { components } from '../constant/'
import { writeFileSync } from 'node:fs'

type Component = keyof typeof components

const componentList = Object.keys(components) as Component[]
const flattenComponents = Object.values(components).flat()

const namespaced = componentList.map((curr: Component) => {
  const key = curr.charAt(0).toUpperCase() + curr.slice(1)
  const tmp: Record<string, string> = {}

  const values = components[curr]
  values.forEach((val) => {
    const truncated = val.replace(key, '')
    if (truncated) tmp[truncated] = val
  })

  if (Object.keys(tmp).length === 0) return `export { ${key} }`
  // eslint-disable-next-line max-statements-per-line
  else
    return `export const ${key} = {\n${Object.keys(tmp)
      .map((k) => {
        return `  ${k}: ${tmp[k]},\n`
      })
      .join('')}}  as {\n${Object.keys(tmp)
      .map((k) => {
        return `  ${k}: typeof ${tmp[k]}\n`
      })
      .join('')}}`
})

//! TODO: Change from link to 'pidekit' before release?????
const template = `
import { ${flattenComponents.join(', ')} } from '../components/Dialog/primitives'

${namespaced.map((component) => component).join('\n\n')}
`

writeFileSync('src/pidekitLibrary/namespaced/index.ts', template, 'utf-8')
