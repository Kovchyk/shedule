import { SheduleProjectPage } from './app.po';

describe('shedule-project App', function() {
  let page: SheduleProjectPage;

  beforeEach(() => {
    page = new SheduleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
