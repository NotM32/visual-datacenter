<!--
Auto-generated by: https://github.com/threlte/threlte/tree/main/packages/gltf
Command: npx @threlte/gltf@2.0.3 /home/m32/projects/colo/vis3d/static/models/server_rack_empty.glb --root /models/ --types --printwidth 120 --precision 2
Author: Full Barrel Productions (https://sketchfab.com/Full_Barrel_Production)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/server-rack-3c1891f5a6764c6db5af13455e696bf4
Title: Server Rack
-->

<script lang="ts">
  import type * as THREE from 'three'
  import { Group } from 'three'
  import { T, type Props, type Events, type Slots, forwardEventHandlers } from '@threlte/core'
  import { useGltf } from '@threlte/extras'

  type $$Props = Props<THREE.Group>
  type $$Events = Events<THREE.Group>
  type $$Slots = Slots<THREE.Group> & { fallback: {}; error: { error: any } }

  export const ref = new Group()

  type GLTFResult = {
    nodes: {
      Object_4: THREE.Mesh
      Object_5: THREE.Mesh
      Object_6: THREE.Mesh
      Object_7: THREE.Mesh
      Object_8: THREE.Mesh
      Object_9: THREE.Mesh
      Object_10: THREE.Mesh
      Object_11: THREE.Mesh
      Object_12: THREE.Mesh
      Object_14: THREE.Mesh
      Object_16: THREE.Mesh
      Object_17: THREE.Mesh
    }
    materials: {
      Black_Metal: THREE.MeshStandardMaterial
      Shiney_Metal: THREE.MeshStandardMaterial
      ['Rack_-_Metallic_Gray.002']: THREE.MeshStandardMaterial
    }
  }

  const gltf = useGltf<GLTFResult>('/models/server_rack_empty.glb')

  const component = forwardEventHandlers()
</script>

<T is={ref} dispose={false} {...$$restProps} bind:this={$component}>
  {#await gltf}
    <slot name="fallback" />
  {:then gltf}
    <T.Group position={[-0.27, 1.08, 0.56]}>
      <T.Mesh geometry={gltf.nodes.Object_4.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_5.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_6.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_7.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_8.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_9.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_10.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_11.geometry} material={gltf.materials.Black_Metal} />
      <T.Mesh geometry={gltf.nodes.Object_12.geometry} material={gltf.materials.Shiney_Metal} />
    </T.Group>
    <T.Mesh geometry={gltf.nodes.Object_14.geometry} material={gltf.materials.Black_Metal} position={[0, 0, 0.05]} />
    <T.Mesh geometry={gltf.nodes.Object_16.geometry} material={gltf.materials.Black_Metal} />
    <T.Mesh geometry={gltf.nodes.Object_17.geometry} material={gltf.materials['Rack_-_Metallic_Gray.002']} />
  {:catch error}
    <slot name="error" {error} />
  {/await}

  <slot {ref} />
</T>
