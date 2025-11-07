import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosComponent } from './spradm-proyectos.component';

describe('SpradmProyectosComponent', () => {
  let component: SpradmProyectosComponent;
  let fixture: ComponentFixture<SpradmProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
