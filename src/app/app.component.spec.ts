import { FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  let formBuilderMock: FormBuilder;

  beforeEach(() => {
    formBuilderMock = new FormBuilder();
    fixture = new AppComponent(formBuilderMock);
  });

  describe('Test: IMC calculate', () => {
    it("Using height's value of 1.73m and weight's value of 73kg", () => {
      expect(fixture.calculateIMC(1.73, 73)).toBe(24.39)
    });
    it("Using height's value of 1.63m and weight's value of 63kg", () => {
      expect(fixture.calculateIMC(1.63, 63)).toBe(23.71)
    });
  });

  describe('Test: IMC info', () => {
    it("Using IMC's value of 33", () => {
      expect(fixture.getImcInfo(33)).toBe('obesidade')
    });
  })
})
