import { MazeNg2Page } from './app.po';

describe('maze-ng2 App', function() {
  let page: MazeNg2Page;

  beforeEach(() => {
    page = new MazeNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
