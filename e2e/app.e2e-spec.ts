import { AngularMoviesAppPage } from './app.po';

describe('angular-movies-app App', () => {
  let page: AngularMoviesAppPage;

  beforeEach(() => {
    page = new AngularMoviesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
