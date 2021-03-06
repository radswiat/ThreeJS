import Dat from 'dat.gui/build/dat.gui.js'

import { isDefined } from '@game/utils'

export default new (class DatGUI {
  events = {}

  controlsGroups = [
    ['World', 'world', [['add', 'chunk:mod', 30.0, -60.0, 60.0]]],
    [
      'Spot light',
      'spot:light',
      [
        ['addColor', 'color', 0x8c8c8c],
        ['add', 'shadow', 4096, 0, 100000],
        ['add', 'position:x', -441, -100000, 100000],
        ['add', 'position:y', 889, -100000, 100000],
        ['add', 'position:z', -1563, -100000, 100000],
        ['add', 'angle', 2.2, -10.0, 10.0],
        ['add', 'penumbra', 0.0, 0, 1],
        ['add', 'decay', 1, -10, 10],
        ['add', 'distance', 10000, 0, 20000],
        ['add', 'bias', 0.0, -0.0003, 0.0003],
      ],
    ],
    ['Ambient light', 'ambient:light', [['addColor', 'color', 0x919191]]],
    [
      'Hemi light',
      'hemi:light',
      [
        ['addColor', 'color1', 0x6a777d],
        ['addColor', 'color2', 0x848484],
        ['add', 'intensity', 0.6, -1, 1],
      ],
    ],
  ]

  constructor() {
    // const gui = new Dat.GUI()
    //
    // // generate default DAT values
    // const Text = function (controlsGroups) {
    //   for (const [groupName, groupTag, items] of controlsGroups) {
    //     for (const [type, name, value] of items) {
    //       this[name] = value
    //     }
    //   }
    // }
    //
    // // create default values
    // const text = new Text(this.controlsGroups)
    //
    // // build dat GUI
    // for (const [groupName, groupTag, items] of this.controlsGroups) {
    //   const guiGroup = gui.addFolder(groupName)
    //   for (const [type, name, value, min, max] of items) {
    //     guiGroup[type](text, name, min, max).onChange((v) => this.handleChange(`${groupTag}:${name}`, v))
    //   }
    // }
  }

  onChange(type, cb) {
    // if (!isDefined(this.events[type])) {
    //   this.events[type] = []
    // }
    // this.events[type].push(cb)
  }

  handleChange(type, value) {
    // if (isDefined(this.events[type])) {
    //   this.events[type].map((cb) => cb(value))
    // }
  }
})()
