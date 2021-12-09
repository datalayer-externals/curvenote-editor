import { MyNodeSpec, NodeGroups } from './types';
import { MdFormatSerialize, TexFormatSerialize } from '../serialize/types';

export interface Attrs {
  label: string;
  user: string;
}

function createMentionNodeSpecs() {
  const mentionNodeSpec: MyNodeSpec<Attrs> = {
    group: NodeGroups.inline,
    attrs: { label: { default: '' }, user: { default: '' } },
    inline: true,
    atom: true,
    draggable: true,
    selectable: true,
    toDOM(node: any) {
      const { label, user } = node.attrs;
      return ['span', { title: label, 'data-user': user, class: 'mention' }];
    },
    parseDOM: [
      {
        tag: 'span.mention',
        getAttrs(dom: HTMLSpanElement): Attrs {
          const label = dom.getAttribute('title') || '';
          const user = dom.getAttribute('data-user') || '';
          return { label, user };
        },
      },
    ],
  };
  return {
    mention: mentionNodeSpec,
  };
}

const mention = createMentionNodeSpecs();

export const toMarkdown: MdFormatSerialize = (state, node) => {
  state.write(node.attrs.label);
};

export const toTex: TexFormatSerialize = (state, node) => {
  state.write(node.attrs.label);
};

export default mention;
