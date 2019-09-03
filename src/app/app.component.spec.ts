import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement }  from '@angular/core';


import { AppComponent } from './app.component';

//

describe('Integration::AppComponent', () => {
  it('should display some text', () => {
    // given
    const { comp, el, fixture } = setup();

    // when
    fixture.detectChanges();


  });

  it('should contain hello component', () => {
    // given
    const { comp, el, fixture } = setup();

    // when
    fixture.detectChanges();

    // then
    expect(el.textContent).toContain('hello');
  });
});

//

function setup () {
  
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      MockComponent({
        selector: 'hello', 
        template: 'hello',
        inputs: ['name']
      })
    ],
  });

  const fixture = TestBed.createComponent(AppComponent);

  const comp = fixture.componentInstance;

  const de = fixture.debugElement;
  const el = de.nativeElement;

  return {comp, fixture, de, el}
}