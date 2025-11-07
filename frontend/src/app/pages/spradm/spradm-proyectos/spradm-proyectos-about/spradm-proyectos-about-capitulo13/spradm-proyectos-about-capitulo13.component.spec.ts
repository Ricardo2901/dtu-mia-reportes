import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo13Component } from './spradm-proyectos-about-capitulo13.component';

describe('SpradmProyectosAboutCapitulo13Component', () => {
  let component: SpradmProyectosAboutCapitulo13Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
