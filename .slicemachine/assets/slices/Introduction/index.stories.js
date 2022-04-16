import MyComponent from '../../../../slices/Introduction';

export default {
  title: 'slices/Introduction'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"introduction","items":[],"primary":{"title":[{"type":"heading2","text":"Expedite efficient communities","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt qui ad laboris. Aliquip eiusmod ex do velit non cupidatat.","spans":[]}]},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _Blue = () => <MyComponent slice={{"variation":"blue","name":"Blue","slice_type":"introduction","items":[],"primary":{"title":[{"type":"heading2","text":"E-enable scalable initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Aute occaecat sint ipsum in est quis amet. Consequat eiusmod laborum exercitation. Quis anim dolore elit incididunt enim dolore id enim voluptate commodo elit qui.","spans":[]}],"color":"blue"},"id":"_Blue"}} />
_Blue.storyName = 'Blue'
