import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetAdderComponent } from './snippet-adder.component';

describe('SnippetAdderComponent', () => {
  let component: SnippetAdderComponent;
  let fixture: ComponentFixture<SnippetAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
