import { AlvarezPage } from './app.po';

describe('alvarez App', function() {
  let page: AlvarezPage;

  beforeEach(() => {
    page = new AlvarezPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
