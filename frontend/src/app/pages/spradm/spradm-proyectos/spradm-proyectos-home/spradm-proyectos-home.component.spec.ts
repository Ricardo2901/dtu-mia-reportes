import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosHomeComponent } from './spradm-proyectos-home.component';

describe('SpradmProyectosHomeComponent', () => {
  let component: SpradmProyectosHomeComponent;
  let fixture: ComponentFixture<SpradmProyectosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
