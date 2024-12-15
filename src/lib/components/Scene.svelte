<script lang="ts">
  import { T } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, Text } from '@threlte/extras'
  import { floorLayout, cabs } from '../dcim.ts';

  import Rack from './models/server_rack.svelte'
  import CRAC from './models/crac_ph250.svelte'

  const rows = [...Array(floorLayout.tilesY).keys()]
    .map((val) => val + 1)
  const aisles = [...Array(floorLayout.tilesX).keys()]
    .map((val) => String.fromCharCode(65+(val%26))
                        .repeat(Math.floor(val/26)+1))

  const getCabPosition = (name: string) => {
    let [aisle, row] = name.match(/(^[A-Z])+|([0-9]+$)/g)
    return [aisles.indexOf(aisle)-floorLayout.tilesX/2, 0, rows.indexOf(Number(row))-floorLayout.tilesY/2]
  }
</script>

<!-- ENVIRONMENT -->
<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  fov={55}
>
  <OrbitControls
    enableZoom={false}
    enableDamping
    target.y={3}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={6.8}
  position.x={0}
  position.y={8}
/>
<T.AmbientLight intensity={0.8} />

<ContactShadows
  scale={10}
  blur={2}
  far={2.5}
  opacity={0.5}
/>

<!-- LAYOUT -->
<Grid
  position.y={-0.001}
  gridSize={[floorLayout.tilesX, floorLayout.tilesY]}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={125}
  cellSize={1}
/>

<!-- NUMBERING -->
{#each rows as row, i}
<T.Mesh
  position.z={-floorLayout.tilesY/2 + i}
  position.y={8}
  position.x={floorLayout.tilesX/2}
>
  <Text
    text={row}
    fontSize={0.5}
    color="#F8B152"
    rotation={[0, -Math.PI/2, 0]}
  />
  <T.MeshStandardMaterial />
</T.Mesh>
{/each}

{#each aisles as aisle, i}
<T.Mesh
  position.z={-floorLayout.tilesY/2}
  position.y={8}
  position.x={-floorLayout.tilesX/2 + i}
>
  <Text
    text={aisle}
    fontSize={0.5}
    color="#F8B152"
  />
  <T.MeshStandardMaterial />
</T.Mesh>
{/each}

<!-- CABINETS -->
{#each cabs as cab}
<Rack
  position={getCabPosition(cab)}
  rotation={[0, -Math.PI/2, 0]}
  scale={2}
/>
<Float
  floatIntensity={2}
  scale={1.5}
>
  <Text
    text="{Math.floor(75+(Math.random()*10))}"
    fontSize={0.3}
    color="red"
    position={getCabPosition(cab).toSpliced(1, 1, 4)}
    rotation={[0, -Math.PI/2, 0]}
  />
</Float>

{/each}

<!-- COOLING -->
<CRAC
  position={getCabPosition("L2").toSpliced(1, 1, -1)}
  scale={0.05}
/>

<CRAC
  position={getCabPosition("W2").toSpliced(1, 1, -1)}
  scale={0.05}
/>
<CRAC
  position={getCabPosition("L42").toSpliced(1, 1, -1)}
  scale={0.05}
  rotation={[0, -Math.PI, 0]}
/>
<CRAC
  position={getCabPosition("W42").toSpliced(1, 1, -1)}
  scale={0.05}
  rotation={[0, -Math.PI, 0]}
/>
