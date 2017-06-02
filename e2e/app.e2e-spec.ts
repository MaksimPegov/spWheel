import { SimpleFierebaseAppPage } from './app.po';

describe('simple-fierebase-app App', () => {
  let page: SimpleFierebaseAppPage;

  beforeEach(() => {
    page = new SimpleFierebaseAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
