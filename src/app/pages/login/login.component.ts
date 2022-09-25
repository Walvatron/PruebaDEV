import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tipo:string ='login';

public forma = this.fb.group({

  nombre:['', Validators.required],
  apellido:['', Validators.required],
  Email:['', Validators.required],
  teléfono:[''],
  password:['', Validators.required]

})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

get nombreValido(){
  return this.forma.get('nombre')?.dirty && this.forma.get('nombre')?.touched
}

get nombreNoValido(){
  return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
}

get apellidoValido(){
  return this.forma.get('apellido')?.dirty && this.forma.get('apellido')?.touched
}

get apellidoNoValido(){
  return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched
}

get EmailValido(){
  return this.forma.get('Email')?.dirty && this.forma.get('Email')?.touched
}

get EmailNoValido(){
  return this.forma.get('Email')?.invalid && this.forma.get('Email')?.touched
}

get passwordValido(){
  return this.forma.get('password')?.dirty && this.forma.get('password')?.touched
}

get passwordNoValido(){
  return this.forma.get('password')?.invalid && this.forma.get('password')?.touched
}

  guardar(){
if (this.forma.invalid) {

  return Object.values(this.forma.controls).forEach(control=>{

    control.markAsTouched();

  })

return;

}

    console.log(this.forma.value);
  }

}
