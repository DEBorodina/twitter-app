import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from '.';

describe('Search user test', () => {
  beforeEach(() => {
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    const portal = document.getElementById('portal')!;
    portal.outerHTML = '';
  });

  it('Should display modal', () => {
    render(
      <Modal setOpen={jest.fn()}>
        <div>modal</div>
      </Modal>
    );
    expect(screen.getByText('modal')).toBeInTheDocument();
  });

  it("Shouldn't display modal", () => {
    render(
      <Modal setOpen={jest.fn()}>
        <div>modal</div>
      </Modal>
    );
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText('modal')).not.toBeInTheDocument();
  });
});
