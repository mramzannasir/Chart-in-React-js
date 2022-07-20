import { Polar } from '../src/index';
import { data } from '../sandboxes/polar/components/data';

import { render } from '@testing-library/svelte';

const options = {
  responsive: true,
};

describe('Polar Chart', () => {
  it('should render a canvas', () => {
    const { container } = render(Polar);
    const canvas = container.querySelector('canvas');

    expect(canvas).not.toBeNull();
  });

  it('should pass data prop', () => {
    const component = render(Polar, { props: { data } });

    expect(() => component).not.toThrow();
  });

  it('should pass options prop', () => {
    const component = render(Polar, { props: { options } });

    expect(() => component).not.toThrow();
  });
});