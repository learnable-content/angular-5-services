import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetCardComponent } from './snippet-card.component';

describe('SnippetCardComponent', () => {
  let component: SnippetCardComponent;
  let fixture: ComponentFixture<SnippetCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
