import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpradmProyectosAboutCapitulo16Component } from './spradm-proyectos-about-capitulo16.component';

describe('SpradmProyectosAboutCapitulo16Component', () => {
  let component: SpradmProyectosAboutCapitulo16Component;
  let fixture: ComponentFixture<SpradmProyectosAboutCapitulo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpradmProyectosAboutCapitulo16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpradmProyectosAboutCapitulo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
