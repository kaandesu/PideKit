import { components } from '../constant/'
import { writeFileSync } from 'node:fs'

type Component = keyof typeof components

const componentList = Object.keys(components) as Component[]
const flattenComponents = Object.values(components).flat()

const namespaced = componentList.map((curr: Component) => {
  const tmp: Record<string, string> = {}

  const values = components[curr]
  values.forEach((val) => {
    const truncated = val.replace(curr, '')
    if (truncated) tmp[truncated] = val
  })
  // eslint-disable-next-line max-statements-per-line
  return `export const ${curr} = {\n${Object.keys(tmp)
    .map((k) => {
      return `  ${k}: ${curr}${tmp[k]},\n`
    })
    .join('')}}  as {\n${Object.keys(tmp)
    .map((k) => {
      return `  ${k}: typeof ${curr}${tmp[k]}\n`
    })
    .join('')}}`
})

const template = `
${componentList
  .map((component) => {
    const uniquePrimitives = new Set(
      flattenComponents.filter((prim) => components[component].includes(prim)),
    )

    return `import { ${[...uniquePrimitives]
      .map((c) => `${c} as ${component}${c}`)
      .join(', ')} } from '../components/${component}/primitives'`
  })
  .join('\n\n')}

${namespaced.map((component) => component).join('\n\n')}
`

writeFileSync('src/pidekitLibrary/namespaced/index.ts', template, 'utf-8')
