import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCriptosComponent } from './lista-criptos.component';

describe('ListaCriptosComponent', () => {
  let component: ListaCriptosComponent;
  let fixture: ComponentFixture<ListaCriptosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCriptosComponent]
    });
    fixture = TestBed.createComponent(ListaCriptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
