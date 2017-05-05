import { DatingSiteMaterialPage } from './app.po';

describe('dating-site-material App', () => {
  let page: DatingSiteMaterialPage;

  beforeEach(() => {
    page = new DatingSiteMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
