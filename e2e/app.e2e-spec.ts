import { Iibratan.ComPage } from './app.po';

describe('iibratan.com App', () => {
  let page: Iibratan.ComPage;

  beforeEach(() => {
    page = new Iibratan.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
