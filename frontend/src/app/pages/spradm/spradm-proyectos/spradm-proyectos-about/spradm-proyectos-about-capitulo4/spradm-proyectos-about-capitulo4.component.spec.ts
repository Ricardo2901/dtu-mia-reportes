import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo4Component } from './spradm-proyectos-about-capitulo4.component';

describe('SpradmProyectosAboutCapitulo4Component', () => {
  let component: SpradmProyectosAboutCapitulo4Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
