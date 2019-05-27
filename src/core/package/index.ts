export interface Package {
  _from: string
  _id: string
  _inBundle: boolean
  _integrity: string
  _location: string
  _phantomChildren: {}
  _requested: {
    type: string
    registry: boolean
    raw: string
    name: string
    escapedName: string
    scope: string
    rawSpec: string
    saveSpec: object
    fetchSpec: string
  }
  _requiredBy: Array<string>
  _resolved: string
  _shasum: string
  _spec: string
  _where: string
  bugs: { url: string }
  bundleDependencies: boolean
  contributors: Array<{ name: string; url: string }>
  dependencies: {}
  deprecated: boolean
  description: string
  homepage: string
  license: string
  main: string
  name: string
  repository: { type: string; url: string }
  scripts: {}
  typeScriptVersion: string
  types: string
  typesPublisherContentHash: string
  version: string
}
