const resolvePlugin = {
  name: 'resolve',
  setup(build) {
    build.onResolve({ filter: /^preact$/ }, () => {
      return {
        path: require('path').resolve(
          'node_modules/preact/dist/preact.module.js'
        )
      }
    })
  }
}

require('esbuild').build({
  entryPoints: ['node_modules/preact/dist/preact.module.js', 'cjs-call.js'],
  splitting: true,
  bundle: true,
  format: 'esm',
  outdir: 'dist',
  plugins: [resolvePlugin]
})
