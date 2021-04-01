import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jest';
  imc: any = null;
  form: FormGroup;
  imcInfo: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.createForm();
  }

  onSubmit() {
    this.imc = this.calculateIMC(this.form.value.height, this.form.value.weight)
    this.imcInfo = this.getImcInfo(this.imc);
  }

  calculateIMC(height: number, weight: number) {
    const imc = weight / Math.pow(height, 2);
    return Number(imc.toFixed(2));
  }

  getImcInfo(imc: number) {
    switch (true) {
      case (imc < 18.5):
        return 'magreza';
      case (imc >= 18.5 && imc < 24.9):
        return 'normalidade';
      case (imc >= 24.9 && imc < 30):
        return 'sobrepeso';
      case (imc > 30):
        return 'obesidade';
      default:
        return 'fora das faixas comuns'
    }
  }

  private createForm() {
    return this.fb.group({
      height: [null],
      weight: [null]
    })
  }
}