import { ElicenseTemplatePage } from './app.po';

describe('Elicense App', function() {
  let page: ElicenseTemplatePage;

  beforeEach(() => {
    page = new ElicenseTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
